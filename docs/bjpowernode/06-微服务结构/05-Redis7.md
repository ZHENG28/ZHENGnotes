---
sidebar_label: 5. Redis7
---

# Redis7

## 1 数据库介绍
### 1.1 数据库的发展历程
1. 单机数据库时代
2. Memcached时代
3. 读写分离时代
4. 分表分库时代（集群）：**关系型**数据库，如Oracle、MySql、DB2、SqlServer等
5. NoSQL时代（彻底改变底层存储机制，采用聚合数据结构存储数据）：**非关系型**数据库，如Redis、mongoDB、HBase等

### 1.2 NoSQL数据库
- Not Only SQL，泛指non-relational（非关系型数据库），去掉了关系数据库的关系型特性 &rarr; **数据之间一旦没有关系，使得扩展性、读写性都大大提高**
- 为解决大规模数据集合**多重数据种类**带来的挑战，特别是**超大规模数据的存储**
- 数据库模型：
    - **聚合模型**：把一组相关联的数据作为一个整体进行存储和管理
    - BSON：数据保存到键值对中，数据之间用逗号隔开，{}表示对象，[]表示数组
    ```json showLineNumbers
    {
        "student": {
            "id": 1001,
            "name": "zhangsan",
            "course": [
                {
                    "courseId": 101,
                    "courseName": "java"
                },
                {
                    "courseId": 102,
                    "courseName": "spring"
                }
            ]
        }
    }
    ```

---

## 2 基础知识
### 2.1 简介
1. 远程字典服务器Remote Dictionary Server，是一个用C语言编写的、开源的、基于内存运行并支持持久化的、高性能的**NoSQL数据库**
2. Redis中的数据大部分时间都是存储在内存中，适合存储频繁访问、数据量比较小的数据
3. 开关服务命令：
    - 启动服务：
        - 前台启动：`redis-server`
        - 后台启动： `redis-server &`
        - 启动redis服务时，指定配置文件：`redis-server redis.conf &`
    - 关闭服务：
        - 正常关闭：`redis-server shutdown`
        - 直接关闭进程：查看redis的pid，再`kill -9 pid`
4. 特点：
    1. 支持数据持久化：Redis可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用
    2. 支持多种数据结构：不仅支持简单的key-value类型的数据，同时还提供list，set，zset，hash等数据结构的存储
    3. 支持数据备份：`master-slave` 模式的数据备份

### 2.2 客户端
1. Redis客户端是一个程序，通过网络连接到Redis服务器。可发送命令，同时会显示Redis服务器的处理结果
2. `redis-cli`（Redis Command Line Interface）：Redis自带的、基于命令行的**Redis客户端**，用于与Redis服务端交互
    - 启动客户端：（windows系统中需要开两个dos窗口，一个用作redis服务，一个用作redis客户端）
        - `redis-cli`：直接连接默认IP127.0.0.1，端口6379的Redis
        - `redis-cli -h 指定IP -p 端口号`：连接指定IP与端口的Redis
    - 退出客户端：
        - `exit`
        - `quit`
3. 基础知识：
    1. 测试redis服务的性能：`redis-benchmark`
    2. 查看redis服务是否正常运行：`ping`，如果正常则返回`PONG`
    3. 查看redis服务器的统计信息：
        - 查看所有统计信息：`info`
        - 查看指定统计信息：`info section`
    4. redis的数据库实例：
        1. 作用类似于mysql的数据库实例，但redis中的数据库实例只能由redis服务来创建和维护，开发人员不能修改和自行创建数据库实例
        2. 默认自动创建16个数据库实例，可以通过配置文件指定redis自动创建的数据库个数
        3. 启动客户端时，默认连接0号数据库实例
        4. 常用命令：
            - 切换数据库实例：`select index`
            - 查看当前数据库实例中所有key的数量：`dbsize`
            - 查看当前数据库实例中所有的key：`keys *`
            - 清空数据库实例：`flushdb`
            - 清空所有的数据库实例：`flushall`
    5. 查看redis中的配置信息：
        - 查看所有配置信息：`config get *`
        - 查看指定配置信息：`config get parameter`

