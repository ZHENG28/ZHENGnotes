---
sidebar_label: 1. SSM源码分析
---

# SSM（Spring + SpringMVC + MyBatis）

:::danger
未看完！看到第 **22** 个视频！！！
:::

## 1 MyBatis源码构建

## 2 MyBatis动态代理

## 3 MyBatis核心SQL映射
0. 以`userMapper.selectById(1)`执行为例，解析源码
1. 进入`MapperProxy.invoke()`：step 1包含序号2-5，step 1包含序号6
    ``` java
    // v3.5.14
    return Object.class.equals(method.getDeclaringClass()) ? method.invoke(this, args) : this.cachedInvoker(method).invoke(proxy, method, args, this.sqlSession);
    // this.cachedInvoker(method)返回值，新建一个MapperMethod对象
    return new MapperProxy.PlainMethodInvoker(new MapperMethod(this.mapperInterface, method, this.sqlSession.getConfiguration()));
    // MapperMethodInvoker.invoke(proxy, method, args, this.sqlSession)返回值
    return this.mapperMethod.execute(sqlSession, args);

    // v3.5.4
    // step 1. 获取一个MapperMethod对象（序号2-5）
    final MapperMethod mapperMethod = cachedMapperMethod(method);
    // step 2. 调用MapperMethod对象的execute方法（序号6）
    return mapperMethod.execute(sqlSession, args);
    ```
2. 查看方法缓存的Map中是否存在这个方法的MapperMethod对象`computeIfAbsent()`：如果存在就直接从缓存中拿，如果没有就将该方法放入缓存中
    ``` java
    // v3.5.14
    return (MapperProxy.MapperMethodInvoker)MapUtil.computeIfAbsent(this.methodCache, method, (m) -> {
        if (!m.isDefault()) {
            return new MapperProxy.PlainMethodInvoker(new MapperMethod(this.mapperInterface, method, this.sqlSession.getConfiguration()));
        } else {
            try {
                return privateLookupInMethod == null ? new MapperProxy.DefaultMethodInvoker(this.getMethodHandleJava8(method)) : new MapperProxy.DefaultMethodInvoker(this.getMethodHandleJava9(method));
            } catch (InstantiationException | InvocationTargetException | NoSuchMethodException | IllegalAccessException var4) {
                throw new RuntimeException(var4);
            }
        }
    });

    // v3.5.4
    return methodCache.computeIfAbsent(method, k -> new MapperMethod(mapperInterface, method, sqlSession.getConfiguration()));
    ```
3. 构建MapperMethod对象：定义SQL命令（SqlCommand对象）和方法签名（MethodSignature对象）
    ``` java
    // v3.5.14 & v3.5.4
    this.command = new MapperMethod.SqlCommand(config, mapperInterface, method);
    this.method = new MapperMethod.MethodSignature(config, mapperInterface, method);
    ```
4. 构建SqlCommand对象：
    ``` java
    // v3.5.14 & v3.5.4
    // new MapperMethod.SqlCommand(config, mapperInterface, method)方法体
    String methodName = method.getName();
    Class<?> declaringClass = method.getDeclaringClass();
    // 解析映射语句，转换成SQL语句对象
    MappedStatement ms = this.resolveMappedStatement(mapperInterface, methodName, declaringClass, configuration);
    if (ms == null) {
        // …
    } else {
        this.name = ms.getId();
        // SQL命令类型：增、删、改、查
        this.type = ms.getSqlCommandType();
        if (this.type == SqlCommandType.UNKNOWN) {
            throw new BindingException("Unknown execution method for: " + this.name);
        }
    }

    // this.resolveMappedStatement(mapperInterface, methodName, declaringClass, configuration)方法体
    String statementId = mapperInterface.getName() + "." + methodName;
    // 查看XML配置文件中是否存在statementId的语句
    if (configuration.hasStatement(statementId)) {
        return configuration.getMappedStatement(statementId);
    } // …
    ```
