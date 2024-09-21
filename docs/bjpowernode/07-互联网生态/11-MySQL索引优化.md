---
sidebar_label: 11. MySQL索引优化
---

# MySQL索引优化

## 1 简介
### 1.1 概述
1. 索引，是帮助MySQL高效获取数据的一种数据结构，即排好序的、可以快速查找数据的数据结构
    ```mermaid
    graph TB
    root((12)) --- left((5))
    root --- right((20))
    ```
    - `INNODB` 存储引擎：`B+ Tree` 索引
    - `MYISAM` 存储引擎：`B Tree` 索引
    - `MEMORY` 存储引擎：`Hash` 索引
2. 优势：提高数据检索的效率，降低I/O成本，降低CPU消耗
3. 劣势：索引文件需要占用存储空间；增删改时需要更新索引文件，增加一次增删改的时间
4. 使用场景：
    1. 主键自动创建索引
    2. 频繁作为查询条件的字段应该创建索引
    3. 外键关系应该创建索引
    4. 多字段查询时应该创建组合索引
    5. 使用索引字段进行排序 &rarr; 大幅度提高排序速度
    6. 统计、分组字段应该创建索引
5. 分类：
    1. 主键索引：主键列会自动创建主键索引
        ```sql showLineNumbers
        -- 创建
        ALTER TABLE table_name ADD PRIMARY KEY(field_name);
        -- 删除
        ALTER TABLE table_name DROP PRIMARY KEY;
        ```
    2. 唯一索引：唯一约束会自动创建唯一索引
        ```sql showLineNumbers
        -- 创建
        ALTER TABLE table_name ADD UNIQUE index_name(field_name);
        CREATE UNIQUE INDEX index_name ON table_name(field_name);
        -- 删除
        DROP INDEX index_name ON table_name;
        ```
    3. 单值索引：一个索引只包含单列，即普通索引
        ```sql showLineNumbers
        -- 创建
        ALTER TABLE table_name ADD INDEX index_name(field_name);
        CREATE INDEX index_name ON table_name(field_name);
        -- 删除
        DROP INDEX index_name ON table_name;
        ```
    4. 复合索引：一个索引包含多列
        ```sql showLineNumbers
        -- 创建
        ALTER TABLE table_name ADD INDEX index_name(field1_name, field2_name, …);
        CREATE INDEX index_name ON table_name(field1_name, field2_name, …);
        -- 删除
        DROP INDEX index_name ON table_name;
        ```

### 1.2 `EXPLAIN` 执行计划
0. 语法：`EXPLAIN SQL`
1. `id`：`SELECT` 查询的序列号，表示操作表的顺序
2. `select_type`：查询类型
    1. `SIMPLE`：简单的 `SELECT` 查询，不包含子查询或联合查询
    2. `PRIMARY`：包含子查询的外层查询
    3. `DERIVED`（衍生）：`FROM` 列表中的子查询
    4. `SUBQUERY`：`SELECT` 或 `WHERE` 列表中的子查询
3. `table`：本行记录的来源表
4. `type`：访问类型，效率从高到低为 `SYSTEM` &gt; `CONST` &gt; `EQ_REF` &gt; `REF` &gt; `RANGE` &gt; `INDEX` &gt; `ALL`
5. `possible_keys`：可能使用到的一个或多个索引
6. `key`：查询中实际使用的索引
7. `ref`：被用于查找索引的常量/列
8. `rows`：执行查询时必须检查的行数
9. `extra`：额外信息
    1. `Using filesort`：使用表文件排序，即无法使用索引完成的排序
    2. `Using temporary`：使用临时表排序，如 `ORDER BY` 和 `GROUP BY` 命令
    3. `Using index`：使用索引查找，避免了访问表数据
    4. `Using where`：使用 `WHERE` 过滤

### 1.3 查询优化
1. 索引是否生效：
    1. 最佳左前缀法则：查询从联合索引的最左前列开始，并且不跳过索引中的列 &rarr; 生效
    2. 在索引列上做计算、函数操作 &rarr; 失效
    3. 联合索引中，在范围条件后的过滤条件 &rarr; 失效
        - 如 `SELECT * FROM user WHERE id = 1 AND age > 18 AND name = 'Jack'` 中，无法命中包含id、age、name的联合索引，只能命中id和age
    4. 过滤条件中使用不等于 &ne; 符号 &rarr; 失效
    5. `IS NULL` &rarr; 生效； `IS NOT NULL` &rarr; 失效
    6. `LIKE` 的通配符在字符左侧，即左/左右模糊查询 &rarr; 失效
    7. 字符串不加单引号 &rarr; 失效
    8. 使用 `OR` 连接 &rarr; 失效
2. 排序/分组优化：
    1. 尽量避免 `Using filesort` 排序
    2. `ORDER BY` / `GROUP BY` 使用索引最左前列
    3. `WHERE` 子句中出现索引范围查询 &rarr; 索引失效
3. 关联查询优化：**<font color="red">被驱动表的相关字段上创建索引</font>**
    - 内连接：会自动把小结果集选为**驱动表** &rarr; 大表加索引
    - 左外连接：左表（驱动表）全表扫描 &rarr; 右表加索引
    - 右外连接：右表（驱动表）全表扫描 &rarr; 左表加索引
5. 慢查询日志：用来记录在MySQL中响应时间超过阈值 `long_query_time` 的SQL语句，默认不开启慢查询日志（非调优场景下，会对性能产生影响）
    ```sql showLineNumbers
    -- 查看是否开启慢查询日志/超时时间
    SHOW VARIABLES LIKE '%slow_query_log/long_query_time%';
    -- 开启慢查询日志
    SET GLOBAL show_query_log = 1;
    -- 设置超时时间
    SET GLOBAL long_query_time = 1;
    ```
    - 慢查询日志文件存储在 `mysql-path/data/device-slow.log` 中