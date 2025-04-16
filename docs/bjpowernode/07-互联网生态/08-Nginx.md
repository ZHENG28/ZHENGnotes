---
sidebar_label: 8. Nginx
---

# Nginx

## 1 简介
### 1.1 相关概念
1. Nginx（engine x）：一个代理服务器，高性能、低消耗、并发处理能力强
2. 反向代理（Reverse Proxy）：代理对象是服务端
    ```mermaid
    graph LR
    extranet[外网服务器] --发送请求--> nginx[代理服务器] --转发--> intranet[内网服务器]
    intranet --发送响应--> nginx --转发--> extranet
    ```
3. 正向代理（Reverse Proxy）：代理对象是客户端
    ```mermaid
    graph RL
    extranet[内网服务器] --发送请求--> nginx[代理服务器] --转发--> intranet[外网服务器]
    intranet --发送响应--> nginx --转发--> extranet
    ```

### 1.2 安装与命令
1. 检查相关库是否安装（否则配置和编译会出现错误）：
    ```bash showLineNumbers
    # gcc编译器
    yum list installed | grep gcc

    # openssl库
    yum list installed | grep openssl

    # pcre库
    yum list installed | grep pcre

    # zlib库
    yum list installed | grep zlib
    ```
2. 相关命令：
    ```bash showLineNumbers
    # 启动
    /install-path/sbin/nginx
    # 使用指定配置文件启动
    /install-path/sbin/nginx -c /configuration-path -t
    # 检查配置文件的语法
    /install-path/sbin/nginx -t

    # 处理完请求后关闭
    kill -QUIT master-pid
    # 直接关闭
    kill -TEAM master-pid

    # 重启
    /install-path/sbin/nginx -s reload

    # 查看版本号
    /install-path/sbin/nginx -v
    # 查看版本号、编译器版本、配置参数等
    /install-path/sbin/nginx -V
    ```
3. 启动时会启动**一个** `master` 主进程和**多个** `worker` 子进程

### 1.3 核心配置文件`nginx.conf`
1. 基本配置：
    ```nginx showLineNumbers
    user nobody;
    worker_processes 1;

    error_log logs/error.log;
    #error_log logs/error.log notice;
    #error_log logs/error.log info;

    pid logs/nginx.pid;
    ```
    1. `user nobody`：worker子进程的运行用户，一般用于启动程序，没有密码
    2. `worker_processes number`：worker子进程的数目，一般为**CPU数量**或**CPU数量的2倍**
    3. `error_log /log-path[ log-level]`：全局错误日志，默认日志级别为 `ERROR`
        - 日志级别：`DEBUG` &lt; `INFO` &lt; `NOTICE` &lt; `WARN` &lt; `ERROR` &lt; `CRIT`
    4. `pid /pid-path`：进程 `pid` 文件，内容只有一个 `pid` 号
2. events配置：配置工作模式和连接数
    ```nginx showLineNumbers
    events {
        worker_connections 1024;
    }
    ```
    1. `worker_connections 1024`：每个worker子进程的网络请求连接数上限 &rarr; **nginx支持的总连接数** = `worker_processes` &times; `worker_connections`
3. http配置：利用反向代理功能提供**负载均衡**支持
    ```nginx showLineNumbers
    http {
        include mime.types;
        default_type application/octet-stream;

        log_format main '$remote_addr - $remote_user [$time_local] "$request"'

        access_log logs/access.log main;

        sendfile on;
        tcp_nopush on;

        keepalive_timeout 65;

        gzip on;

        #配置虚拟主机
        server {
            listen 80;
            server_name localhost;

            charset koi8-r;

            access_log logs/host.access.log main;

            location / {
                root html;
                index index.html;
            }

            error_page 404 /404.html;

            error_page 500 502 503 504 /50x.html;
            location = /50x.html {
                root html;
            }
        }
    }
    ```
    1. `include mime.types`：支持的多媒体类型
    2. `default_type application/octet-stream`：默认文件类型，为流类型（即支持任意类型）
    3. `log_format log-fomrat-name 'formatter'`：日志格式
    4. `access_log log-path log-fomrat-name`：配置访问日志的存放路径以及格式
    5. `sendfile on`：开启文件高效传输模式
    6. `tcp_nopush on`：防止网络阻塞
    7. `keepalive_timeout 65`：长连接超时时间，单位为秒 `s`
    8. `gzip on`：开启 `gzip` 压缩输出
    9. 虚拟主机相关配置：
        1. `listen 80`：监听端口
        2. `server_name name`：服务名
        3. `access_log log-path log-fomrat-name`：配置本虚拟主机的访问日志的存放路径以及格式
        4. `location / {}`：匹配访问路径中带 `/` 的请求
            1. `root root-dir-path`：根目录位置，对应 `location` 中的 `/`
            2. `index file-path`：首页文件名
        5. `location = /50x.html {}`：精准匹配请求

