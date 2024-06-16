---
sidebar_label: 8. MyBatisPlus
---

### 初识 MyBatis-Plus 与快速开始
- 增强MyBatis的功能，但不做改变
- 基础知识：
    - 表对象：主键列属性要用`@TableId`注解
    - Dao接口/Mapper：继承`BaseMapper`的同时，指定实现的实体类
    - 需要配置`@MapperScan`来扫描Mapper类所在的包
- 源码分析：通过动态代理实现

### 配置日志
- 在配置文件中加上`mybatis-plus.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl`

### CRUD基本用法
1. CREATE
2. UPDATE
    - 只更新非null的属性
    - 实体类属性建议使用**包装类型**来定义属性（基本类型存在默认值，会产生意外的操作）
3. DELETE
    1. `deleteById(id)`
    2. `deleteByMap(map)`：根据map中的条件来查找删除记录
    3. `deleteBatchIds(ids)`：批量删除
        ``` java
            // 使用lambda表达式创建List集合
            List<Integer> ids = Stream.of(1, 2, 3, 4, 5).collect(Collectors.toList());
        ```
4. SELECT：如果没有查询到数据，返回null
    1. `selectById(id)`
    2. `selectByMap(map)`
    3. `selectBatchIds(ids)`：批量查询

### ActiveRecord
0. 每一张表对应一个类，AR可以持久化自身，并在其中已经封装了对数据库的访问，可以直接通过对象实现CRUD（不使用mapper）
1. 实体类：继承Model（其中提供了对数据库的CRUD操作）
2. Dao接口：这里不需要，但是MP框架需要通过这个接口来获取对应表的信息
3. CRUD操作：
    1. insert
    2. udpate
    3. delete：即使没有在数据库中删除记录，也会返回true
    4. select：存在记录，返回实体对象；不存在记录，则返回null

### 表和列
1. 主键类型
    1. `none`：无主键
    2. `auto`：自动增长
    3. `input`：手工输入
    4. `id_worker`：实体类-Long id，列-bigint（现在最常用）
    5. `id_worker_str`：实体类-String id，列-varchar 50
    6. `uuid`：实体类-String id，列-varchar 50
2. 指定表名：`@TableName`
3. 指定列名：`@TableField`
4. 驼峰命名：实体类属性-驼峰命名，列-下划线隔开

### 自定义sql
1. resources文件夹下建xml文件夹，新建映射文件
2. 配置文件中指明地址：`mybatis-plus.mapper-locations=classpath:xml/*Mapper.xml`

### 查询和分页
1. 查询：构造器Wrapper
    - `allEq(map, boolean)`：
        - true：处理map中的null值，where条件中加入`field IS NULL`
        - false：忽略map中的null值，不作为where条件
    - `eq/=`：列名同数据库中的一致，不可用驼峰命名
    - `ne/!=`
    - `gt/>`
    - `ge/>=`
    - `lt/<`
    - `le/<=`
    - `between`：等同于`WHERE field BETWEEN ? AND ?`（两端均存在等于号）
    - `notBetween`
    - `like`和`notLike`：等同于`WHERE field (NOT) LIKE %val%`
    - `likeLeft`和`likeRight`：等同于`WHERE field LIKE %val/val%`
    - `isNull`和`isNotNull`
    - `in`和`notIn`：函数`in(column, values...)`，等同于`WHERE field (NOT) IN (?, ?, ...)`
    - `inSql`和`notInSql`：函数`inSql(column, sql)`，等同于`WHERE field (NOT) IN (sql)`，即**子查询**
    - `groupBy`
    - `orderByAsc`和`orderByDesc`
    - `orderBy(boolean condition, boolean isAsc, String... columns`：可指定字段和排序方向
        - `boolean condition`：orderBy是否添加到sql语句中
        - 可在queryWrapper上追加条件
    - `or`和`and`：追加在其他条件函数后即可，系统默认使用`and`
    - `last`：可在sql语句的最后再拼接sql语句
    - `exists`和`notExists`：拼接sql语句
2. 分页：配置分页插件（默认为内存分页）
    1. 统计符合queryWrapper的记录数：`SELECT COUNT(1) FROM table( WHERE condition)`
    2. 实现分页，在sql语句末尾加上`limit num1, num2`

### MP生成器
``` java {.line-numbers}
    public static void main(String[] args) {
        // 创建AutoGenerator
        AutoGenerator autoGenerator = new AutoGenerator();

        // 设置全局配置
        GlobalConfig global = new GlobalConfig();
        global.setOutputDir(System.getProperty("user.dir") + "/src/main/java");
        global.setMapperName("%sMapper");
        global.setServiceName("%sService");
        global.setServiceImplName("%sServiceImpl");
        global.setControllerName("%sController");
        global.setIdType(IdType.AUTO);
        autoGenerator.setGlobalConfig(global);

        // 设置数据源DataSource
        DataSourceConfig dataSource = new DataSourceConfig();
        dataSource.setDriverName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/bjpowernode");
        dataSource.setUsername("root");
        dataSource.setPassword("MySQL123!");
        autoGenerator.setDataSource(dataSource);

        // 设置Package信息
        PackageConfig pack = new PackageConfig();
        // 设置包名，该package下有mapper、service、controller等文件夹及代码
        pack.setModuleName("order");
        // 设置父包名
        pack.setParent("com.zj.helloplus");
        autoGenerator.setPackageInfo(pack);

        // 设置策略
        StrategyConfig strategy = new StrategyConfig();
        // underline_to_camel：驼峰命名
        strategy.setNaming(NamingStrategy.underline_to_camel);
        strategy.setColumnNaming(NamingStrategy.underline_to_camel);
        autoGenerator.setStrategy(strategy);

        // 执行自动生成
        autoGenerator.execute();
    }
```