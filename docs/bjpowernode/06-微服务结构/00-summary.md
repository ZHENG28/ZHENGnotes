---
sidebar_label: 0. 小结
---

# 微服务结构

## 1 SpringBoot2
### 1.1 入门介绍
1. 目录结构：
    - `.mvn`：使用脚本操作maven相关命令
    - `src`：源代码
        - `main`：业务代码
            - `java`：代码
                - 其他业务代码
                - `Application`：项目入口
            - `resources`：资源
                - `static`：前端静态资源
                - `templates`：前端页面模板文件
                - `application.properties`：核心配置文件
        - `test`：测试代码
            - `java`
            - `resources`
    - `.gitignore`：上传git仓库时需要忽略的文件/文件夹
    - `.iml`：项目标识
    - `HELP.md`：帮助文档
    - `mvnw`：命令行
    - `mvnw.cmd`：命令行代码
    - `pom.xml`：maven配置文件
2. SpringBoot项目默认推荐使用的前端引擎是**thymeleaf**
3. 拦截器：
    1. 定义一个拦截器，并实现 `HandlerInterceptor` 接口
    2. 创建一个**配置类**（或在配置文件中使用 `<mvc:interceptors>` 标签）
4. **servlet**：
    1. servlet类上加 `@WebServlet(urlPatterns="path")`
    2. Application启动类上加 `@ServletComponentScan(basePackages="servlet.packagename")`
5. **filter**：
    1. filter类上加 `@WebFilter(urlPatterns="path")`
6. 设置字符编码方式：
    1. 使用 `CharacterEncodingFilter` 过滤器
    2. 核心配置文件：`server.servlet.encoding.charset=UTF-8`
7. 打包部署：
    1. `jar`：
        1. `pom.xml` 中修改打包方式 `<packaging>jar</packaging>`
        2. 使用内嵌的tomcat运行，`java -jar file.jar`进入，可通过 `ip:port/path` 访问
    2. `war`：
        1. `pom.xml` 中修改打包方式 `<packaging>war</packaging>`
        2. 必须部署在tomcat服务器的webapps目录下，可通过 `ip:port/war_packagename/path` 访问

### 1.2 集成
1. 集成**MyBatis**：
    1. Mapper接口类上加`@Mapper`：会关联 `.xml` 映射文件和接口的关系
    2. Application启动类上加 `@MapperScan(basePackages="mapper.packagename")`：扫描包下有 `@Mapper` 注解的类
    3. 访问数据库的方法上加`@Transactional`：开启事务
    4. Application启动类上加`@EnableTransactionManagement`：支持事务（SpringBoot2.x以后的版本已自动支持）
2. 集成**SpringMVC**：
    1. 控制层类上加`@RestController`：相当于控制层类上和方法上加 `@Controller`
    2. 控制层类上加`@ResponseBody`：当前控制层类下所有方法的返回值均为JSON对象
    3. REST（Representational State Transfer）Ful架构：一种互联网软件架构设计的风格
3. 集成**Redis**：可使用 `RedisTemplate` 对象来操作Redis中的数据
4. 集成**logback日志**：
    1. 消息级别：`TRACE` &lt; `DEBUG` &lt; `INFO` &lt; `WARN` &lt; `ERROR` &lt; `FATAL`
5. 集成**Thymeleaf模板**：
    1. 添加 `spring-boot-starter-thymeleaf` 依赖
    2. .html文件中必须包含 `<html xmlns:th="http://www.thymeleaf.org">`，用于识别thymeleaf标签
        1. `xmlns`：命名空间
        2. `th`：使用thymeleaf表达式的缩写
        3. `http://www.thymeleaf.org`：一个约束使用thymeleaf表达式的规则文件

### 1.3 JDK动态代理
1. 代理模式：为其他对象提供**静态/动态代理**以控制对这个对象的访问
    - 静态代理：手工实现，且所要代理的目标类已确定 &rarr; 当接口中的功能增加或修改时，会影响大量的厂家类与代理类
    - 动态代理：使用JDK的**反射机制**创建代理类对象 &rarr; 在不改变原来目标方法功能的前提下，在代理中增强自己的功能代码
        1. **JDK动态代理**：使用 `java.lang.reflect` 包来实现
        2. **cglib动态代理**：通过继承目标类，创建它的子类，并在子类中重写父类中同名的方法，以实现功能的修改
