# 1 JPA概述
## 1.1 JDBC
- Java DataBase Connectivity，用于执行sql语句的**Java API**，可为多种关系数据库提供统一访问

## 1.2 持久层框架
- Hibernate：
    - 开源、轻量级的ORM工具：对象-关系映射ORM（Object Relation Mapping）
        - 业务数据-内存-**对象**
        - 业务数据-数据库-**表中行**
        ```mermaid
        graph LR
            对象--ORM-->表中行
        ```
    - 简化操作：在Java中直接操作对象就是在操作数据库中的表
        （便于不熟悉SQL语句的开发人员）
- MyBatis：
    - 支持定制化SQL：开发人员需要熟练使用SQL语句
    - 使用简单的XML或注解来配置，可将接口和POJOs映射成数据库中的记录

## 1.3 JPA是什么
- Java Persistence API，使用JDK5.0注解或XML文件描述对象-关系表的映射关系，并将运行的实体对象持久化到数据库中
    ```mermaid
        graph TB
        a[Java应用程序]-->b[JPA规范:接口和方法]
        b-->c[Hibernate]-->数据库
        b-->EclipseLink-->数据库
        b-->OpenJPA-->数据库
        b-->其他ORM框架-->数据库
        a-->c
    ```

## 1.4 JPA规范版本（略）

## 1.5 JPA实现（供应商）
Hibernate、OpenJPA、EclipseLink

## 1.6 JPA优势
- 标准化
- 简单易用、集成方便
- 可媲美JDBC的查询能力
- 支持面向对象的高级特性

## 1.7 JPA的三方面技术
- ORM映射元数据：JPA支持XML和JDK5.0注解两种**元数据**的形式
    - 元数据描述对象和表之间的映射关系
    - 框架根据元数据将实体对象持久化到数据库表中
- JPA的API：用于操作实体对象
- 查询语言（JPQL）：通过**面向对象**而非面向数据库的查询语言查询数据

## 1.8 JPA和Hibernate
- JPA是规范：JPA本质上是一种**ORM规范**，提供一些API接口，并未提供ORM实现
- Hibernate是实现：Hibernate实现JPA规范，还扩展了其他功能

## 1.9 JPA和MyBatis
- JPA：JPA规范
    - 对象和对象的映射
    - 移植性较好
    - 面向对象
- MyBatis：独立框架
    - 对象和结果集的映射
    - 移植性差，项目移植时需要修改sql语句
    - 面向SQL

---

# 2 JPA应用
## 2.1 JPA应用关键步骤
- 创建**persistence.xml**（固定文件名称），文件放在类路径的META-INF目录下（固定文件位置）
    - 创建JPA单元，一个单元指定一个数据库的相关信息
    - 配置数据库的属性，连接到指定数据库
    - 指定JPA的实现提供者（Hibernate、OpenJPA）：若只有一个实现，默认可不写
    - 指定实体类的信息
- 创建**实体类**，使用**注解或xml配置文件**来描述实体类跟数据库表之间的映射关系
- 使用**JPA API**完成对数据的CRUD操作
    - EntityManagerFactory
    - EntityManager
    - EntityTransaction

## 2.2 JPA注解
1. @Entity
    - 指出该类为实体类，映射到指定的数据库表上
    - 用于实体类声明语句之前
2. @Table
    - 当实体类与其映射的数据库表名不一致时使用该注解标注说明
    - 用于实体类声明语句之前，与@Entity并列使用
    - 属性：
        - name：数据库的表名
        - catalog：数据库模式
        - schema：数据库名
        - uniqueConstraints：约束条件，通常不设置
3. @Id
    - 声明一个实体类的属性映射为数据库表的主键列
    - 用于属性声明语句之前，或置于属性的getter方法之前
4. @GeneratedValue
    - 标注主键的生成策略
    - 与@Id并列使用
    - 通过**strategy**属性指定具体策略：
        - IDENTITY：自动增长，mysql支持（oracle不支持）
        - AUTO：自动根据框架选择主键的方式，默认选项
        - SEQUENCE：序列，oracle支持（mysql不支持）
        - TABLE：通过表产生主键，框架借助表模拟序列产生主键，移植性较好
5. @Basic
    - 表示一个简单的属性到数据库表的字段的映射，在@Entity标注下的类中，若无任何标注的属性，默认即为@Basic
    - 用于属性声明语句之前，或置于属性的getter方法之前
    - 属性：
        - fetch：属性的读取策略
            - EAGER：主支抓取，默认策略
            - LAZY：延迟加载
        - optional：是否允许该属性为null，默认为true
6. @Column
    - 当实体的属性与其映射的数据库表的列不同名时使用该注解标注说明
    - 用于属性声明语句之前，或置于属性的getter方法之前
        （可与@Id一起标注）
    - 属性：
        - name：设置映射数据库表的列名
        - columnDefinition：表示该字段在数据库中的实际类型
            - 通常情况下，ORM框架可以根据属性类型自动判断数据库中字段的类型
            - Date类型：无法确定数据库中到底是DATE/TIME/TIMESTAMP
            - String类型：默认映射类型为VARCHAR，如果要映射到特定类型，如BLOB或TEXT字段类型，则可在此声明
        - 其他属性：unique、nullable、length等
