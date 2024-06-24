---
sidebar_label: 2. SpringBoot3
---

# SpringBoot

### 1 What is SpringBoot?

### 2 开发运行环境要求（略）

### 3 程序的几种创建方式（略）

### 4 开发java程序（略）

### 5 开发web程序（略）

### 6 main 方法分析
1. main方法的配置项：
    `spring.main.sources=path`：在Application类的run()方法中，可缺省primarySource这一形参
    `spring.main.allow-bean-definition-overriding`：是否允许方法覆盖，默认为false不允许
    `spring.main.lazy-initialization`：是否延迟初始化，默认为false不延迟
    `spring.main.log-startup-info`：是否输出日志
    `spring.main.register-shutdown-hook`：是否注册回调的钩子
    `spring.main.web-application-type`：说明该项目是哪一种程序
        - none：java程序
        - reactive：响应式程序
        - servlet：web程序
2. 流式开发操作：`Builder()`
    main方法的启动：`new SpringApplicationBuilder().sources(xxxApplication.class).bannerMode(Banner.Mode.CONSOLE).run(args);`

### 7 项目约定的代码结构（略）

### 8 项目pom.xml继承结构（略）

### 9 项目pom.xml修改默认版本（略）

### 10 整合mybatis（略）

### 11 整合jsp视图展示（略）

### 12 项目pom.xml热部署插件Jrebel、devtools（略）

### 13 开发最佳实践
1. 合理的包结构：以业务模块为分包基础、以MVC模式为分包基础
2. 主应用程序 `xxxApplication.java` 应与其他包同在一个根目录下，因为主类上有 `@SpringBootApplication` 的注解，默认扫描当前包及子类下的标有 `@Component` ， `@Service` ， `@Repository` ， `@Controller` 等注解的bean
3. `@SpringBootApplication` = `@EnableAutoConfiguration` + `@ComponentScan` + `@Configuration`
4. main方法的类也是一个配置类，但如今SpringBoot框架已经不推荐使用xml配置文件
5. 将bean对象/组件<font color="red">**加入到SpringBoot容器**</font>中：
    1. `@Import(xxx.class)`：直接导入bean对象
    2. `@Configuration`：加在bean对象上
    3. `@Configuration` + `@Bean`：`@Configuration` 加在xxxApplication类上， `@Bean` 加在bean对象上
    4. `@Configuration` + `@ComponentScan`：`@Configuration` 加在bean对象上， `@ComponentScan` 加在bean对象或xxxApplication类上
    5. `@ImportResource(locations={"url"})`：将xml文件中的bean组件加入到SpringBoot容器中
7. 禁止框架中的配置：
    - 在项目入口类上设置 `@SpringBootApplication(exclude={xxx.class, ...})`
    - 在配置文件中设置 `spring.autoconfigure.exclude=xxx` 来排除
8. SpringBoot项目可以直接打jar包运行（因为SpringBoot已内嵌Tomcat服务器，所以无需打war包）
9. `CommandLineRunner` 、 `ApplicationRunner` 接口在springboot项目启动后会回调重写的run方法

### 14 敏感配置信息加密
- 使用jasypt加解密
    1. 加入 `jasypt-spring-boot-starter` 依赖
    2. 需要在配置文件中设置密钥 `jasypt.encryptor-password=xxx`
    3. 使用 `StringEncryptor` 对象的 `encrypt(要加密的内容)` 和 `decrypt(要解密的内容)` 方法即可
- 在敏感配置信息处以 `ENC(加密后的内容)` 的格式书写即可
    - 可修改其前后缀，设置 `jasypt.encryptor.property.prefix/suffix=xxx` 属性即可

### 15 数据库连接池
- 默认采用 `HikariCP` 数据库连接池
- 可更换为其他数据库连接池，如alibaba的 `druid` 连接池
    1. 在mybatis中排除默认的HikariCP连接池
        ```xml showLineNumbers
        <exclusions>
            <exclusion>
                <groupId>com.zaxxer</groupId>
                <artifactId>HikariCP</artifactId>
            </exclusion>
        </exclusions>
        ```
    2. 加入 `druid-spring-boot-starter` 依赖

### 16 跨域资源共享CORS（Cross-Origin Resource Sharing）
- CORS允许浏览器向跨源服务器发出XMLHttpRequest请求（浏览器本身是可以发起跨域请求的，如链接一个外域的图片或脚本，但js不能获取这些外域资源内容）
- 不支持CORS的老版本浏览器：采用JSONP进行跨域GET请求
    1. 要在ajax中设置：
        - `dataType: "jsonp",`：ajax发出的请求所返回的数据类型
        - `jsonp: "callback",`：指定一个查询参数名称来覆盖默认的jsonp回调参数名callback
        - `jsonpCallback: "function_name",`：设置回调函数名
    2. 返回的后端数据要用回调函数包裹起来
- 支持CORS的浏览器：
    1. 前端：使用一个额外的HTTP响应头来赋予浏览器获取非同源资源的权限
    2. 后端：写一个配置类，实现WebMvcConfigurer
        ```java showLineNumbers
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("url");
        }
        ```