2. 实现步骤：
    ```java showLineNumbers
    // 1. 创建目标对象
    目标类接口target = new 目标类();
    // 2. 创建InvocationHandler对象
    InvocationHandler handler = new 动态代理类(target);
    // 3. 使用Proxy创建代理对象
    目标类接口proxy = (目标类接口) Proxy.newProxyInstance(target.getClass().getClassLoader(), target.getClass().getInterfaces(), handler);
    // 4. 通过代理，执行方法
    Object res = proxy.方法(参数);
    ```

---

## [2 SpringBoot3](./02-SpringBoot3.md)
1. `main` 方法分析：配置项、流式开发 `Builder()`
2. 将bean对象/组件加入到SpringBoot容器中：多种注解方式，如 `@Configuration`
3. 敏感配置信息加密：使用jasypt加解密
4. 默认采用 `HikariCP` 数据库连接池
5. **跨域资源共享CORS（Cross-Origin Resource Sharing）**：允许浏览器向跨源服务器发出XMLHttpRequest请求
6. 默认静态资源目录位置在 `classpath` 下
7. 核心配置文件：`.properties` 或 `.yml` 格式，可通过多种方式读取值，如 `@Value`
8. `@Async`：用于提交异步任务（框架自动配置线程池）
9. OAS（OpenAPI Specification）：通过定义一种用来描述API格式或API定义的语言，来规范RESTful服务开发过程
10. Swagger：遵循OpenAPI开发的工具框架，支持从设计和文档到测试部署的整个API生命周期的开发
    - 配置类上加 `@EnableSwagger2` 以开启Swagger；配置文件加 `swagger.enable=true`
    - API文档地址：http://localhost:8080/swagger-ui.html
11. WebSocket协议：由HTML5定义，基于TCP协议实现的一种网络协议，可以通过该服务器主动向客户端发送信息
    1. 特点：长连接（TCP） = 初始化连接 + 通讯的请求与响应；服务器和客户端全双工通信
    2. 适用场景：客户端和服务器进行频繁地双向通信时，可以避免服务器频繁创建HTTP连接

---

## 3 《动力恒合仓库》（略）

---

## 4 大型前后端分离项目《盈利宝》（略）

---

## [5 Redis7](./05-Redis7.md)
### 5.1 基础知识
1. 远程字典服务器Redis（Remote Dictionary Server），是一个基于内存运行并支持持久化的、高性能的**NoSQL数据库**
2. 启动命令：
    - 服务端：`redis-server`
    - 客户端启动：`redis-cli`
3. 查看数据库中的key：`keys pattern`
4. 5种数据结构：
    1. 字符串类型string：`单key:单value`
    2. 列表类型list：`单key:多有序value`
    3. 集合类型set：`单key:多无序value`
    4. 哈希类型hash：`单key:对象(属性:值)`
    5. 有序集合类型zset（sorted set）：`单key:多有序value`

### 5.2 进阶知识
1. 使用配置文件：`redis-server redis.conf &`
2. 持久化策略：RDB（Redis DataBase）策略、AOF（Append Only File）策略
3. 事务：一组redis命令一起执行
    - `multi`：用来标记一个redis事务的开始
    - `exec`：用来执行事务队列中的所有命令
    - `discard`：清除事务队列中的所有命令，并结束整个事务
4. 消息的发布与订阅：客户端订阅频道 `subscribe channel`，消息的发布者往频道上发布消息 `publish channel message`，所有订阅此频道的客户端都能接受到消息
5. 主从复制：主写从读，读写分离；一台主机配置多台从机，一台从机又可以配置多台从机
6. 哨兵模式：主机宕机的情况下，从机自动上位
7. Jedis：允许在java中操作Redis

---

## 6 SpringSecurity
### 6.1 简介
1. 主要功能：认证authentication、授权authorization
    1. 基于角色Role的身份认证：`@PreAuthorize("hasAnyRole("role1", "role2", …)")`
    2. 基于JDBC的用户认证：重写 `UserDetails loadUserByUsername(String username)` 方法
2. 基于角色的访问控制RBAC（Role-Based Access Control）：用户有对应的角色，而角色拥有权限的集合

### 6.2 JWT（Json Web Token）
1. 数据格式：`Header.Payload.Signature`
    1. `Header`：头部
    2. `Payload`：载荷，即有效数据
    3. `Signature`：签名，作为认证信息
