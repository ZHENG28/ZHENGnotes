---
sidebar_label: 6. SpringSession
---

# SpringSession

## 1 会话
### 1.1 概述
1. 会话 `Session`：记录用户状态，从而使服务端能识别用户
2. `Cookie`：用来存储相关客户端信息（如 `sessionId`），HTTP请求时会发送对应的 `Cookie` 信息到服务端
3. 客户端禁用 `Cookie` 时，可以采用**URL重写**来进行会话追踪，即在URL后附上 `sessionId=xxx` 参数
4. `Session` 存放机制：
    1. 首次请求：
        ```mermaid
        graph LR
        subgraph browser
            direction TB
            浏览器 --- Cookie容器 --- cookie_content[空]
        end
        subgraph jvm
            direction TB
            JVM --- Session容器 --- session_content[空]
        end
        browser --请求携带Cookie数据--> server[Tomcat服务器] --查询是否存在对应的sessionId\n若没有，则创建一个新的session和sessionId--- jvm
        server --返回新sessionId（123）并存入--> browser
        ```
    2. 正常请求（session有效）：
        ```mermaid
        graph RL
        subgraph browser
            direction TB
            浏览器 --- Cookie容器 --- 'sessionId'-123
        end
        subgraph jvm
            direction TB
            JVM --- Session容器 --- 123-sessionId对应的内存地址
        end
        browser --sessionId=123--> server[Tomcat服务器] --查找对应的sessionId--> jvm --返回Session中的信息--> server
        server --响应--> browser
        ```
    3. 正常请求（session失效）：服务器重新生成sessionId后，`Session容器` 和 `Cookie容器` 中都需要更新
        ```mermaid
        graph RL
        subgraph browser
            direction TB
            浏览器 --- Cookie容器 --- 'sessionId'-123
        end
        subgraph jvm
            direction TB
            JVM --- Session容器 --- 123-sessionId对应的内存地址
        end
        browser --sessionId=123--> server[Tomcat服务器] --查找对应的sessionId--> jvm --session失效--> server
        server --重新生成新sessionId（234）--> browser
        ```

### 1.2 集群模式存在的问题及解决方案
1. 问题：集群模式下，tomcat服务器之间无法共享session
2. 解决方案：
    ```mermaid
    graph LR
    subgraph browser
        direction TB
        浏览器 --- Cookie容器 --- 'sessionId'-123
    end
    subgraph 共享容器
        direction TB
        Session容器 --- 123-sessionId对应的内存地址
    end
    browser --请求--> nginx[Nginx] --负载均衡--> server1[Tomcat服务器1] --查找对应的sessionId--- 共享容器
    nginx[Nginx] --负载均衡--> server2[Tomcat服务器2] --查找对应的sessionId--- 共享容器
    ```
    1. 容器扩展插件：复制session到其他服务器，但存在延迟，如 `tomcat-redis-session-manager`、`memcached-session-manager`
        - 无需改动代码，但过于依赖tomcat容器
    2. nginx的 `ip_hash` 策略：用户每次访问都绑定到同一台服务器上
        - ip不能变 &rarr; 失效
        - 服务器发生故障 &rarr; 失效
    3. 自行开发session管理的工具类：需要改动代码
    4. `Spring Session`：既不依赖tomcat容器，又无需改动代码

---

## 2 应用
### 2.1 同域名下相同项目（即集群环境）
1. `Spring Session`：会将servlet容器中实现的 `javax.servlet.http.HttpSession` 替换成 `spring-session`，将session信息存储在redis中
2. 实现步骤：
    1. 添加依赖：
        ```xml showLineNumbers
        <dependency>
            <groupId>org.springframework.session</groupId>
            <artifactId>spring-session-data-redis</artifactId>
        </dependency>
        ```
    2. 添加过滤器 `org.springframework.web.filter.DelegatingFilterProxy`
    3. 添加bean对象 `org.springframework.session.data.redis.config.annotation.web.http.RedisHttpSessionConfiguration`

### 2.2 同域名下不同项目
1. `Cookie` 不允许跨路径访问 &rarr; session失效
2. 实现步骤：
    1. `RedisHttpSessionConfiguration` 对象中添加 `Cookie` 序列化规则接口对象
    2. 实现一个 `Cookie` 序列化规则对象 `org.springframework.session.web.http.DefaultCookieSerializer`：
        - `cookiePath` 指定 `sessionId` 存放在**同一根路径**下

### 2.3 同根域名不同二级子域名下的项目
1. `Cookie` 不允许跨域名访问 &rarr; session失效
2. 实现步骤：
    1. `RedisHttpSessionConfiguration` 对象中添加 `Cookie` 序列化规则接口对象
    2. 实现一个 `Cookie` 序列化规则对象 `org.springframework.session.web.http.DefaultCookieSerializer`：
        - `domainName` 指定 `sessionId` 存放在**同一根域名**下

### 2.4 不同根域名下的项目（即单点登录）
1. `Spring Session` 不支持
2. **<font color="red">单点登录SSO（Single Sign On）</font>**：用户只需登录**一次**即可访问**所有**相互信任的应用系统

### 2.5 集成SpringBoot
1. 添加依赖：
    ```xml showLineNumbers
    <dependency>
        <groupId>org.springframework.session</groupId>
        <artifactId>spring-session-data-redis</artifactId>
    </dependency>
    ```
2. 配置文件：
    ```properties showLineNumbers
    # 设置Session的生命周期
    server.servlet.session.timeout=30m

    # 指定Cookie的存放路径，用于实现同域名下不同项目的Session共享
    server.servlet.session.cookie.path=/

    # 指定Cookie的存放域名，用于实现同根域名不同二级子域名下的项目的Session共享
    server.servlet.session.cookie.domain=example.com
    ```