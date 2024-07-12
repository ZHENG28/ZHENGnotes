"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[4856],{9277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(4848),s=t(8453);const a={sidebar_label:"1. SSM\u6e90\u7801\u5206\u6790"},o="SSM\uff08Spring + SpringMVC + MyBatis\uff09",i={id:"bjpowernode/\u4e3b\u6d41\u6846\u67b6/SSM\u6e90\u7801\u5206\u6790",title:"SSM\uff08Spring + SpringMVC + MyBatis\uff09",description:"1 MyBatis\u6e90\u7801\u6784\u5efa",source:"@site/docs/bjpowernode/04-\u4e3b\u6d41\u6846\u67b6/01-SSM\u6e90\u7801\u5206\u6790.md",sourceDirName:"bjpowernode/04-\u4e3b\u6d41\u6846\u67b6",slug:"/bjpowernode/\u4e3b\u6d41\u6846\u67b6/SSM\u6e90\u7801\u5206\u6790",permalink:"/ZHENGnotes/bjpowernode/\u4e3b\u6d41\u6846\u67b6/SSM\u6e90\u7801\u5206\u6790",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"1. SSM\u6e90\u7801\u5206\u6790"},sidebar:"defaultSidebar",previous:{title:"0. \u5c0f\u7ed3",permalink:"/ZHENGnotes/bjpowernode/\u4e3b\u6d41\u6846\u67b6/summary"},next:{title:"5. \u6846\u67b6\u9879\u76ee\uff08\u7565\uff09",permalink:"/ZHENGnotes/bjpowernode/\u6846\u67b6\u9879\u76ee\uff08\u7565\uff09"}},l={},c=[{value:"1 MyBatis\u6e90\u7801\u6784\u5efa",id:"1-mybatis\u6e90\u7801\u6784\u5efa",level:2},{value:"2 MyBatis\u52a8\u6001\u4ee3\u7406",id:"2-mybatis\u52a8\u6001\u4ee3\u7406",level:2},{value:"3 MyBatis\u6838\u5fc3SQL\u6620\u5c04",id:"3-mybatis\u6838\u5fc3sql\u6620\u5c04",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"ssmspring--springmvc--mybatis",children:"SSM\uff08Spring + SpringMVC + MyBatis\uff09"}),"\n",(0,r.jsx)(n.h2,{id:"1-mybatis\u6e90\u7801\u6784\u5efa",children:"1 MyBatis\u6e90\u7801\u6784\u5efa"}),"\n",(0,r.jsx)(n.h2,{id:"2-mybatis\u52a8\u6001\u4ee3\u7406",children:"2 MyBatis\u52a8\u6001\u4ee3\u7406"}),"\n",(0,r.jsx)(n.h2,{id:"3-mybatis\u6838\u5fc3sql\u6620\u5c04",children:"3 MyBatis\u6838\u5fc3SQL\u6620\u5c04"}),"\n",(0,r.jsxs)(n.ol,{start:"0",children:["\n",(0,r.jsxs)(n.li,{children:["\u4ee5",(0,r.jsx)(n.code,{children:"userMapper.selectById(1)"}),"\u6267\u884c\u4e3a\u4f8b\uff0c\u89e3\u6790\u6e90\u7801"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8fdb\u5165",(0,r.jsx)(n.code,{children:"MapperProxy.invoke()"}),"\uff1astep 1\u5305\u542b\u5e8f\u53f72-5\uff0cstep 1\u5305\u542b\u5e8f\u53f76","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// v3.5.14\nreturn Object.class.equals(method.getDeclaringClass()) ? method.invoke(this, args) : this.cachedInvoker(method).invoke(proxy, method, args, this.sqlSession);\n// this.cachedInvoker(method)\u8fd4\u56de\u503c\uff0c\u65b0\u5efa\u4e00\u4e2aMapperMethod\u5bf9\u8c61\nreturn new MapperProxy.PlainMethodInvoker(new MapperMethod(this.mapperInterface, method, this.sqlSession.getConfiguration()));\n// MapperMethodInvoker.invoke(proxy, method, args, this.sqlSession)\u8fd4\u56de\u503c\nreturn this.mapperMethod.execute(sqlSession, args);\n\n// v3.5.4\n// step 1. \u83b7\u53d6\u4e00\u4e2aMapperMethod\u5bf9\u8c61\uff08\u5e8f\u53f72-5\uff09\nfinal MapperMethod mapperMethod = cachedMapperMethod(method);\n// step 2. \u8c03\u7528MapperMethod\u5bf9\u8c61\u7684execute\u65b9\u6cd5\uff08\u5e8f\u53f76\uff09\nreturn mapperMethod.execute(sqlSession, args);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u67e5\u770b\u65b9\u6cd5\u7f13\u5b58\u7684Map\u4e2d\u662f\u5426\u5b58\u5728\u8fd9\u4e2a\u65b9\u6cd5\u7684MapperMethod\u5bf9\u8c61",(0,r.jsx)(n.code,{children:"computeIfAbsent()"}),"\uff1a\u5982\u679c\u5b58\u5728\u5c31\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u62ff\uff0c\u5982\u679c\u6ca1\u6709\u5c31\u5c06\u8be5\u65b9\u6cd5\u653e\u5165\u7f13\u5b58\u4e2d","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// v3.5.14\nreturn (MapperProxy.MapperMethodInvoker)MapUtil.computeIfAbsent(this.methodCache, method, (m) -> {\n    if (!m.isDefault()) {\n        return new MapperProxy.PlainMethodInvoker(new MapperMethod(this.mapperInterface, method, this.sqlSession.getConfiguration()));\n    } else {\n        try {\n            return privateLookupInMethod == null ? new MapperProxy.DefaultMethodInvoker(this.getMethodHandleJava8(method)) : new MapperProxy.DefaultMethodInvoker(this.getMethodHandleJava9(method));\n        } catch (InstantiationException | InvocationTargetException | NoSuchMethodException | IllegalAccessException var4) {\n            throw new RuntimeException(var4);\n        }\n    }\n});\n\n// v3.5.4\nreturn methodCache.computeIfAbsent(method, k -> new MapperMethod(mapperInterface, method, sqlSession.getConfiguration()));\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6784\u5efaMapperMethod\u5bf9\u8c61\uff1a\u5b9a\u4e49SQL\u547d\u4ee4\uff08SqlCommand\u5bf9\u8c61\uff09\u548c\u65b9\u6cd5\u7b7e\u540d\uff08MethodSignature\u5bf9\u8c61\uff09","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// v3.5.14 & v3.5.4\nthis.command = new MapperMethod.SqlCommand(config, mapperInterface, method);\nthis.method = new MapperMethod.MethodSignature(config, mapperInterface, method);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6784\u5efaSqlCommand\u5bf9\u8c61\uff1a","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// v3.5.14 & v3.5.4\n// new MapperMethod.SqlCommand(config, mapperInterface, method)\u65b9\u6cd5\u4f53\nString methodName = method.getName();\nClass<?> declaringClass = method.getDeclaringClass();\n// \u89e3\u6790\u6620\u5c04\u8bed\u53e5\uff0c\u8f6c\u6362\u6210SQL\u8bed\u53e5\u5bf9\u8c61\nMappedStatement ms = this.resolveMappedStatement(mapperInterface, methodName, declaringClass, configuration);\nif (ms == null) {\n    // ...\n} else {\n    this.name = ms.getId();\n    // SQL\u547d\u4ee4\u7c7b\u578b\uff1a\u589e\u3001\u5220\u3001\u6539\u3001\u67e5\n    this.type = ms.getSqlCommandType();\n    if (this.type == SqlCommandType.UNKNOWN) {\n        throw new BindingException("Unknown execution method for: " + this.name);\n    }\n}\n\n// this.resolveMappedStatement(mapperInterface, methodName, declaringClass, configuration)\u65b9\u6cd5\u4f53\nString statementId = mapperInterface.getName() + "." + methodName;\n// \u67e5\u770bXML\u914d\u7f6e\u6587\u4ef6\u4e2d\u662f\u5426\u5b58\u5728statementId\u7684\u8bed\u53e5\nif (configuration.hasStatement(statementId)) {\n    return configuration.getMappedStatement(statementId);\n} // ...\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6784\u5efaMethodSignature\u5bf9\u8c61\uff1a","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// v3.5.14 & v3.5.4\nType resolvedReturnType = TypeParameterResolver.resolveReturnType(method, mapperInterface);\nif (resolvedReturnType instanceof Class) {\n    this.returnType = (Class)resolvedReturnType;\n} else if (resolvedReturnType instanceof ParameterizedType) {\n    this.returnType = (Class)((ParameterizedType)resolvedReturnType).getRawType();\n} else {\n    this.returnType = method.getReturnType();\n}\nthis.returnsVoid = Void.TYPE.equals(this.returnType);\nthis.returnsMany = configuration.getObjectFactory().isCollection(this.returnType) || this.returnType.isArray();\nthis.returnsCursor = Cursor.class.equals(this.returnType);\nthis.returnsOptional = Optional.class.equals(this.returnType);\nthis.mapKey = this.getMapKey(method);\nthis.returnsMap = this.mapKey != null;\nthis.rowBoundsIndex = this.getUniqueParamIndex(method, RowBounds.class);\nthis.resultHandlerIndex = this.getUniqueParamIndex(method, ResultHandler.class);\nthis.paramNameResolver = new ParamNameResolver(configuration, method);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8c03\u7528MapperMethod\u5bf9\u8c61\u7684",(0,r.jsx)(n.code,{children:"execute()"}),"\uff1a","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// v3.5.14 & v3.5.4\nObject result;\nObject param;\nswitch(this.command.getType()) {\n    case INSERT:\n        param = this.method.convertArgsToSqlCommandParam(args);\n        result = this.rowCountResult(sqlSession.insert(this.command.getName(), param));\n        break;\n    case UPDATE:\n        param = this.method.convertArgsToSqlCommandParam(args);\n        result = this.rowCountResult(sqlSession.update(this.command.getName(), param));\n        break;\n    case DELETE:\n        param = this.method.convertArgsToSqlCommandParam(args);\n        result = this.rowCountResult(sqlSession.delete(this.command.getName(), param));\n        break;\n    case SELECT:\n        if (this.method.returnsVoid() && this.method.hasResultHandler()) {\n            this.executeWithResultHandler(sqlSession, args);\n            result = null;\n        } else if (this.method.returnsMany()) {\n            result = this.executeForMany(sqlSession, args);\n        } else if (this.method.returnsMap()) {\n            result = this.executeForMap(sqlSession, args);\n        } else if (this.method.returnsCursor()) {\n            result = this.executeForCursor(sqlSession, args);\n        } else {\n            param = this.method.convertArgsToSqlCommandParam(args);\n            // \u6267\u884c\u67e5\u8be2\n            result = sqlSession.selectOne(this.command.getName(), param);\n            if (this.method.returnsOptional() && (result == null || !this.method.getReturnType().equals(result.getClass()))) {\n                result = Optional.ofNullable(result);\n            }\n        }\n        break;\n    case FLUSH:\n        result = sqlSession.flushStatements();\n        break;\n    default:\n        throw new BindingException("Unknown execution method for: " + this.command.getName());\n}\n// ...\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"selectOne()"}),"\u8c03\u7528",(0,r.jsx)(n.code,{children:"selectList()"}),"\u53bb\u6570\u636e\u5e93\u67e5\u8be2\uff1a","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// 3.5.14\nList var6;\ntry {\n    MappedStatement ms = this.configuration.getMappedStatement(statement);\n    // \u5224\u65ad\u662f\u5426\u662f\u810f\u8bfb\uff08\u6570\u636e\u5e93\u7684\u9694\u79bb\u7ea7\u522b\uff09\n    this.dirty |= ms.isDirtySelect();\n    var6 = this.executor.query(ms, this.wrapCollection(parameter), rowBounds, handler);\n} catch (Exception var10) {\n    throw ExceptionFactory.wrapException("Error querying database.  Cause: " + var10, var10);\n} finally {\n    ErrorContext.instance().reset();\n}\nreturn var6;\n\n// 3.5.4\ntry {\n    MappedStatement ms = configuration.getMappedStatement(statement);\n    return executor.query(ms, wrapCollection(parameter), rowBounds, Executor.NO_RESULT_HANDLER);\n} catch (Exception e) {\n    throw ExceptionFactory.wrapException("Error querying database, Cause: " + e, e);\n} finally {\n    ErrorContext.instance().reset();\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8fdb\u5165",(0,r.jsx)(n.code,{children:"query()"}),"\uff1a","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// 3.5.14 & 3.5.4\n// \u5355\u4f8b\u6a21\u5f0f\uff0c\u9488\u5bf9\u6bcf\u4e2a\u7ebf\u7a0b\u5355\u5f00\u4e00\u4e2a\u8bb0\u5f55\u9519\u8bef\u7684\u5bf9\u8c61\nErrorContext.instance().resource(ms.getResource()).activity("executing a query").object(ms.getId());\nif (this.closed) {\n    throw new ExecutorException("Executor was closed.");\n} else {\n    if (this.queryStack == 0 && ms.isFlushCacheRequired()) {\n        this.clearLocalCache();\n    }\n    List list;\n    try {\n        ++this.queryStack;\n        list = resultHandler == null ? (List)this.localCache.getObject(key) : null;\n        if (list != null) {\n            this.handleLocallyCachedOutputParameters(ms, key, parameter, boundSql);\n        } else {\n            // \u4ece\u6570\u636e\u5e93\u67e5\u8be2\n            list = this.queryFromDatabase(ms, parameter, rowBounds, resultHandler, key, boundSql);\n        }\n    } finally {\n        --this.queryStack;\n    }\n    // ...\n    return list;\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"queryFromDatabase()"}),"\u8fdb\u5165\u5230",(0,r.jsx)(n.code,{children:"doQuery()"}),"\uff1a\u5c01\u88c5JDBC","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// 3.5.14 & 3.5.4\n// doQuery()\nStatement stmt = null;\nList var9;\ntry {\n    Configuration configuration = ms.getConfiguration();\n    StatementHandler handler = configuration.newStatementHandler(this.wrapper, ms, parameter, rowBounds, resultHandler, boundSql);\n    // \u9884\u7f16\u8bd1SQL\u8bed\u53e5\n    stmt = this.prepareStatement(handler, ms.getStatementLog());\n    // \u6267\u884c\u67e5\u8be2\n    var9 = handler.query(stmt, resultHandler);\n} finally {\n    this.closeStatement(stmt);\n}\nreturn var9;\n\n// this.prepareStatement()\n// \u83b7\u53d6\u4e0e\u6570\u636e\u5e93\u7684\u8fde\u63a5\nConnection connection = this.getConnection(statementLog);\n// \u9884\u7f16\u8bd1SQL\u8bed\u53e5\nStatement stmt = handler.prepare(connection, this.transaction.getTimeout());\nhandler.parameterize(stmt);\nreturn stmt;\n\n// handler.query()\nPreparedStatement ps = (PreparedStatement)statement;\n// \u6267\u884c\u9884\u7f16\u8bd1SQL\u8bed\u53e5\nps.execute();\nreturn this.resultSetHandler.handleResultSets(ps);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\u83b7\u53d6\u8fde\u63a5",(0,r.jsx)(n.code,{children:"getConnection()"}),"\u5230",(0,r.jsx)(n.code,{children:"openConnection()"}),"\uff1a\u52a8\u6001\u4ee3\u7406\u8fde\u63a5","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// 3.5.14 & 3.5.4\nreturn this.popConnection(this.dataSource.getUsername(), this.dataSource.getPassword()).getProxyConnection();\n\n// this.popConnection()\nboolean countedWait = false;\nPooledConnection conn = null;\nlong t = System.currentTimeMillis();\nint localBadConnectionCount = 0;\nwhile(conn == null) {\n    // \u52a0\u9501\uff0c\u786e\u4fdd\u591a\u7ebf\u7a0b\u7684\u60c5\u51b5\u4e0b\u8fde\u63a5\u7684\u5b89\u5168\u6027\n    this.lock.lock();\n    try {\n        PoolState var10000;\n        if (!this.state.idleConnections.isEmpty()) {\n            conn = (PooledConnection)this.state.idleConnections.remove(0);\n            if (log.isDebugEnabled()) {\n                log.debug("Checked out connection " + conn.getRealHashCode() + " from pool.");\n            }\n        } else if (this.state.activeConnections.size() < this.poolMaximumActiveConnections) {\n            // \u83b7\u53d6\u8fde\u63a5\uff0c\u5c01\u88c5\u6210\u52a8\u6001\u4ee3\u7406\u5bf9\u8c61PooledConnection\n            conn = new PooledConnection(this.dataSource.getConnection(), this);\n            if (log.isDebugEnabled()) {\n                log.debug("Created connection " + conn.getRealHashCode() + ".");\n            }\n        } // ...\n    } finally {\n        this.lock.unlock();\n    }\n    // ...\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dataSource.getConnection()"}),"\u8fdb\u5165\u5230",(0,r.jsx)(n.code,{children:"doGetConnection()"}),"\uff1a\u771f\u6b63\u83b7\u53d6\u8fde\u63a5\u7684\u65b9\u6cd5","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// 3.5.14 & 3.5.4\nProperties props = new Properties();\nif (this.driverProperties != null) {\n    props.putAll(this.driverProperties);\n}\nif (username != null) {\n    props.setProperty("user", username);\n}\nif (password != null) {\n    props.setProperty("password", password);\n}\nreturn this.doGetConnection(props);\n\n// this.doGetConnection()\n// \u521d\u59cb\u5316\u9a71\u52a8\nthis.initializeDriver();\n// \u4ece\u9a71\u52a8\u7ba1\u7406\u5668\u4e2d\u83b7\u53d6\u8fde\u63a5\nConnection connection = DriverManager.getConnection(this.url, properties);\nthis.configureConnection(connection);\nreturn connection;\n\n// this.initializeDriver()\nif (!registeredDrivers.containsKey(this.driver)) {\n    try {\n        Class driverType;\n        if (this.driverClassLoader != null) {\n            // \u83b7\u53d6\u9a71\u52a8\u7c7b\n            driverType = Class.forName(this.driver, true, this.driverClassLoader);\n        } else {\n            driverType = Resources.classForName(this.driver);\n        }\n\n        Driver driverInstance = (Driver)driverType.getDeclaredConstructor().newInstance();\n        // \u6ce8\u518c\u9a71\u52a8\n        DriverManager.registerDriver(new UnpooledDataSource.DriverProxy(driverInstance));\n        registeredDrivers.put(this.driver, driverInstance);\n    } catch (Exception var3) {\n        throw new SQLException("Error setting driver on UnpooledDataSource. Cause: " + var3);\n    }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"queryFromDatabase()"}),"\u8fdb\u5165\u5230",(0,r.jsx)(n.code,{children:"doQuery()"}),"\uff1a","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// 3.5.14 & 3.5.4\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"queryFromDatabase()"}),"\u8fdb\u5165\u5230",(0,r.jsx)(n.code,{children:"doQuery()"}),"\uff1a","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// 3.5.14 & 3.5.4\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"22!!!"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(6540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);