2. 交互流程：
    ```mermaid
    graph LR
    客户端 --请求authorization--> 服务器
    服务器 --返回token--> 客户端
    ```
    客户端持 `token` 来访问受认证保护的资源
3. 无状态登录：
    ```mermaid
    sequenceDiagram
    客户端 ->> 服务端: 1. 发送username和password
    服务端 ->> 服务端: 2. 进行认证
    服务端 ->> 服务端: 3. 将用户信息加密并编码成token
    服务端 -->> 客户端: 4. 返回token
    客户端 ->> 服务端: 5. 携带token请求
    服务端 ->> 服务端: 6. 对token解密，判断其中信息
    服务端 -->> 客户端: 7. 返回响应
    ```
    - 有状态：服务端记录每次会话的客户端信息，并根据用户身份处理请求
    - 无状态：服务端不保存任何客户端的请求者信息 &rarr; 客户端每次请求都必须携带自身信息

---

## 7 RabbitMQ（略）

---

## [8 MyBatisPlus](./08-MyBatisPlus.md)
### 8.1 简介
1. 增强MyBatis的功能，但不做改变
2. 可通过注解指定表名`@TableName`、列名`@TableField`、主键`@TableId`等
3. **ActiveRecord**：表映射到记录，记录映射到对象，字段映射到对象属性（较适用于动态语言）
4. 自定义sql，指定映射文件地址：`mybatis-plus.mapper-locations=classpath:xml/*Mapper.xml`
5. 查询：使用构造器`Wrapper`
6. 分页：配置分页插件`PaginationInterceptor`

---

## 9 SpringCloudAlibaba

---

## [10 RocketMQ](./10-RocketMQ.md)
### 10.1 简介
1. 消息队列MQ（Message Queue）：面向消息的中间件
2. 组成结构：
    - Producer：消息的发送者、生产者 &rarr; ProducerGroup：生产者组
    - Consumer：消息的接收者、消费者 &rarr; ConsumerGroup：消费者组（多个消费者组可同时消费同一个topic的消息）
    - NameServer：注册路由中心，管理Broker
    - Broker：暂存和传输消息的通道，含多个Topic
    - Topic：（虚拟结构）主题，分类消息，含多个Queue
    - Queue：（真实结构）队列，存放消息，含多个Message
3. Linux系统中的命令：
    ```bash showLineNumbers
    nohup sh mqnamesrv > log-path &
    nohup sh mqbroker > log-path &
    ```

### 10.2 应用
1. 消息分发规则：
    1. 消费者组间：每组分发一份消息
    2. 消费者组内：支持广播模式和负载均衡模式
        1. **负载均衡模式**：多个消费者**交替消费**同一个 `topic` 里的消息
        2. **广播模式**：每个消费者**都消费一次** `topic` 里的消息
2. 生产者的消息发送方式：
    1. **同步**：适用于发送重要消息
    2. **异步**：适用于生产者端无法长时间等待broker响应的情况
    3. **单向**：适用于不关心发送结果的情况
    4. **延迟**：消息发送至mq后，间隔固定时间才会被监听消费
    5. **批量**：一次性发送一组消息 &rarr; 该组消息会被当作一个消息被消费
    6. **顺序**：按照消息的发送顺序来消费（FIFO），控制发送的顺序消息依次发送到同一个队列中，消费时也只能从这个队列中依次拉取，即保证了消息的顺序
    7. **事务（不提倡）**：可确保本地执行事务和发送消息作为原子单位执行
3. **幂等性**：多次操作产生的影响均和第一次操作产生的影响相同
4. 死信消息：消费重试的次数超过最大次数后，消息进入死信队列（Dead-Letter Queue），成为死信消息（Dead-Letter Message）
5. **<font color="red">消息堆积问题</font>**：单条队列的消息差值 `diffTotal` &ge; 10万的情况
6. **<font color="red">消息丢失问题</font>**

---

## 11 Docker

---

## 12 Kubernetes_k8s

---

## 13 微服务项目《动力商城》（略）

---

## 14 ActiveMQ（选学）（略）

---

## [15 高并发解决方案（选学）](./高并发解决方案（选学）)
### 15.1 概述
- 高并发：大量并发访问，即某个时间点有大量请求同时来访问系统
- 衡量指标：响应时间、吞吐量、QPS、并发用户数

