---
sidebar_position: 3
---

# java知识点

## 1. 类与类之间的关系
1. 泛化关系：A is a B(extends)
2. 实现关系：A like a B(implements)
3. 关联关系：A has a B，在A对象中含有B对象的引用，但比泛化弱（单向/双向）
4. 聚合关系：特殊的关联关系，整体和部分之间的关系，整体不会决定部分的生命周期
5. 合成关系：特殊的关联关系，整体和部分之间的关系，整体会决定部分的生命周期
6. 依赖关系：主要体现在局部变量上，类和类体中的局部变量之间的关系，方法执行结束，该局部变量内存就消失了

## 2. 可变长参数（反射机制）
1. 如果方法中有一个方法参数可以精确匹配，则不再执行可变长参数的方法
2. 可变长参数可以当作数组处理

## 3. 反射机制
```java showLineNumbers
// 只使用类加载机制，不返回任何值
Class.forName("完整类名");
// 操作这个类中的其他字节码，例如：方法、构造、字段/属性等，可以返回值
Class c = Class.forName("完整类名");
```

## 4. 面向横切面的编程方式AOP（Aspect Oriented Programming）
将与业务无关的功能从业务流程中剥离出来，形成一个独立的组件，将这个组件以**横向的方式**交叉地应用到业务当中的一种编程方式

## 5. 输入流和输出流都是相对于内存而言，到内存去是输入，从内存出来是输出

## 6. 序列化Serializable
1. 定义：
    - 完整保存住一个对象在某一状态下的信息
    - 是一个freeze的过程，它把一个对象freeze住，然后存储，等待再次需要的时候，再将这个对象de-freeze就可以立即使用了
2. 什么时候需要序列化：
    - 存储对象：发现序列化操作用于存储时，一般是对于NoSql数据（而在使用Nosql数据库进行存储时，用“freeze”这个说法来理解是再恰当不过了）
    - 数据传输
3. 当我们让实体类实现Serializable接口（是一个空接口，没有任何方法）时，其实是在告诉JVM，此类可被默认的序列化机制序列化

## 7. `@Configuration` 和 `@Component` 的区别
- `@Configuration` 注册到Spring容器中的Bean是一个 **CGLIB代理** 的Bean
- `@Component` 注册到Spring容器中的还是原始Bean

## 8. `ConcurrentHashMap` 的key和value为什么不能为null？
1. 存在二义性：是没有在集合中，还是值本身就是 `NULL`
2. 多线程环境下，无法通过 `containsKey(key)` 方法来判断否存在这个键值对 &rarr; 存在二义性问题
3. 在使用 `ConcurrentHashMap` 时，尽量使用原子性的复合操作方法（如：`putIfAbsent`、`compute`、`computeIfAbsent`、`computeIfPresent`、`merge`）