### 2.3 5种数据结构与操作命令
0. key常用操作命令：
    - 查看数据库中的key：`keys pattern`
        - 返回查询到的所有key
        - 通配符：
            - `*`：匹配0个或者多个字符
            - `?`: 匹配1个字符
            - `[]`：匹配[]里边的1个字符
    - 判断key在数据库中是否存在：`exists key [key key ....]`
        - 返回存在的key的数量
    - 移动指定key到指定的数据库实例：`move key index`
    - 查看指定key的**剩余生存时间ttl（time to live）**：`ttl key`
        - 如果key没有设置生存时间，则返回 `-1`
        - 如果key不存在，则返回 `-2`
    - 设置key的最大生存时间：`expire key seconds`
        - 设置成功则返回 `1` ，其他返回 `0`
    - 查看指定key的数据类型：`type key`
        - 如果key不存在，则返回 `none`
        - 如果key存在，则返回key的数据类型
    - 重命名key：`rename key newkey`
        - 如果修改成功，则返回 `OK`
        - 如果key不存在，则返回 `(error) ERR no such key`
        - 如果newkey已存在，返回 `OK` 且覆盖旧value
    - 删除指定的key：`del key [key key .....]`
        - 返回实际删除的key的数量
1. 字符串类型string：`单key:单value`
    - 如：`username:zhangsan`、`age:20`等
    - 能存储任何类型的数据，包括二进制数据，最大存储512M的数据
    - 常用操作命令：
        - 设置string数据：
            - `set key value`：如果key已经存在，则后设置的value会覆盖旧value
            - `setnx key value`：如果key已经存在，则放弃设置
            - `setex key seconds value`：设置字符串数据的同时，设置它最大生命周期
        - 获取string数据：`get key`
        - 追加字符串：`append key value`
            - 返回追加之后的字符串长度
            - 如果key不存在，则新建一个键值对
        - 获取字符串数据的长度：`strlen key`
        - 对字符串数值运算：返回运算后的数据
            - 如果key不存在，则先初始化一个`key 0`，再进行运算
            - key的value值必须是数值型，否则，报`(error) ERR value is not an integer or out of range`的错
            - 命令：
                - `incr key`：+1
                - `decr key`：-1
                - `incrby key offset`：+offset
                - `decrby key offset`：-offset
        - 用value覆盖从下标为startIndex开始的字符串：`setrange key startIndex value`
        - 获取字符串key中从startIndex到endIndex（闭区间）的字符组成的子字符串：`getrange key startIndex endIndex`
            - 下标自左至右，从0开始，依次往后
            - 负下标自右至左，从-1开始，依次往前
        - 批量设置string数据：
            - 默认情况：`mset key1 value1 key2 value2 ...`
            - 当所有key都不存在时设置成功，否则全部放弃设置：`msetnx key1 value1 key2 value2 ...`
        - 批量获取string数据：`mget key1 key2 key3 ...`
2. 列表类型list：`单key:多有序value`
    - 如：`contacts:xxx, xxx, xxx`等
    - 有序（按照插入顺序排序）、可重复集合，元素有（负）下标
    - 可以添加一个元素到列表的头部（左边）或者尾部（右边）
    - 常用操作命令：
        - 将一个或多个值依次插入到列表：
            - 表头（左侧）：`lpush key value [value value .....]`
            - 表尾（右侧）：`rpush key value [value value .....]`
        - 获取指定列表中指定下标区间的元素：`lrange key startIndex endIndex`
        - 从指定列表中移除并且返回指定元素：
            - 表头：`lpop key`
            - 表尾：`rpop key`
        - 获取指定列表中指定下标的元素：`lindex key index`
        - 获取指定列表的长度：`llen key`
        - 根据count值移除指定列表中跟value相等的数据：`lrem key count value`
            - count &gt; 0：从列表的左侧移除count个跟value相等的数据
            - count &lt; 0：从列表的右侧移除count个跟vlaue相等的数据
            - count = 0：从列表中移除**所有**跟value相等的数据
        - 截取指定列表中指定下标区间的元素组成新的列表且赋值给key：`ltrim key startIndex endIndex`
        - 将指定列表中指定下标的元素设置为指定值：`lset key index value`
        - 将value插入到指定列表中位于pivot元素之前或之后的位置：`linsert key before/after pivot vlaue`
