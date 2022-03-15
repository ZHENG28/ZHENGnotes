### <base>标记
1. 概念：head标签，在HTML语法范畴之内，与js、java都无关
2. 作用范围：只对当前网页中的所有相对路径起作用，绝对路径不起作用
3. 格式：`request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/"`
    1. ServletRequest的方法：
        - `String getScheme()`：返回架构的名字，如http、https、ftp等
        - `String getServerName()`：返回服务器的主机名
        - `int getServerPort()`：返回端口号
    2. 如：http://localhost:8080/webappname/
    （相对路径的资源加上base中的路径地址后，即为http://localhost:8080/webappname/path）

### `document.all.idName.xxx`
- `document.all`：获取整个网页中的dom元素，返回一个集合，该集合中存放了当前网页中的所有dom元素
- `document.all.idName`：获取id="idName"的元素，等同于`document.getElementById("idName")`

### ES6中，可以使用反引号``来完成字符串的拼接
其中可用`${}`来引用变量

### cookie、session、token的区别
- Notes：
    1. session和token之间差一个签名signal，session容易被伪造，而token中因为使用了本系统特定的signal，导致token在解析后更易被证明真伪。
    2. token中的信息是明文保存的，因此不应该在token中保存类似密码的敏感信息。
    3. session id需要被保存在服务器端，这样大大增加了服务器的压力；而token只需要服务器端生成与认证即可。
- 定义三者：
    - Cookie：浏览器里能永久存储的一种数据。由服务器生成，发送给浏览器，浏览器将其以k-v的形式保存；下一次请求时，浏览器会自动将这些cookie发送给服务器。
    - Session：会话，服务器需要知道当前发送的请求是属于谁的，即服务器要给每个客户端分配不同的身份标识，在浏览器中默认存在cookie中。（若web服务器做了负载均衡，则下一个操作请求到了另一台服务器时session会丢失）
    - Token：多用户下处理认证的最佳方式，具有无状态可扩展、支持移动设备、跨程序调用、安全等特性。（需要设置服务器属性Access-Control-Allow-Origin: *，以便于让服务器能够接收到来自所有域的请求）
- 基于服务器的验证方式的弊端：
    - Session：每次用户发起请求时，服务器都需要创建一个session来存储信息->增大内存的开销
    - 可扩展性：服务器的负载均衡
    - CORS：跨域请求资源的失败
    - CSRF：用户容易受到跨站请求伪造的攻击