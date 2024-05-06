# Oracle

## 1 概述
### 1.1 基本概念
1. 特点：
    1. 支持多用户、高性能的事务处理
    2. 实施安全性控制和完整性控制
    3. 支持分布式数据库和分布处理
    4. 具备可移植性、可兼容性和可连接性
2. 数据库安全：用户、方案、权限、角色
3. 网络访问：`host_name/ip:port:server_name`
    - 数据库名
    - 实例名：数据库的内存区域和后台进程集合的总称
    - 服务名`server_name`：数据库服务名
    - 监听器：在数据库服务器端运行的一个服务，用于监听客户端到数据库的连接请求，通过网络访问时必须启动

### 1.2 简单的SQL语句
1. 主要的数据类型：
    1. 字符型：
        - 定长字符型：`VARCHAR(LENGTH)`、`CHAR(LENGTH)`
        - 不定长字符型：`VARCHAR2(LENGTH)`
    2. 数值型：`NUMBER(LENGTH,POINT)`
    3. 日期型：`DATE`
2. 算术表达式：出现`NULL`，结果就是`NULL`
    - 数值型数据：支持`+`、`-`、`*`、`/`运算
    - 日期型数据：支持`+`、`-`运算
        1. 日期 +/- 天数 = 新日期
        2. 日期1 +/- 日期2 = 两者之间相差的天数
3. 连接表达式：出现`NULL`，结果还是原来的数据
4. WHERE子句中查询日期型数据的默认格式为`DD-MM-YYYY` &rarr; 通过`ALTER SESSION SET nls_date_format="YYYY-MM-DD HH:MI:SS"`修改**当前会话**中的日期格式
5. 运算符优先级：
    1. 比较运算符
    2. `NOT`
    3. `AND`
    4. `OR`

### 1.3 函数
- 单行函数：每次取一条记录作为输入，得到的输出为**单个**输入对应的**单个**结果
    - 字符函数：大小写转换函数、字符处理函数
    - 数字函数：小数点四舍五入函数`ROUND(NUMBER,POINT)`、数字截取函数`TRUNC(NUMBER,POINT)`、求模/求余函数`MOD(NUMBER1,NUMBER2)`
    - 日期函数
    - 转换函数：隐式数据类型转换函数、显式数据类型转换函数
        ``` mermaid
        graph LR
        NUMBER -- TO_CHAR --> CHARACTER
        DATE -- TO_CHAR --> CHARACTER
        CHARACTER -- TO_NUMBER --> NUMBER
        CHARACTER -- TO_DATE --> DATE
        ```
    - 其他函数：处理空值函数、嵌套函数、分组函数（忽略空值）
- 多行函数：一次性取多条记录作为输入，得到的输出为**多个**输入对应的**单个**结果

### 1.4 多表查询
1. 用单个select语句从多张表中查询数据（若无等值条件，会产生笛卡尔积现象）
2. SQL1992标准（旧）：
    1. 等值查询：两表之间存在父子关系，用`=`来连接表字段
        - 只能查询两表中一一对应的记录
        - N张表的等值查询，需要N-1个等值条件
        ``` sql
        SELECT * FROM emp e, dept d
        WHERE e.deptno = d.deptno;
        ```
    2. 非等值查询：两表之间不存在父子关系，用`!=`来连接表字段
        ``` sql
        SELECT * FROM emp e, salgrade s
        WHERE e.sal BETWEEN s.losal AND s.hisal;
        ```
    3. 自连接：将一张表虚拟成两张表，在这两张表上做等值查询
        ``` sql
        SELECT * FROM emp e, emp m
        WHERE e.mgr (+) = m.empno;
        ```
    4. 外连接：在等值查询的基础上，查询不满足等值条件的数据
        1. 左外连接：可以把左边表不满足等值条件的数据查询出来
            ``` sql
            SELECT * FROM emp e, dept d
            WHERE e.deptno = d.deptno (+);
            ```
        2. 右外连接：可以把右边表不满足等值条件的数据查询出来
            ``` sql
            SELECT * FROM emp e, dept d
            WHERE e.deptno (+) = d.deptno;
            ```
3. SQL1999标准（新）：
    1. 交叉连接：会产生笛卡尔积现象
        ``` sql
        SELECT e.*, d.* FROM emp e
        CROSS JOIN dept d;
        ```
    2. 自然连接：两表之间存在父子关系，自动匹配两表中列名相同的所有字段作为**参照列**，并在所有的参照列上做等值查询
        - 参照列上无前缀，即`e.deptno`会报错
        - 如果参照列的数据类型不同，会报错
        - 当两表中没有参照列时，会产生笛卡尔积现象
        ``` sql
        SELECT e.empno, e.ename, deptno, d.dname FROM emp e
        NATURAL JOIN dept d;
        ```
    3. `JOIN … USING`：在自然连接的基础上，可以指定参照列来作为等值条件
        ``` sql
        SELECT e.empno, e.ename, deptno, d.dname FROM emp e
        JOIN dept d USING(deptno);
        ```
    4. 外连接`OUTER JOIN … ON`：使用on指定的查询条件
        ``` sql
        SELECT e.*, d.* FROM emp e
        JOIN dept d ON (e.deptno = d.deptno);
        ```
        - 左外连接`LEFT OUTER JOIN … ON`：可以把左边表不满足等值条件的数据查询出来
            ``` sql
            SELECT e.*, d.* FROM emp e
            LEFT OUTER JOIN dept d ON (e.deptno = d.deptno);
            ```
        - 右外连接`RIGHT OUTER JOIN … ON`：可以把右边表不满足等值条件的数据查询出来
            ``` sql
            SELECT e.*, d.* FROM emp e
            RIGHT OUTER JOIN dept d ON (e.deptno = d.deptno);
            ```
        - 全连接`FULL OUTER JOIN … ON`：可以把左右两边表不满足等值条件的数据都查询出来
            ``` sql
            SELECT e.*, d.* FROM emp e
            FULL OUTER JOIN dept d ON (e.deptno = d.deptno);
            ```
    5. `UNION`：将两个查询字段个数、类型、顺序一致的结果集合并成一个
        - `UNION`：去除重复数据
        - `UNION ALL`：不去除重复数据