3. 集合类型set：`单key:多无序value`
    - 如：`city:beijing shanghai chongqin`等
    - 无序、无重复集合，元素没有下标
    - 常用操作命令：
        - 将一个或多个元素添加到指定的集合中：`sadd key value [value value ....]`
            - 返回成功加入的元素的个数
            - 忽略已存在的元素
        - 获取指定集合中所有的元素：`smembers key`
        - 判断指定元素在指定集合中是否存在：`sismember key member`
            - 若元素存在，则返回1
            - 若不存在，则返回0
        - 获取指定集合的长度：`scard key`
        - 移除指定集合中一个或多个元素：`srem key member [member .....]`
            - 返回成功移除的元素个数
            - 忽略不存在的元素
        - 随机获取指定集合中的一个或多个元素：`srandmember key [count]`
            - count &gt; 0：随机获取的多个元素之间不能重复
            - count &lt; 0: 随机获取的多个元素之间可能重复
        - 从指定集合中随机移除一个或多个元素：`spop key [count]`
        - 将指定集合中的指定元素移动到另一个集合中：`smove source dest member`
        - 获取**第一个集合key1中有的、但其它集合（key2 [key3 key4 ....]）中都没有的**元素组成的新集合：`sdiff key1 key2 [key3 key4 ....]`
        - 获取所有指定集合中**都有的**元素组成的新集合：`sinter key key [key key ....]`
        - 获取所有指定集合中**所有元素**组成的新集合：`sunion key key [key key .....]`
4. 哈希类型hash：`单key:对象(属性:值)`
    - 如：`student: id:1001, name:zhangsan, age:20`等
    - 适用于存储对象
    - 常用操作命令：
        - 将一个或多个field-value对设置到哈希表中：
            - 普通情况下：`hset key filed1 value1 [field2 value2 ....] `
	            - 如果key field已经存在，会覆盖旧value值
            - 批量设置：`hmset key filed1 value1 [field2 value2 ....]`
            - 当key-field已经存在时放弃设置，否则就设置file-value：`hsetnx key field value`
        - 获取指定哈希表中的field的值：
            - 批量获取：`hmget key field1 [field2 field3 ....]`
            - 获取表中所有field-value：`hgetall key`
        - 从指定哈希表中删除一个或者多个field：`hdel key field1 [field2 field3 ....]`
        - 获取指定哈希表中所有field的个数：`hlen key`
        - 判断指定哈希表中是否存在某一个field：`hexists key field`
        - 获取指定哈希表中：
            - 所有的field列表：`hkeys key`
            - 所有的value列表：`hvals key`
        - 对指定哈希表中指定field值进行**整数加法**运算：`hincrby key field int`
        - 对指定哈希表中指定field值进行**浮点数加法**运算：`hincrbyfloat key field float`
5. 有序集合类型zset（sorted set）：`单key:多有序value`
    - 如：`city:1200 chongqing, 1500 shanghai, 2000 beijing`等
    - 不允许重复的成员
    - 与list不同的是，zset中的每个元素会关联一个可重复score，redis通过score来为集合中的成员进行升序排序
    - 常用操作命令：
        - 将一个或多个member及其score值加入有序集合：`zadd key score member [score member ....]`
	        - 如果元素已经存在，则覆盖旧score
	    - 获取指定有序集合中指定区间（闭区间）的元素：（ `withscores` 会显示元素的score值）
            - 下标区间：`zrange/zrevrange key startIndex endIndex [withscores]`
            - 分数区间：`zrangebyscore/zrevrangebyscore key min max [withscores]`
        - 删除指定有序集合中一个或多个元素：`zrem key member [member......]`
        - 获取指定有序集合中所有元素的个数：`zcard key`
        - 获取指定有序集合中分数在指定区间内的元素的个数：`zcount key min max`
        - 获取指定有序集合中指定元素的排名（分数升序/降序reverse）：`zrank/zrevrank key member`
        - 获取指定有序集合中指定元素的分数：`zscore key member`

---

## 3 进阶知识
### 3.1 配置文件
0. 如果不使用配置文件，则redis会按照默认的参数运行；如果使用配置文件，则在启动redis服务时必须指定所使用的配置文件
1. 网络配置：如果配置过，则在客户端需要连接redis服务的任何命令处，都必须指定端口和ip
    - `port`：指定redis服务所使用的端口，默认使用**6379**
    - `bind`：配置客户端连接redis服务时所能使用的ip地址，默认为**127.0.0.1**，可以使用redis服务所在主机上任何一个ip
    - `tcp-keepalive`：连接保活策略
