---
sidebar_label: 3. IntelliJ IDEA
---

# IDEA

1. VM配置文件
    ```
    # 占用最大内存，调大最大内存可以减少内存回收的频率
    -Xmx750m
    # 占用最小内存，调大最小内存可以提高Java程序的启动速度
    -Xms128m
    # 代码占用的缓存大小
    -XX:ReservedCodeCacheSize=512m
    # 设置文件编码格式
    -Dfile.encoding=UTF-8
    # 设置控制台编码格式
    -Dconsole.encoding=UTF-8
    ```
2. 文件结构
    - .iml文件是Module在该项目中的唯一标识
    - 项目结构Project Structure：
        - Project：本项目的基本信息
        - Modules：
            - Sources：可对该Module中的开发目录进行分类，通过"Mark as"以便于IDEA明白应该如何对待它们
                - Sources：存放源代码的文件夹
                - Tests：存放测试代码的文件夹，一般放置@Test注解的测试代码
                - Resource：存放静态资源文件的文件夹（html/css/图片/音频/…），一般放置配置文件，不会编译 &rarr; Sources
                - Test Resource：存放测试代码的文件夹，不会编译 &rarr; Tests
                - Excluded：被排除编译的文件夹，例如out文件夹
            - Paths：设置Module的输出路径等
            - Dependencies：依赖的jar包及其依赖所涉及到的范围
                - export选项：如果选中，则在另一个Module中引用该Module时，被选中的jar包也会出现在另一个Module的Dependencies中
        - Libraries：存放各种jar包
        - Facets：确认相关资源的存放位置以及web项目的root路径
        - Artifacts：放置的是本项目中的合法Module；将web项目打包成war包，然后在tomcat发布的目录下发布
    - IDEA有时会对复制粘贴进来的资源无法定位，导致项目启动时存在404的错误。可以手动新建一个文件，然后将代码复制进去，这样不容易出现404的错误。
3. 插件工具
    1. HTTP Client：类似postman，访问接口的工具
    2. Debug模式：
        1. step over：进入下一行，不进入方法
        2. step into：进入下一行，会进入自定义方法（不会进入第三方库以及JDK的方法）
        3. force step into：进入下一行，会强制进入所有方法
        4. step out：跳出方法体
        5. mute breakpoints：使所有断点失效
        6. view breakpoints：查看所有断点
        7. resume program：直接到下一个断点处
        8. evaluate expression：通过表达式查看值