### 17 静态资源处理
- 默认静态资源目录位置在 `classpath` 下
- 以下4个目录的静态资源可以直接访问：访问地址为 `localhost:8080/+静态资源文件名`
    - `/static`
    - `/public`
    - `/resources`
    - `/META-INF/resources`

### 18 核心配置文件
1. 格式：`.properties` 或 `.yml`
2. 多环境配置文件：`spring.profiles.active=dev测试/product生产`
3. 随机值：框架提供 `RandomValuePropertySource` 注入随机值（如：整数、longs、uuid或字符串）
    - 格式：`random.value/int/...`
4. 占位符：`${}`
5. 时间单位Duration：可以使用任何受支持的单位，如ns、us、ms、s、m、H、d、w、m、y等
6. 容量单位DataSize：B、KB、MB、GB、TB等
7. 配置文件的读取方式：
    1. 通过 `@Value` 注解读取
    2. 通过映射类读取，类上加 `@ConfigurationProperties` 注解
    3. 通过Environment对象读取
        - `@Autowired Environment env;`：由Spring IOC提供的对象
        - `... env.getProperty("property_name"); ...`
    4. 通过嵌套静态内部类（static class）读取（如server.前缀的相关属性）

### 19 线程池异步调用
1. 框架自动配置线程池：用于提交异步任务（方法上加`@Async`）
    - 启动类上加 `@EnableAsync` &rarr; 开启异步执行
2. 手动配置线程池

### 20 集成Swagger
1. OAS（OpenAPI Specification）：通过定义一种用来描述API格式或API定义的语言，来规范RESTful服务开发过程
2. Swagger：遵循OpenAPI开发的工具框架，支持从设计和文档到测试部署的整个API生命周期的开发
    - 配置类上加 `@EnableSwagger2` 以开启Swagger；配置文件加 `swagger.enable=true`
    - API文档地址：http://localhost:8080/swagger-ui.html
    - 常用注解：
        - `@Api`：用在类上，说明类的作用
        - `@ApiOperation`：用在方法上，说明方法的作用
        - `@ApiImplicitParams`：用在方法上，一组参数说明
        - `@ApiImplicitParam`：用在 `@ApiImplicitParams` 注解中，指定一个请求参数的各个方面
            - `paramType`：参数位置
                - `header`：`@RequestHeader`
                - `query`：`@RequestParam`
                - `path`：`@PathVariable` （用于restful接口）
                - `body`
                - `form`
            - `name`：参数名称
            - `dataType`：参数类型
            - `required`：参数是否必须传
            - `value`：参数值
            - `defaultValue`：参数的默认值
        - `@ApiResponses`：用于表示一组响应
        - `@ApiResponse`：用在 `@ApiResponses` 注解中，用于表达一个错误的响应信息
            - `code`：数字
            - `message`：信息
            - `response`：抛出的异常类
        - `@ApiIgnore`：告知忽略这个API，在swagger生成的文档中不显示
        - `@ApiModel`：描述一个Model的信息
        - `@ApiModelProperty`：描述一个model的属性
3. springfox：从基于Spring的组件swagger-springmvc发展而来
    - springfox-swagger2：依赖OAS文档，自动生成描述API的json文件
    - springfox-swagger-ui：解析自动生成的json文件，以可视化的方式呈现

### 21 集成websocket
- WebSocket协议：由HTML5定义，基于TCP协议实现的一种网络协议，可以通过该服务器主动向客户端发送信息
- HTTP和WebSocket的对比：
    - HTTP：短连接，请求后关闭连接，下次重新请求数据时，需要再次打开连接；客户端$\to$服务器，服务器返回响应
    - WebSocket：长连接，只需要一次请求来初始化连接，然后所有的请求和响应都通过这个TCP连接进行通讯；服务器和客户端全双工通信
        - 单工：信息只能单向传送
        - 半双工：信息能双向传送但不能同时双向传送
        - 全双工：信息能够同时双向传送
    - WebSocket适用场景：客户端和服务器进行**频繁地双向通信**时，可以避免服务器频繁创建HTTP连接

### 22 注册Servlets，Filters，Listeners作为Spring Beans

### 23 使用拦截器Interceptor

### 24 框架内嵌Web服务器
1. SpringBoot默认为Tomcat服务器
2. Undertow：JBoss的默认服务器
3. Jetty：eclipse的默认服务器

### 25 打包部署
- jar包：不支持jsp；可以直接使用`java -jar filename.jar`命令运行
- war包：入口类需要扩展继承`SpringBootServletInitializer`类

### 26 配置SSL（https）
1. 配置文件：
    ```properties showLineNumbers
    # 配置端口号，原端口号8080失效
    server.port=8443
    # 配置https证书
    server.ssl.key-store=classpath:tomcat.keystore
    server.ssl.key-store-password=123456
    server.ssl.key-store-type=jks/pkcs12
    ```
2. 生成证书：
    - 自签名证书（测试）：JDK工具/Openssl工具
    - SSL证书授权中心购买（上线）

### 27 全局异常处理

### 28 404页面处理

### 29 源码分析（略）

### 30 自动配置原理（略）

### 31 框架中如何自定义starter?（略）