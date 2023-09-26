[toc]

---

# JVM（Java Virtual Machine）

## 1 JVM概述
### 1.1 JVM简介
- 虚拟机：虚拟的计算机，用来执行一系列虚拟的计算机指令
    - 系统虚拟机：对物理计算机的仿真，提供可运行完整操作系统的软件平台（如VMware）
    - 程序虚拟机：（如Java虚拟机）
- JVM：Java语言生成编译代码的运行平台，有自己的指令集和各种运行时内存区域；但只与特定的二进制文件格式class文件格式有关联
### 1.2 JVM规范
- 语言规范（The Java Language Specification）
- 虚拟机规范（The Java Virtual Machine Specification）
### 1.3 JVM整体结构
![JVM structure](./img/11.png)
- 类加载子系统Class Loader SubSystem：在运行时，首次引用类的时候加载、链接、并初始化类文件
    - 加载Loading：类通过该组件进行加载
        1. Boot Strap Class Loader：负责加载来自于Bootstrap类路径的类，即rt.jar（最高优先级）
        2. Extension Class Loader：负责加载在ext文件夹（jre lib）内的类
        3. Application Class Loader：负责加载应用程序级类路径
    - 链接Linking：
        1. 验证Verify：验证生成的字节码是否正确
        2. 准备Prepare：对于所有的静态变量，分配内存地址和配置默认值
        3. 解决Resolve：所有的符号存储器的引用都替换为来自Method Area的原始引用
    - 初始化Initialization：所有的静态变量都赋予原始值，并执行静态块
- 运行时数据区Runtime Data Areas：
    - 方法区Method Area：所有的类级别数据将存储在这里，包括静态变量
        - 每个JVM只有一个方法区，并且是一个共享资源 -> 非线程安全
    - 堆区Heap Area：所有对象及其对应的实例变量和数组将存储在这里
        - 每个JVM只有一个堆区，并且是一个共享资源 -> 非线程安全
    - 栈区Stack Area：对每个线程，都创建一个单独的运行时栈；对每个调用的方法，都在栈中产生一个堆栈帧 -> 线程安全
        - 堆栈帧：
            - 局部变量数组：与方法相关，在此存储相应的值
            - 操作数堆栈：执行中间操作时，充当运行时工作空间
            - 帧数据：对应于方法的所有符号存储在此处；在任何异常的情况下，捕获的区块信息将被保持在帧数据中
    - PC寄存器PC Registers：用于保存当前执行指令的地址，一旦指令执行，PC寄存器将更新到下一条指令
        - 每个线程都有单独的PC寄存器
    - 本地方法栈Native Method Stack：保存本地方法信息
        - 对于每个线程，将创建一个单独的本地方法堆栈
- 执行引擎Execution Engine：读取字节码并逐个执行
    - 解释器Interpreter：解释字节码较快，但执行慢；当一个方法被多次调用时，每次都需要重新解析
    - JIT编译器JIT Compiler：消除了解释器的缺点，即执行引擎在转换字节码时使用解释器的帮助，但当它发现重复的代码时，它使用JIT编译器，编译器会编译整个字节码并将其更改为本地代码（可直接用于重复的方法调用）
        - 中间代码生成器Intermediate Code Generator：生成中间代码
        - 代码优化器Code Optimizer：负责优化上面生成的中间代码
        - 目标代码生成器Target Code Generator：负责生成机器代码或本地代码
        - 分析器Profiler：一个特殊组件，负责查找热点，即该方法是否被多次调用
    - 垃圾收集器Garbage Collection：收集和删除未引用的对象
- 本地方法接口Native Method Interface：与本地方法库进行交互，并提供执行引擎所需的本地库
- 本地方法库Native Method Library：执行引擎所需的本地库的集合

## 2 class字节码文件结构