### 15.2 解决方案
1. 硬件：单体应用垂直扩容方案
2. 缓存：HTTP（浏览器、Nginx、CDN）、应用（内存、磁盘）、多级缓存
3. 集群：单体应用水平扩容方案
4. 拆分：应用（分布式、微服务）、数据库（垂直/分库、水平/分表）
5. 静态化
6. 动静分离
7. 队列：异步处理、流量削峰、系统解耦
8. 池化：对象池、数据库连接池、Redis连接池、HttpClient连接池、线程池
9. JVM优化、Tomcat优化
10. Java程序优化
11. 数据库：服务器、架构、索引、SQL、数据搜索引擎
12. Nginx优化
13. Linux优化
14. 网络优化
15. 前端优化：js、css、html
16. 压力测试

---

## 16 Thymeleaf（选学）
### 16.1 简介
1. 用户看到的结果页面是模板引擎用**数据**替换**模板中的特殊符号**而得到的
    - 表达式：
        1. 变量表达式`${}`
        2. 选择表达式`*{}`
        3. 链接表达式`@{}`
        4. 消息表达式`#{}`
        5. 标准表达式
    - 属性：`th:property-name`
2. 工具类对象：`#execInfo`、`#uris`、`#dates`、`#numbers`、`#strings` 等
    - 使用：`${#strings.toUpperCase(str)}`
3. 内部对象：
    1. `#request`：`javax.servlet.http.HttpServletRequest`
    2. `#session`：`javax.servlet.http.HttpSession`
    3. `#servletContext`：`javax.servlet.ServletContext`

---

## 17 Java日志框架（选学）
### 17.1 简介
1. 日志文件：用于记录系统操作事件的文件集合；可处理历史数据、诊断问题的追踪以及理解系统的活动等重要作用
2. 日志框架的作用：
    - 控制日志输出的内容和格式
    - 控制日志输出的位置
    - 日志文件相关的优化，如异步操作、归档、压缩等
    - 日志系统的维护
3. 日志门面和日志框架：每一种日志框架都有自己对应的API（高耦合），使用日志门面技术后，无论底层的日志框架如何改变，都不会影响到程序的代码，提高日志框架的兼容性
    - 日志框架技术：用来方便有效地记录日志信息
    - 日志门面技术：抽取日志框架中共有的特征行为，形成接口；使用时可直接调用该接口方法，而日志框架在执行时仍然调用自身的方法
4. SpringBoot日志实现：默认使用 `SLF4j` 作为日志门面，`Logback` 作为日志实现
    - 输出级别：默认为 `INFO` 级别
    - 若要使用其他日志框架或日志门面，需要在 `spring-boot-starter-web` 中排除 `spring-boot-starter-logging` 部分

### 17.2 框架分类
1. **<font color="red">JUL（Java Util Logging）</font>**：java原生日志框架
    - 结构：![JUL Structure](./img/0.1.jul_structure.jpg)
        - 记录器`Logger`：访问日志系统的入口程序，可通过调用 `Logger对象` 的API来发布日志
        - 处理器`Handler`：一个 `Logger` 关联一个/一组 `Handler`，由 `Handler` 负责记录日志，并具体实现日志的输出位置
        - 过滤器`Filter`：自定义哪些信息需要被记录，哪些信息要忽略
        - 格式化组件`Formatter`：负责对日志中的数据和信息进行转换和格式化，即决定输出日志最终的形式
        - 输出级别`Level`：每条日志消息都有自己的级别，Logger会根据输出级别自动输出级别之上的日志
            - `ALL` &lt; `FINEST` &lt; `FINER` &lt; `FINE` &lt; `CONFIG` &lt; `INFO` &lt; `WARNING` &lt; `SEVERE` &lt; `OFF`
    - 父子关系：通过树状结构储存；对**父**做的设置，同样能作用于**子**