2. 常规配置：
    - `loglevel`：日志级别，开发为`DEBUG`，生产为`NOTICE/WARNING`
	- `logfile`：指定日志信息输出到的日志文件，默认输出到控制台
    - `databases`：配置redis服务默认创建的数据库实例个数，默认为**16**
3. 安全配置：
    - `requirepass`：设置访问redis服务时使用的密码，默认无密码
        1. 此参数必须在`protected-mode=yes`时才起作用
        2. 设置该参数后，客户端连接redis服务时，必须使用密码连接：`redis-cli -h ip -p port -a pwd`

### 3.2 持久化策略
0. 概念：在适当的时机，采用适当手段把内存中的数据持久化到磁盘中。每次redis服务启动后，都可以把磁盘上的数据再次加载到内存中去使用
1. RDB（Redis DataBase）策略：【默认**开启**】在指定时间间隔内，redis服务执行指定次数的写操作，会自动触发一次持久化操作
    - `save <seconds> <changes>`：指定时间间隔和指定次数
    - `dbfilename`：配置redis RDB持久化数据存储的文件，默认命名为`dump.rdb`
    - `dir`：配置redis RDB持久化文件所在目录
2. AOF（Append Only File）策略：【默认**不开启**】采用操作日志来记录进行每一次写操作，每次redis服务启动时，都会重新执行一遍操作日志中的指令
    - `appendonly`：配置是否开启AOF策略
    - `appendfilename`：配置操作日志文件

### 3.3 事务
0. 概念：
    - 一般情况：把一组数据库命令放在一起执行，保证操作原子性，要么同时成功，要么同时失败
    - redis：把一组redis命令放在一起，把命令进行序列化，然后一起执行，保证部分原子性
1. `multi`：用来标记一个redis事务的开始
2. `exec`：用来执行事务队列中的所有命令 &rarr; 只能保证部分原子性
    - 如果在**压入**事务队列过程中发生错误的命令，则本事务队列中的所有命令都不执行 &rarr; 保证操作原子性
    - 如果在**执行**事务队列中的命令时发生了错误，则只会影响到产生错误的命令（即不执行），不会影响其它命令 &rarr; 无法保证操作原子性
3. `discard`：清除事务队列中的所有命令，并结束整个事务
4. `watch`：监控某一个键。当事务在执行过程中，若此键代码的值发生变化，则本事务放弃执行；否则，正常执行
5. `unwatch`：放弃监控所有的键

### 3.4 消息的发布与订阅
0. 定义：客户端订阅频道，消息的发布者往频道上发布消息，所有订阅此频道的客户端都能接受到消息
1. `subscribe channel`：订阅一个或者多个频道的消息
2. `publish channel message`：将消息发布到指定频道
3. `psubscribe pattern`：订阅一个或者多个频道的消息，且频道名支持通配符

### 3.5 主从复制（以一主二从为例）
0. 一台主机配置多台从机，一台从机又可以配置多台从机，从而形成一个庞大的Redis集群架构 &rarr; 可减轻一台主机的压力，但会增加服务间的延迟时间
1. 查看主从角色`info replication`：默认情况下，所有redis服务都是主机
2. 设置主从关系`slaveof ip port`：遵循**设从不设主**的原则
3. 读写关系：
    1. 全量复制：一旦主从关系确定，就会自动把主库上已有的数据同步复制到从库上去
    2. 增量复制：主库写的数据会自动同步到从库
    3. 主写从读，读写分离
4. 宕机情况：
    1. 主机宕机，从机原地待命；主机恢复，一切恢复正常
    2. 从机宕机，主机少一个从机，其它从机不变；从机恢复，需要重新设置主从关系
5. 从机上位：
    1. 主机宕机，从机原地待命
    2. 从机断开原来主从关系：`slaveof no one`
    3. 重新设置主从关系
    4. 之前的主机恢复，主机游离在集群之外
    5. 主机如果要加入到集群之中，则可做主机也可做从机
6. **哨兵模式**：主机宕机的情况下，从机自动上位
    1. 提供哨兵配置文件：自行创建`redis_sentinel.conf`，内容为`sentinel monitor dc-redis ip port poll`
    2. 启动哨兵服务：`redis-sentinel redis_sentinel.conf`
    3. 主机宕机：哨兵程序会自动投票选择从机上位
    4. 旧主机恢复，哨兵模式下自动从属于新主机

### 3.6 Jedis
- 允许在java中操作Redis，且Jedis几乎涵盖了Redis的所有命令，以同名方法的形式出现