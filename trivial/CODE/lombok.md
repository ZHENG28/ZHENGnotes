# Lombok TIPS

## 1. `@NonNull`
- 属性为空时，抛出NullPointerException
- lombok生成的setter方法或constructor会自动加上对不为空属性的判断
## 2. `@RequiredArgsConstructor`
- 生成包含final字段和带有@NonNull约束字段（均未初始化）的构造器
- 带有@NonNull约束的字段，会自动加上对其的判空
## 3. `@AllArgsConstructor`
- 带有@NonNull约束的字段，会自动加上对其的判空
## 4. `@NoArgsConstructor`
- 若存在final字段时，会报错
- `force = true`：会对所有final字段赋值（0/null/false）

【所有的构造器注释均会忽略static字段】

---

## 5. `@EqualsAndHashCode`
### 5.1 equals()
- 继承Object的方法：对比是否是同一个对象，即指向同一个内存地址
- 注释重写的方法：不仅对比是否是同一个对象，而且对比所有的属性值是否都相等
### 5.2 hashcode()
- 继承Object的方法：
- 注释重写的方法：

【若两个对象相等（equals() return true），则hashcode值一定相等；但若两个对象的hashcode值相等，两者不一定相等（equals() return true/false）】

## 6. `@ToString`
- 默认打印所有非静态字段，`exclude = {}`可排除不需要打印的字段，`onlyExplicitlyIncluded = true`和`@ToString.Include`可指定要打印的字段
- `callSuper = true`：包含superclass的toString方法
- 可打印不带参数的实例方法（需要`@ToString.Include`）的输出

## 7. `@Data`
- 是`@Getter`、`@ToString`、`@EqualsAndHashCode`、`@RequiredArgsConstructor`、`@Setter`的集合
## 8. `@Value`
- 是`@Getter`、`@ToString`、`@EqualsAndHashCode`、`@AllArgsConstructor`、`@FieldDefaults(makeFinal=true, level=AccessLevel.PRIVATE)`的集合
- 是`@Data`的不可变对象形式，所有的字段均为`private final`类型

---

## 8. `@Singular`
- 在使用@Builder构建新对象的情况下，标注在集合类型的字段上
```java
    @Builder
    public class User {
        private Integer id;
        private String name;
        @Singular
        private List<Address> addresses;
    }
```
- 属性名必须为复数（addresses --解析--> address），否则需要显式指定名字`@Singular("name")`
## 9. `@Builder`
- 用于构建不可变对象
- 在builder中，每个字段都会有一个类似setter的方法

**<font color=red>不可变对象(Immutable Object)</font>：对象一旦被创建后，对象所有的状态及属性在其生命周期内不会发生任何变化。**
1. 不要提供setter方法（包括修改字段的方法和修改字段引用对象的方法）；如果提供修改方法，需要新创建一个对象，并在新创建的对象上进行修改；
2. 将类的所有字段定义为final、private；
3. 不允许子类重写方法（可以将构造函数声明为私有的，通过工厂方法创建对象）；
4. 通过构造器初始化所有成员变量，引用类型的成员变量必须进行深拷贝；
5. getter方法不能对外泄露this引用以及成员变量的引用；

---

## 10. `@Synchronized`
## 11. `@Cleanup`
## 12. `@SneakyThrows`
## 13. `@Generated`

## 14. `@val`
## 15. `@var`

## 16. `@With`