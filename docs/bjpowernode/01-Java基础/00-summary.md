---
sidebar_label: 0. 小结
---

# Java基础

## 1 Java17零基础入门（略，内容同2）

---

## 2 Java零基础教程
### 2.1 基础知识
1. java文件经历阶段：
    1. 编译阶段：`javac source_path`，检查语法，生成`.class`字节码文件
    2. 运行阶段：`java class_name`，将字节码文件解释成二进制文件，并交至操作系统执行
2. 面向对象编程的三大特征：
    1. 封装 &rarr; 使外部程序不随意访问类中的成员属性
    2. 继承
    3. 多态 &rarr; 解耦合
3. **方法重载overload**：`differentReturnType sameMethodName(differentParameterType differentParameterName, …)`
4. **方法重写override/方法覆盖overwrite**：`sameReturnType sameMethodName(sameParameterType sameParameterName, …)`
    1. 实现接口中的方法
    2. 访问权限不能更低，可以更高
    3. 抛出异常不能更多，可以更少
5. 访问控制权限修饰符：
    1. `public`: 在任何位置都可以访问
    2. `private`: 只有在同一个类下才可以访问
    3. `protected`:` 在同一个package下可以访问，子类subclass亦可以访问
    4. `default`: 在同一个package下可以访问

### 2.2 进阶知识
1. 方法由 `native` 修饰 &rarr; 调用底层C++写的dll程序（动态链接库文件）
2. `类名@内存地址`：物理地址 &rarr; 通过哈希算法计算 &rarr; 十六进制内存地址
3. `Throwable`：
    - `Error`：不可处理，直接退出
    - `Exception`：可处理
        - 直接继承的子类：编译时异常/受检异常 &rarr; 要求处理
        - `RuntimeException`：运行时异常/未受检异常 &rarr; 可不处理
4. 关键词 `final`、关键词 `finally` （与 `try` 联合使用）、标识符 `finalize` （由GC调用）
5. 集合类：数组查询效率高，链表增删效率高
    - `Collection`：单个存储元素
        - `List`：有序、可重复、有下标
            - `ArrayList`：底层数据结构为数组 `Object[]`，非线程安全
            - `LinkedList`：底层数据结构为双向链表
            - `Vector`：底层数据结构为数组 `Object[]`，线程安全
        - `Set`：无序、不可重复、无下标
            - `HashSet`：其元素实际存入 `HashMap` 的key值中
            - `TreeSet`：其元素实际存入 `TreeMap` 的key值中
    - `Map`：键值对存储元素
        - `TreeMap`：底层数据结构为二叉树
        - `HashMap`：底层数据结构为哈希表，非线程安全
        - `HashTable`：底层数据结构为哈希表，线程安全
6. IO流：
    - 流的方向：
        - 输入`Input` / 读`Read`：硬盘 &rarr; 内存
        - 输出`Output` / 写`Write`：内存 &rarr; 硬盘
    - 读取数据的方式：
        - 字节流`InputStream` / `OutputStream`：一次读取一个字节
        - 字符流`Reader` / `Writer`：一次读取一个字符
7. java中的线程：调度、生产者和消费者模式、安全问题
    1. 用户线程：一般编写在程序中的（如主线程）
    2. 守护线程/后台线程：作死循环；所有的用户线程全部结束后，守护线程就会自动结束（如垃圾回收线程）
8. 锁lock：对象锁、死锁（程序会僵持）、锁池（存在共享对象的对象锁）
9. 反射机制：可以操作字节码文件，让代码具有很强的通用性
10. 注解/注释Annotation：告知编译器的，与运行阶段没有关系

### 2.3 可扩展标记语言XML（eXtensible Markup Language）
1. 一般作为配置文件，用于数据存储和数据描述，且不依赖于任何一种编程语言，可以完成多种语言之间的数据交换
2. 解析方式：
    - DOM解析：映射成DOM树
    - SAX解析：从上往下依次解析

---

## 3 IntelliJ IDEA
1. 文件结构
2. Debug模式

---

## 4 数据结构与算法（略）

---

## 5 JVM
### 5.1 概述
1. JDK（Java Development Kit）、JRE（Java Runtime Environment）、JVM（Java Virtual Machine） &rarr; JDK = JRE(JVM + 其它) + 其它
2. 结构：
    1. 类加载子系统Class Loader SubSystem：加载Loading &rarr; 链接Linking &rarr; 初始化Initialization
    2. 运行时数据区Runtime Data Areas
        1. 方法区Method Area
        2. 堆区Heap Area
        3. 栈区Stack Area
        4. 程序计数器PC Registers
        5. 本地方法栈Native Method Stack
    3. 执行引擎Execution Engine
        1. 解释器Interpreter
        2. JIT编译器Just-In-Time Compiler
        3. 垃圾收集器Garbage Collection
    4. 本地方法接口Java Native Interface
    5. 本地方法库Native Method Library

### 5.2 class字节码文件结构
1. JVM只编译与执行class文件
2. 基本信息：魔数magic、版本号version、常量池计数constant_pool_count、常量池constant_pool、类访问标志access_flags、本类索引this_class、父类索引super_class、接口计数interfaces_count、接口数组interfaces[interfaces_count]、字段计数fields_count、字段数组fields[fields_count]（field_info）、方法计数methods_count、方法数组methods[methods_count]（method_info）、属性计数attributes_count、属性数组attributes[attributes_count]（attribute_info）

---

## 6 设计模式
### 6.1 创建型create
1. 单例（Singleton）
2. 简单工厂（Simple Factory）
3. 工厂方法（Factory Method）
4. 抽象工厂（Abstract Factory）
5. 生成器/建造者（Builder）
6. 原型（Prototype）

### 6.2 行为型behavior
1. 责任链（Chain Of Responsibility）
2. 命令（Command）
3. 解释器（Interpreter）
4. 迭代器（Iterator）
5. 中介者（Mediator）
6. 备忘录（Memento）
7. 观察者（Observer）
8. 状态（State）
9. 策略（Strategy）
10. 模板方法（Template Method）
11. 访问者（Visitor）
12. 空对象（Null）

### 6.3 结构型structure
1. 适配器（Adapter）
2. 桥接（Bridge）
3. 组合（Composite）
4. 装饰（Decorator）
5. 外观（Facade）
6. 享元（Flyweight）
7. 代理（Proxy）

---

## 7 MySQL
### 7.1 概述
1. 数据库DB（DataBase）、数据库管理系统DBMS（DataBase Management System）、结构化查询语言SQL（Structure Query Language） &rarr; DBMS负责执行SQL语句，来操作DB当中的数据
2. SQL类型：
    - 数据查询语言DQL（Data Query Language）
    - 数据操作语言DML（Data Manipulation Language）
    - 数据定义语言DDL（Data Definition Language）
    - 事务控制语言TCL（Transaction Control Language）
    - 数据控制语言DCL（Data Control Language）

### 7.2 基础命令与语法
1. 关键词执行顺序：
    ```
    select -> 6
    …
    from -> 1
    …
    join … on … -> 2
    …
    where -> 3
    …
    group by -> 4
    …
    having -> 5
    …
    order by -> 7
    ```
2. 只要有NULL参与的运算结果一定是NULL
3. 一条语句中有 `group by` 的话， `select` 后面只能跟**分组函数**和**参与分组的字段**
4. 连接查询：出现笛卡尔积现象（两张连表的记录条数的乘积）
    1. 内连接：`(inner )join … on …`，两张连表能匹配上的记录才会被查询出来
    2. 左外连接：`left (outer )join … on …`，左为主表，主表数据无条件全部查询出来
    3. 右外连接：`right (outer )join … on …`，右为主表，主表数据无条件全部查询出来

### 7.3 其他特性
1. 存储引擎：表的存储方式，常见的如MyISAM、InnoDB、MEMORY/HEPA
2. 事务特性：原子性Atomicity、一致性Consistency、隔离性Isolation、持久性Durability
    | 隔离级别 | 存在的问题 | 解决的问题 |
    | :--: | :--: | :--: |
    | 读未提交/脏读read uncommitted | 脏读（Dirty Read） | - |
    | 读已提交read committed | 不可重复读 | 脏读 |
    | 可重复读repeatable read | 幻读 | 不可重复读 |
    | 序列化读/串行化读serializable | 无 | 幻读 |
3. 索引：查询表的检索方式之一，默认存储引擎为**InnoDB**时，底层采用**B+树**的数据结构，分页管理，通过物理地址来直接定位记录行
    - B树：每个结点均包括数据的key和data，当data较多时，导致每页能存储的key很少；而要存储的key数量增多时，会导致B树的深度较大，增加查询时的I/O次数
    - B+树：按照key值的大小顺序存储在同一层叶子结点（链表形式）上，非叶子结点上只存储key值（仅起索引作用），可大大降低B+树的高度（索引项中只包含对应子树的最大key值和指向该子树的指针）
4. 设计三范式：
    1. 任何一张表都应该有主键，并且每一个字段原子性不可再分
    2. 所有非主键字段必须完全依赖主键，不能产生部分依赖
    3. 所有非主键字段直接依赖主键，不能产生传递依赖

---

## 8 JDBC
1. 即Java DataBase Connectivity，实现多态机制，面向接口编程
2. 实现步骤：
    ```mermaid
    graph TB
    注册驱动 --> 获取连接 --> 获取数据库 --> 执行SQL语句 --> 处理查询结果集 --> 释放资源
    ```
3. SQL注入问题 &rarr; 使用PreparedStatement
4. 自动提交机制
5. 行级锁/悲观锁（不支持并发）；乐观锁（支持并发）

---

## 9 Oracle（选学）
### 9.1 概述
1. 简单SQL及数据类型，函数，多表查询（1999新标准）
2. 事务的开始时机：第一个DML语句
3. **PL/SQL（Program Language/Structure Query Language）**：Oracle数据库对SQL语句的扩展

### 9.2 数据库对象
1. 表：基本的数据存储对象，以行、列的形式存在
2. 约束：执行数据校验，保证数据完整性
3. 视图：一个或多个表的数据显示，即一张会保存在数据库中的虚表
    - TOP-N分析法
4. 索引：用于提高查询的速度，且与表分开独立存放
5. 同义词：数据库对象的别名，以简化对对象的访问

### 9.3 数据库设计范式
1. 第一范式：一个表中不能包含重复的数据列，即一个实体中不能包含重复的属性
2. 第二范式：所有非主键字段都必须完全依赖于表的主键
3. 第三范式：非主键字段不能依赖于其他的非主键字段，即非主键字段之间不能存在着传递依赖