---

## 2 应用
### 2.1 静态网站部署
1. 访问路径和根目录的关系：访问路径的 `/` 对应根目录，如 `location /bar` 和 `root /opt/foo` &rarr; 映射到服务器的 `/opt/foo/bar/file-name`

### 2.2 负载均衡
1. 负载均衡：将请求**均匀分摊到**集群中的多个服务器节点上执行
2. 实现方式：
    1. 硬件负载均衡：性能稳定，但费用昂贵，如 `F5`、深信服、`Array` 等
    2. 软件负载均衡：免费开源且成本低廉，如 `Nginx`、`LVS`、`HAProxy` 等
        ```nginx showLineNumbers
        upstream www.example.com {
            server ip:port1;
            server ip:port2;
        }

        server {
            location /example {
                proxy_pass http://www.example.com
            }
        }
        ```
        - `upstream` 后的路径与 `proxy_pass` 后的路径一致，才能做转发
        - `upstream` 模块会检查服务器的健康状态，如果服务器故障，则请求不会转发到该台服务器
3. 策略：
    1. **轮询**（默认）：按照访问url的 `hash` 结果来转发请求 &rarr; 适用于服务器缓存的情况
        ```nginx showLineNumbers
        upstream www.example.com {
            server ip:port1;
            server ip:port2;
        }
        ```
    2. **权重**：请求按比例（`weight` 值大小）转发到不同的服务器 &rarr; 适用于服务器性能不均的情况
        ```nginx showLineNumbers
        upstream www.example.com {
            server ip:port1 weight=2;
            server ip:port2 weight=1;
        }
        ```
    3. **ip绑定**：请求按访问IP的 `hash` 值转发到不同的服务器，即每个客户端固定访问一个服务器 &rarr; 解决会话 `session` 丢失的问题
        ```nginx showLineNumbers
        upstream www.example.com {
            ip_hash;
            server ip:port1;
            server ip:port2;
        }
        ```
    4. **最少连接**：请求会被转发到连接数最少的服务器上
        ```nginx showLineNumbers
        upstream www.example.com {
            least_conn;
            server ip:port1;
            server ip:port2;
        }
        ```
4. 其他配置：
    1. 备份服务器：其他所有不是 `backup` 的服务器 `down` 时，才转发到 `backup` 服务器
        ```nginx showLineNumbers
        upstream www.example.com {
            server ip:port1;
            server ip:port2 backup;
        }
        ```
    2. 宕机服务器：标识当前服务器是 `down` 状态，不参与负载均衡
        ```nginx showLineNumbers
        upstream www.example.com {
            server ip:port1;
            server ip:port2 down;
        }
        ```

### 2.3 静态代理
1. 静态代理：将所有**静态资源**的访问由访问tomcat改为访问nginx
2. 实现方式：
    1. 配置静态资源文件的后缀：`location ~.*\.(js|css|html|jpg|…)$ { }`
    2. 配置静态资源文件的目录：`location ~.*/(css/js/imgs) { }`

### 2.4 动静分离
1. 动静分离：负载均衡和静态代理结合，即动态资源由web服务器完成，静态资源由nginx服务器完成
    ```mermaid
    graph LR
    用户 --发送请求--> nginx[Nginx\n【负载均衡】] --转发\n【动态资源】--> Tomcat
    nginx --转发\n【静态资源】--> Nginx
    ```

### 2.5 虚拟主机
1. 虚拟主机：把一台物理服务器划分成多个虚拟的服务器
    - 通过 `nginx.conf` 文件中的 `server` 节点指定的
2. 配置方法：
    1. 基于端口的虚拟主机：同一个域名/IP + 不同**端口**
        ```nginx showLineNumbers
        server {
            listen 8080;
            server_name www.foobar.com;
        }
        server {
            listen 9090;
            server_name www.foobar.com;
        }
        ```
    2. 基于域名的虚拟主机：不同**域名/IP**（使用域名访问时，需要配置本机 `hosts` 文件）
        ```nginx showLineNumbers
        server {
            listen 80;
            server_name www.foo.com;
        }
        server {
            listen 80;
            server_name www.bar.com;
        }
        ```