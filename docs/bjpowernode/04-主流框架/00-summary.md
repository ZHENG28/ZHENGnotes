---
sidebar_label: 0. 小结
---

# 主流框架

## 1 SSM源码分析
### 1.1 
1. 

---

## 2 Maven入门
### 2.1 简介
1. 作用：
    1. 自动下载jar文件及其API文档、源代码
    2. 管理jar包版本
    3. 管理jar包的直接依赖
    4. 帮助将java编译成.class文件
    5. 帮助测试代码是否正确
    6. 帮助打包文件，形成.jar/.war文件
    7. 帮助部署项目
2. 生命周期：
    1. 清理`clear`：将之前的编译内容清空，为新的编译做准备
    2. 编译`complie`：将程序源代码编译为执行代码
    3. 测试`test-complie`：执行测试部分的代码，验证功能是否正确
    4. 报告`test`：生成测试部分的执行结果文件
    5. 打包`package`：把项目中所有的.class文件、配置文件等所有资源放到.jar/.war压缩文件中
        - `.jar`：java程序
        - `.war`：web应用程序
    6. 安装`install`：将生成的.jar/.war文件安装到本地仓库中
    7. 部署`deploy`：将程序安装好并执行

### 2.2 核心概念
1. **POM（Project Object Model）**：项目对象模型，通过pom.xml文件来控制maven构建项目的过程，管理jar依赖
    - 坐标gav：唯一标识一个项目
        ```xml
        <groupId>公司域名的倒写</groupId>
        <artifactId>自定义项目名称</artifactId>
        <version>自定义版本号</version>
        ```
    - 依赖dependency：说明项目中要使用的各种资源，相当于java代码中的import
        - 依赖范围scope：`compile`（默认值）、`test`、`provided`
2. 约定的目录结构：maven项目的目录和文件的位置都是固定的

---

## 3 老杜Mybatis
1. 三层架构：
    1. 界面层 `Controller` &rarr; SpringMVC：接收请求，返回响应
    2. 业务逻辑层 `Service` &rarr; Spring：处理逻辑，调用数据库，获取数据等
    3. 数据访问层 `Dao` &rarr; MyBatis：访问数据库，对数据进行增删改查（CRUD）操作
2. 框架功能：
    1. 提供创建Connection，Statement，ResultSet的能力
    2. 提供执行sql语句的能力
    3. 提供循环sql，将sql的结果转为java对象或对象集合的能力
    4. 提供关闭资源的能力
3. mybatis默认是不自动提交事务的，因此需要**手动提交事务**
4. 动态代理机制：通过 `SqlSession.getMapper(xxxDao.class)` 这一方法，可以获取dao接口对应的实现类对象
5. 传参：
    - 入参：从java代码中将参数传入到mapper文件的sql语句中去
        - `${parameter}`：使用Statement对象执行，容易产生SQL注入
        - `#{parameter}`：使用PreparedStatement对象执行
    - 出参：
        1. resultType：执行结果转换为指定数据类型
        2. resultMap：结果映射集，映射结果列名和java对象字段的对应关系
6. 动态sql：可以根据条件（XML语言）动态拼接不同的sql语句，以实现动态查询
7. 分页查询插件`PageHelper`

---

## 4 Spring6
### 4.1 概述
1. 减轻对项目模块之间的、类与类之间的管理，帮助开发人员创建对象，管理对象之间的关系；其核心技术IOC、AOP可实现模块之间、类之间的解耦合
2. spring中的对象：单例对象，名称唯一 &rarr; 在创建spring容器时，默认调用对象的无参构造方法来创建对象
    - 自动放入到容器中：dao、service、controller、工具类
    - 手动放入到容器中：实体类对象、servlet、listener、filter
3. 事务处理模型：spring提供一种处理事务的统一模型，它抽象了事务处理的各个方面，定义了事务的处理步骤，使用AOP的环绕通知`@Around`来实现
    - 事务管理器`PlatformTransactionManager Interface`：在内部提交、回滚事务
    - 事务隔离级别：MySQL &rarr; `REPEATABLE_READ`；Oracle &rarr; `READ_COMMITTED`
        1. `READ_UNCOMMITTED`
        2. `READ_COMMITTED`
        3. `REPEATABLE_READ`
        4. `SERIALIZABLE`
    - 事务超时时间：表示一个方法最长的执行时间，如果超过，则回滚事务
    - 事务传播行为：
        1. `PROPAGATION_REQUIRED`：必须在事务中执行（如当前无事务，则新建事务）
        2. `PROPAGATION_REQUIRES_NEW`：总是在新的事务中执行（如当前有事务，则将事务挂起，仍然选择新建事务）
        3. `PROPAGATION_SUPPORTS`：支持使用当前事务（如当前无事务，可以以非事务的方式执行）
        4. `PROPAGATION_MANDATORY`
        5. `PROPAGATION_NESTED`
        6. `PROPAGATION_NEVER`
        7. `PROPAGATION_NOT_SUPPORTED`
    - 事务的结束时机：
        1. 提交事务：业务方法执行成功且无异常抛出时，**自动**提交事务
        2. 回滚事务：业务方法抛出异常时
            1. `RuntimeException`/`ERROR`：**自动**回滚事务
            2. 非运行时异常（受查异常，如IOException、SQLException）：**提交**事务