7. @Transient
    - 表示属性并不是数据库表的字段，ORM框架会忽略该属性
    - 用于属性声明语句之前，或置于属性的getter方法之前
8. @Temporal
    - 用于调整精度，如Date类型，可使用该注解来指定在数据库中的具体类型
    - 用于属性声明语句之前，或置于属性的getter方法之前

---

# 3 JPA实体操作
## 3.1 实体管理器
- 实体管理器EntityManager，用于操作实体的读取、持久化、删除等，由EntityManagerFactory创建
- 持久化上下文（persistence context）：在任何时间管理的所有实体集合。在其中，具有相同持久化标识的java实体只存在一个
- 实体管理器EntityManager/实体管理器工厂EntityManagerFactory/持久化单元persistence unit三者关系：
    ```mermaid
    graph
        factory[EntityManagerFactory]--1:1-->unit[persistence unit]
        factory--1:n-->EntityManager
    ```

## 3.2 创建EntityManagerFactory
- 使用**Persistence**创建EntityManagerFactory对象
    - createEntityManagerFactory()
    - createEntityManagerFactory(Map map)：map用于提供EntityManager属性
- 使用EntityManagerFactory对象的createEntityManager()创建createEntityManager
- 常用方法：
    - isOpen()：检查EntityManagerFactory是否处于打开的状态（创建实例后，即处于打开状态）
    - close()：关闭EntityManagerFactory，关闭后将释放所有资源

## 3.3 持久化实体
- EntityManager提供persist()方法，用于插入数据到表

## 3.4 查找实体
- EntityManager提供find()与getReference()方法，根据主键搜索实体，查找到的实体存在于当前持久化上下文中
    - find()：立即执行，若未查找到对象则返回null
    - getReference()：延迟查询，只有当程序使用对象时，才执行查询操作；通过该方法获取到的对象是代理对象，若未查找到对象则会报EntityNotFoundException异常，而不是返回null

## 3.5 更新实体
- 托管：实体由EntityManager管理
- 要更新的实体必须是**已被托管的**，因此需要先使用find获取实体，再修改实体的数据（修改完提交事务即可实现持久化）

## 3.6 删除实体
- EntityManager提供remove()方法，用于删除特定的**已被托管的**记录

---

# 4 JPA集合映射
## 4.1 概念
- 集合映射：实体中集合类型的属性，常用集合List、Set、Map等；只有集合中的数据和当前实体一起，才能表示一个完整的数据
- 集合中存储的对象：
    - 基本类型
    - 可嵌入对象：类上面加上@Embeddable注解表示可嵌入类型，其作为实体的一部分会变得可持久化
- 集合表：集合数据特有的表，其中有一列为联接列（类似外键到主键的引用），使用@CollectionTable指定集合表的名称和联接列的名称

## 4.2 没有集合表的可嵌入类型
1. 可嵌入对象数据存在实体表
    - 新建嵌入类，加上@Embeddable注解
    - 在实体类中设置嵌入类属性，并加上@Embedded注解
> 嵌入类的所有属性作为实体类的一部分建表
2. 修改可嵌入对象映射列
修改实体类中的嵌入类映射到数据库表中的列名，加上与@Embedded注解并列的@AttributeOverrides注解，在其中设置列名即可
``` java {.line-numbers}
    @Embedded
    @AttributeOverrides({
        @AttributeOverride(name = "属性名", column = @Column(name = "列名")),
    })
    private 嵌入类对象 变量名;
```

## 4.3 集合表
#### 4.3.1 基本类型
1. Set集合
- **结果**：生成两张表
    - 实体表
    - 集合表：`实体类名_集合类型的属性名`，使用@CollectionTable注解可以自定义集合表
        - 联接列：`实体类名称_实体类的主键列名称`
        - 特征列：`集合类型的属性名`
        ``` java {.line-numbers}
            @ElementCollection
            @CollectionTable(
                name = "集合表名",
                joinColumns = @JoinColumn(name = "联接列名")
            )
            @Column(name = "特征列名")
            private Set<基本类型> 属性名;
        ```
2. List集合
- 结果类似于Set集合，但是List可以排序
    ``` java {.line-numbers}
            @ElementCollection
            @OrderBy("嵌入类型的属性名1 ASC/DESC, 属性名2 ASC/DESC, ..., 属性名n ASC/DESC")
            private List<基本类型/嵌入对象> 属性名;
    ```
3. 通用集合类型Collection
- 结果类似于Set集合，但是需要在注解中指定集合类型的具体类型
    ``` java {.line-numbers}
            @ElementCollection(targetClass = 具体类型.class)
            private Collection 属性名;
    ```
#### 4.3.2 嵌入类
1. Set集合
- 结果类似于基本类型的Set集合，但集合表的结构不同，表中列均为嵌入类的属性
2. Map集合
- 结果类似于Set集合，但多了一列集合的key值，可用@MapKeyColumn注解来指定Map类型中key值对应列的定义