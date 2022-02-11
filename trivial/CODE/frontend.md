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