4. 子查询：用来给主查询提供查询条件，会首先被执行
    1. 单行单列：使用单行比较运算符`=`、`>`、`>=`、`<`、`<=`、`<>`
    2. 多行单列：使用多行比较运算符`IN`、`ALL`、`ANY`
    3. 多行多列：使用多行比较运算符`IN`
        - 成对比较：`WHERE (field1, field2) IN (SELECT field1, field2 FROM table)`
        - 非成对比较：`WHERE field1 IN (SELECT field1 FROM table) AND field2 IN (SELECT field2 FROM table)`

### 1.5 数据操作语句DML与事务控制
1. DML语句会触发事务
    1. `INSERT INTO`
    2. `UPDATE`：在事务没有结束之前，该条记录会被锁住；事务结束后，该条记录的锁会被放开，其他用户才能操作该条记录
    3. `DELETE`
2. 对表的修改：主要是对字段的修改，包括添加字段、修改字段（类型、长度）、删除字段等
    - 字段中存在数据时，不能修改字段类型，字段长度可改长不改短
    - 修改字段缺省值时，不会影响已存在的数据，只会对修改后插入的数据产生影响
3. 事务的开始/结束时机：
    1. 开始点：第一个DML语句
    2. 结束点：**尽量避免隐式地结束事务**
        - 手动结束（显式）：
            手动提交：`COMMIT`
            手动回滚：`ROLLBACK`
        - 自动结束（隐式）：
            自动提交：`DDL`、`DCL`
            自动回滚：连接异常、断开连接、系统崩溃等
4. 事务标记点`SAVEPOINT name`：只在事务中有效

### 1.6 PL/SQL（Program Language/Structure Query Language）
1. 一种支持SQL的程序语言，是Oracle数据库对SQL语句的扩展

---

## 2 数据库对象
### 2.1 表
1. 基本的数据存储对象，以行、列的形式存在
2. 序列：用来维护数据库的主键数据
    ``` sql
    CREATE SEQUENCE sequence_name
    ……
    ```

### 2.2 约束
1. 执行数据校验，保证数据完整性
2. 必须建立在表上，一张表中可以同时存在多种相同类型的约束
3. 可以在建表时同时创建，或通过修改表`ALTER TABLE`来创建
4. 约束类别：
    1. 非空约束`NOT NULL`：约束该字段的数据不能为NULL
        - 唯一一个可以定义在列级的约束
    2. 唯一约束`UNIQUE`：约束该字段的数据不能重复，但可以为NULL
        - 列级约束：可以作用在单个字段上
        - 表级约束：同时作用在多个字段上
    3. 主键约束`PRIMARY KEY`：非空约束+唯一约束
        - 一张表中只有一个主键约束
        - 可以作用在单个字段上（即**独立主键**），也可以作用在多个字段上（即**联合主键**）
    4. 外键约束：连接两表的两个字段，可以重复，可以为NULL
        - 父子表的先后顺序：
            - 创建表/添加数据：父表 &rarr; 子表
            - 删除表/删除数据：子表 &rarr; 父表
        - 两表之间的数量关系及其实现：
            - 一对一：用主外键实现时，要在外键上同时设置唯一约束
            - 一对多/多对一：用主外键实现
            - 多对多：要引入关系表，将两表的主键当作外键，同时可以将两外键当作关系表的联合主键，或者创建关系表自己的独立主键

### 2.3 视图
1. 一个或多个表的数据显示，实际上是有命名的查询语句，即一张会保存在数据库中的虚表
    1. 可以限制对数据的访问，指定用户查看的部分
    2. 简化查询
    3. 实现数据独立性
2. 创建只读型视图`… WITH READ ONLY`，使用户无法执行DML操作
3. 行内视图（又名子查询）：无命名，不会保存在数据库中
4. **TOP-N分析法**：用于查询某个范围内最大/最小（TOP级别）的前N个值
    - 等于某值：仅支持查询`rownum = 1`的数据，无法查询到`rownum = n`的数据
        ``` sql
        SELECT ROWNUM, * FROM student
        WHERE ROWNUM = 1;
        ```
    - 大于某值：与等于同理，无法查询到`rownum > n`的数据
        - 可用子查询来查找第二行以后的记录：
            ``` sql
            SELECT *
            FROM (SELECT ROWNUM AS no, * FROM temp)
            WHERE no >= 2
            ```
    - 小于某值：支持查询`rownum < n`的数据
5. `ROWNUM`：记录插入时即生成的序号；查询`ROWNUM`在某区间的数据/指定排序 &larr; 子查询

### 2.4 索引
1. 用于提高查询的速度，且与表分开独立存放
2. 创建方式：
    1. 自动创建：自动为主键约束和唯一约束的列创建索引，删除约束时会自动删除对应的索引
    2. 手动创建`CREATE INDEX` &amp; 手动删除`DROP INDEX`

### 2.5 同义词
1. 数据库对象的别名，以简化对对象的访问
2. 语法：`CREATE SYNONYM synonym_name FOR object`

---

## 3 数据库设计范式
1. 第一范式：一个表中不能包含重复的数据列，即一个实体中不能包含重复的属性
2. 第二范式：所有非主键字段都必须完全依赖于表的主键
3. 第三范式：非主键字段不能依赖于其他的非主键字段，即非主键字段之间不能存在着传递依赖