5. 构建MethodSignature对象：
    ``` java
    // v3.5.14 & v3.5.4
    Type resolvedReturnType = TypeParameterResolver.resolveReturnType(method, mapperInterface);
    if (resolvedReturnType instanceof Class) {
        this.returnType = (Class)resolvedReturnType;
    } else if (resolvedReturnType instanceof ParameterizedType) {
        this.returnType = (Class)((ParameterizedType)resolvedReturnType).getRawType();
    } else {
        this.returnType = method.getReturnType();
    }
    this.returnsVoid = Void.TYPE.equals(this.returnType);
    this.returnsMany = configuration.getObjectFactory().isCollection(this.returnType) || this.returnType.isArray();
    this.returnsCursor = Cursor.class.equals(this.returnType);
    this.returnsOptional = Optional.class.equals(this.returnType);
    this.mapKey = this.getMapKey(method);
    this.returnsMap = this.mapKey != null;
    this.rowBoundsIndex = this.getUniqueParamIndex(method, RowBounds.class);
    this.resultHandlerIndex = this.getUniqueParamIndex(method, ResultHandler.class);
    this.paramNameResolver = new ParamNameResolver(configuration, method);
    ```
6. 调用MapperMethod对象的`execute()`：
    ``` java
    // v3.5.14 & v3.5.4
    Object result;
    Object param;
    switch(this.command.getType()) {
        case INSERT:
            param = this.method.convertArgsToSqlCommandParam(args);
            result = this.rowCountResult(sqlSession.insert(this.command.getName(), param));
            break;
        case UPDATE:
            param = this.method.convertArgsToSqlCommandParam(args);
            result = this.rowCountResult(sqlSession.update(this.command.getName(), param));
            break;
        case DELETE:
            param = this.method.convertArgsToSqlCommandParam(args);
            result = this.rowCountResult(sqlSession.delete(this.command.getName(), param));
            break;
        case SELECT:
            if (this.method.returnsVoid() && this.method.hasResultHandler()) {
                this.executeWithResultHandler(sqlSession, args);
                result = null;
            } else if (this.method.returnsMany()) {
                result = this.executeForMany(sqlSession, args);
            } else if (this.method.returnsMap()) {
                result = this.executeForMap(sqlSession, args);
            } else if (this.method.returnsCursor()) {
                result = this.executeForCursor(sqlSession, args);
            } else {
                param = this.method.convertArgsToSqlCommandParam(args);
                // 执行查询
                result = sqlSession.selectOne(this.command.getName(), param);
                if (this.method.returnsOptional() && (result == null || !this.method.getReturnType().equals(result.getClass()))) {
                    result = Optional.ofNullable(result);
                }
            }
            break;
        case FLUSH:
            result = sqlSession.flushStatements();
            break;
        default:
            throw new BindingException("Unknown execution method for: " + this.command.getName());
    }
    // …
    ```
7. `selectOne()`调用`selectList()`去数据库查询：
    ``` java
    // 3.5.14
    List var6;
    try {
        MappedStatement ms = this.configuration.getMappedStatement(statement);
        // 判断是否是脏读（数据库的隔离级别）
        this.dirty |= ms.isDirtySelect();
        var6 = this.executor.query(ms, this.wrapCollection(parameter), rowBounds, handler);
    } catch (Exception var10) {
        throw ExceptionFactory.wrapException("Error querying database.  Cause: " + var10, var10);
    } finally {
        ErrorContext.instance().reset();
    }
    return var6;

    // 3.5.4
    try {
        MappedStatement ms = configuration.getMappedStatement(statement);
        return executor.query(ms, wrapCollection(parameter), rowBounds, Executor.NO_RESULT_HANDLER);
    } catch (Exception e) {
        throw ExceptionFactory.wrapException("Error querying database, Cause: " + e, e);
    } finally {
        ErrorContext.instance().reset();
    }
    ```
8. 进入`query()`：
    ``` java
    // 3.5.14 & 3.5.4
    // 单例模式，针对每个线程单开一个记录错误的对象
    ErrorContext.instance().resource(ms.getResource()).activity("executing a query").object(ms.getId());
    if (this.closed) {
        throw new ExecutorException("Executor was closed.");
    } else {
        if (this.queryStack == 0 && ms.isFlushCacheRequired()) {
            this.clearLocalCache();
        }
        List list;
        try {
            ++this.queryStack;
            list = resultHandler == null ? (List)this.localCache.getObject(key) : null;
            if (list != null) {
                this.handleLocallyCachedOutputParameters(ms, key, parameter, boundSql);
            } else {
                // 从数据库查询
                list = this.queryFromDatabase(ms, parameter, rowBounds, resultHandler, key, boundSql);
            }
        } finally {
            --this.queryStack;
        }
        // …
        return list;
    }
    ```