### 4.2 控制反转IoC（Inversion of Control）
1. 把对象的创建、赋值和管理工作都交给代码之外的容器实现，即对象的创建是由其他外部资源完成的 &rarr; 实现解耦合
2. **依赖注入DI（Dependency Injection）**：只需要在程序中提供对象名称即可，至于如何创建对象、赋值、查找等都由容器内部实现
    - 基于XML的DI实现：在spring的配置文件中，使用标签 `<bean>` 完成赋值
    - 基于注解的DI实现：使用spring中的注解 `@Component` ，完成赋值
3. 组件扫描器component-scan：spring会遍历扫描base-package指定的包，把包中和子包中的所有类，找到类中的注解，按照注解的功能进行创建对象或赋值等操作

### 4.3 面向切面编程AOP（Aspect oriented Programming）
1. 基于动态代理，可以使用JDK、CGLIB两种代理方式 &rarr; 规范化动态代理
    - **<font color="red">JDK动态代理</font>**：使用JDK中的Proxy、Method、InvocationHandler创建代理对象；要求目标类必须实现接口
    - **<font color="red">CGLIB动态代理</font>**：使用第三方的工具库创建代理对象；要求目标类必须继承目标类，创建子类（即代理对象）
2. **切面Aspect**：表示增强的非业务功能，常见的切面功能有日志、事务、统计信息、参数检查、权限验证等
3. **通知Adivce**：切面的执行时间，包含`@Before`、`@AfterReturning`、`@AfterThrowing`、`@After`、`@Around`
4. **连接点JoinPoint**：连接业务方法和切面的位置
5. **切入点Pointcut**：多个连接点方法的集合

### 4.4 集成第三方库
1. 集成**MyBatis**：MyBatis与spring集成时，事务会**自动提交**
    1. 声明数据源DataSource
    2. 声明工厂类SqlSessionFactoryBean
    3. 声明Dao对象
2. 集成**Web**：容器对象只需要创建一次后即可一直使用 &rarr; 将容器对象放入到全局作用域 `ServletContext` 中
    - 使用监听器：自己创建，或框架提供的 `ContextLoaderListener`

---

## 5 SpringMVC
### 5.1 概述
1. 基于Spring的、web开发的框架，使用 `@Controller` 创建控制器对象，并将其放入到SpringMVC容器中
2. 中央调度器`DispatcherServlet`：继承HttpServlet，负责接收请求，返回响应，以及调用其他控制器对象
3. 执行流程：
    ```mermaid
    graph TB
    发起请求 --> 
    HandlerMapper[DispatcherServlet接受请求，将请求转交给处理器映射器] --> 
    将HandlerExecutionChain中的处理器对象交给处理器适配器对象 --> 
    将ModelAndView交给视图解析器对象 --> 
    View[获取到View对象，调用View类的方法] --> 
    Model[将Model数据放入到request作用域，并执行视图转发] --> 
    End[请求结束，返回响应]
    ```
4. 注解式开发：
    - `@Controller`：创建能处理请求的控制器对象
    - `@RequestMapping`：请求映射，将请求地址和方法绑定在一起

### 5.2 SSM/SSI（SpringMVC + Spring + MyBatis/IBatis）
1. 框架结构：
    - SpringMVC：**视图层/界面层**，负责接收请求、返回响应
    - Spring：**业务层**，管理service、dao以及工具类对象
    - MyBatis/IBatis：**持久层**，访问数据库
2. 流程：
    ```mermaid
    graph TB
    用户发起请求 --> SpringMVC接收 --> service对象处理业务 --> MyBatis处理数据
    ```

### 5.3 核心技术
1. 请求转发：
    - 转发forward：`setViewName("forward:视图文件完整路径")`
    - 重定向redirect：`setViewName("redirect:视图文件完整路径")`
2. 异常处理：采用统一的全局异常处理，即将controller中的所有异常处理都集中到一个地方 &rarr; 将业务逻辑代码和异常处理代码解耦合
3. 拦截器：需要实现 `HandlerInterceptor` 接口

---

## 6 SSH框架【选学】（略）