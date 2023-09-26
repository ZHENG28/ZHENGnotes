# 1. `spring-boot-test`
## 1.1 `@MockBean`
## 1.2 `@SpyBean`

@MockBean 和 @SpyBean 生成的对象受spring管理，相当于自动替换对应类型bean的注入


# 2. `mockito-core`
## 2.1 `@Mock`
## 2.2 `@Spy`
## 2.3 `@InjectMocks`

@Spy和@Mock生成的对象不受spring管理,也不会替换Spring对应类型的bean
@InjectMocks用于自动注入@Spy和@Mock标注的对象