9. `queryFromDatabase()`进入到`doQuery()`：封装JDBC
    ``` java
    // 3.5.14 & 3.5.4
    // doQuery()
    Statement stmt = null;
    List var9;
    try {
        Configuration configuration = ms.getConfiguration();
        StatementHandler handler = configuration.newStatementHandler(this.wrapper, ms, parameter, rowBounds, resultHandler, boundSql);
        // 预编译SQL语句
        stmt = this.prepareStatement(handler, ms.getStatementLog());
        // 执行查询
        var9 = handler.query(stmt, resultHandler);
    } finally {
        this.closeStatement(stmt);
    }
    return var9;

    // this.prepareStatement()
    // 获取与数据库的连接
    Connection connection = this.getConnection(statementLog);
    // 预编译SQL语句
    Statement stmt = handler.prepare(connection, this.transaction.getTimeout());
    handler.parameterize(stmt);
    return stmt;

    // handler.query()
    PreparedStatement ps = (PreparedStatement)statement;
    // 执行预编译SQL语句
    ps.execute();
    return this.resultSetHandler.handleResultSets(ps);
    ```
10. 获取连接`getConnection()`到`openConnection()`：动态代理连接
    ``` java
    // 3.5.14 & 3.5.4
    return this.popConnection(this.dataSource.getUsername(), this.dataSource.getPassword()).getProxyConnection();

    // this.popConnection()
    boolean countedWait = false;
    PooledConnection conn = null;
    long t = System.currentTimeMillis();
    int localBadConnectionCount = 0;
    while(conn == null) {
        // 加锁，确保多线程的情况下连接的安全性
        this.lock.lock();
        try {
            PoolState var10000;
            if (!this.state.idleConnections.isEmpty()) {
                conn = (PooledConnection)this.state.idleConnections.remove(0);
                if (log.isDebugEnabled()) {
                    log.debug("Checked out connection " + conn.getRealHashCode() + " from pool.");
                }
            } else if (this.state.activeConnections.size() < this.poolMaximumActiveConnections) {
                // 获取连接，封装成动态代理对象PooledConnection
                conn = new PooledConnection(this.dataSource.getConnection(), this);
                if (log.isDebugEnabled()) {
                    log.debug("Created connection " + conn.getRealHashCode() + ".");
                }
            } // …
        } finally {
            this.lock.unlock();
        }
        // …
    }
    ```
11. `dataSource.getConnection()`进入到`doGetConnection()`：真正获取连接的方法
    ``` java
    // 3.5.14 & 3.5.4
    Properties props = new Properties();
    if (this.driverProperties != null) {
        props.putAll(this.driverProperties);
    }
    if (username != null) {
        props.setProperty("user", username);
    }
    if (password != null) {
        props.setProperty("password", password);
    }
    return this.doGetConnection(props);

    // this.doGetConnection()
    // 初始化驱动
    this.initializeDriver();
    // 从驱动管理器中获取连接
    Connection connection = DriverManager.getConnection(this.url, properties);
    this.configureConnection(connection);
    return connection;

    // this.initializeDriver()
    if (!registeredDrivers.containsKey(this.driver)) {
        try {
            Class driverType;
            if (this.driverClassLoader != null) {
                // 获取驱动类
                driverType = Class.forName(this.driver, true, this.driverClassLoader);
            } else {
                driverType = Resources.classForName(this.driver);
            }

            Driver driverInstance = (Driver)driverType.getDeclaredConstructor().newInstance();
            // 注册驱动
            DriverManager.registerDriver(new UnpooledDataSource.DriverProxy(driverInstance));
            registeredDrivers.put(this.driver, driverInstance);
        } catch (Exception var3) {
            throw new SQLException("Error setting driver on UnpooledDataSource. Cause: " + var3);
        }
    }
    ```
12. `queryFromDatabase()`进入到`doQuery()`：
    ``` java
    // 3.5.14 & 3.5.4
    ```
13. `queryFromDatabase()`进入到`doQuery()`：
    ``` java
    // 3.5.14 & 3.5.4
    ```