2. **<font color="red">Logback</font>**：开源日志框架
    - 依赖：
        - `logback-core`：基础核心模块
        - `logback-classic`：（包含 `logback-core`） `Log4j` 的改良版，完整实现了 `SLF4j` 的API &rarr; 方便更换成其他日志框架
        - `logback-access`：与Servlet容器集成，可通过http来访问日志的功能
    - 组件：
        - 日志记录器`Logger`：存放日志对象，可定义日志类型、级别
            - 日志级别：`TRACE` &lt; `DEBUG` &lt; `INFO` &lt; `WARN` &lt; `ERROR`
        - `Appender`：指定日志的输出位置（如控制台、文件、数据库等）
        - `Layout`：格式化日志的输出，将事件转换成字符串；被封装在 `encoder` 中
    - 过滤器：对日志进行更细粒度的打印
    - 异步日志：为日志操作单独分配一个线程 &rarr; 解决记录日志时会阻塞系统本身功能的执行的问题
    - 配置自定义的logger：
        ```xml showLineNumbers
        <!-- additivity="false"：不继承rootLogger -->
        <logger name="priv.zj" level="info" additivity="false">
            <appender-ref ref="consoleAppender"/>
        </logger>
        ```
3. **<font color="red">Log4j（Log for java）</font>**：Apache的开源项目
    - 日志记录器`Loggers`：控制日志是否输出以及输出级别
        - Logger的命名有继承机制，且所有的logger都直接或间接继承**根logger**
        - 日志级别：`ALL` &lt; `TRACE` &lt; `DEBUG` &lt; `INFO` &lt; `WARN` &lt; `ERROR` &lt; `FATAL` &lt; `OFF`
    - 输出控制器`Appenders`：指定日志的输出位置
        - `ConsoleAppender`：将日志输出到控制台
        - `FileAppender`：将日志输出到文件中
        - `DailyRollingFileAppender`：将日志输出到一个日志文件中，且支持按照**天数**输出文件
        - `RollingFileAppender`：将日志信息输出到一个日志文件中，且支持按照**文件大小**输出文件
        - `JDBCAppender`：以流的形式，把日志信息保存到数据库中
    - 日志格式化器`Layout`：控制日志的输出格式
        - `SimpleLayout`：简单的格式化
        - `HTMLLayout`：格式化为HTML表格形式
        - `PatternLayout`：最强大的格式化组件，支持自定义格式
4. **<font color="red">Log4j2</font>**：是对 `Log4j` 的改进，以及融合了 `Logback`
    - 特征：
        - 性能提升：`Log4j2` 包含基于 `LMAX Disruptor` 库的下一代异步记录器
        - 自动重新加载配置
        - 高级过滤：支持基于Log事件中的上下文数据、标记、正则表达式和其他组件进行过滤
        - 插件架构：`Log4j2` 使用插件模式配置组件，即无需编写代码来创建和配置Appender、Layout、PatternConverter等
        - 无垃圾机制：稳态日志记录期间，在独立应用程序中是无垃圾，在Web应用程序中是低垃圾
    - 异步日志：
        - `AsyncAppender`：通过引用别的Appender来实现，即 `<AppenderRef ref="consoleAppender"/>`
            - 在多线程的环境下，阻塞队列容易受到锁征用的影响 &rarr; 应该考虑使用无锁的异步记录器，即 `AsyncLogger`
        - `AsyncLogger`：使得调用 `Logger.log` 返回更快
            - 全局异步：所有日志都异步的记录
            - 混合异步：在应用中混合使用同步日志和异步日志
    - 日志级别：`ALL` &lt; `TRACE` &lt; `DEBUG` &lt; `INFO` &lt; `WARN` &lt; `ERROR` &lt; `FATAL` &lt; `OFF`

### 17.3 门面分类
1. **<font color="red">JCL（Jakarta Commons Logging）</font>**：java原生日志门面
    - 本身不具有记录日志的功能，但会提供通用的接口
    - 优先使用导入的第三方日志框架（如 `Log4j`、`Logback` 等）；若没有导入，则默认使用 `JUL`
    - 结构：![JCL Structure](./img/0.2.jcl_structure.jpg)
        - `Jdk13LumberjackLogger`：旧版JUL
        - `Jdk14Logger`：目前使用的JUL
        - `Log4JLogger`：集成使用的Log4j
        - `SimpleLog`：JCL自带的实现类
2. **<font color="red">SLF4j（Simple Logging Facade For Java）</font>**：绑定、桥接日志框架
    ![SLF4j Bound](./img/0.3.slf4j_bound.jpg)
    - 桥接技术：某些日志框架依赖 `SLF4j` 之外的日志API &rarr; `SLF4j` 附带桥接模块
        - 重定向之前的日志框架的API调用，通过桥接转换到slf4j的实现
        - 桥接器解决的是项目中的日志重构问题
    - 默认使用的是 `slf4j-simple` 框架