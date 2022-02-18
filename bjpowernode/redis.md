## 数据库的发展历程
- 单机数据库时代
- Memcached时代
- 读写分离时代
- 分表分库时代（集群）：关系型数据库，如Oracle、MySql、DB2、SqlServer等
- NoSQL时代：非关系型数据库（彻底改变底层存储机制，采用聚合数据结构存储数据），如Redis、mongoDB、HBase等

# NoSQL数据库
- Not Only SQL，泛指non-relational（非关系型数据库），去掉了关系数据库的关系型特性->**数据之间一旦没有关系，使得扩展性、读写性都大大提高**
- 为解决大规模数据集合**多重数据种类**带来的挑战，特别是**超大规模数据的存储**
- 数据库模型：
    - **聚合模型**：把一组相关联的数据作为一个整体进行存储和管理
    - BSON：数据保存到键值对中，数据之间用逗号隔开，{}表示对象，[]表示数组
    ``` json
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

# Redis
### 简介
- 远程字典服务器Remote Dictionary Server，是一个用C语言编写的、开源的、基于内存运行并支持持久化的、高性能的**NoSQL数据库**
- Redis中的数据大部分时间都是存储在内存中，适合存储频繁访问、数据量比较小的数据
- 启动服务：
    - 前台启动：`redis-server`
    - 后台启动： `redis-server &`
    - 启动redis服务时，指定配置文件：`redis-server redis.conf &`
- 关闭服务：
    - 查看redis的pid，再`kill -9 pid`
    - `redis-cli shutdown`

### 特点
1. 支持数据持久化：Redis可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用
2. 支持多种数据结构：不仅支持简单的key-value类型的数据，同时还提供list，set，zset，hash等数据结构的存储
3. 支持数据备份：master-slave模式的数据备份

### 客户端
- Redis客户端是一个程序，通过网络连接到Redis服务器。可发送命令，同时会显示Redis服务器的处理结果
- `redis-cli`（Redis Command Line Interface），Redis自带的、基于命令行的**Redis客户端**，用于与Redis服务端交互
    - 启动客户端：（windows系统中需要开两个dos窗口，一个用作redis服务，一个用作redis客户端）
        - `redis-cli`：直接连接默认IP127.0.0.1，端口6379的Redis
        - `redis-cli -h 指定IP -p 端口号`：连接指定IP与端口的Redis
    - 退出客户端：
        - `exit`
        - `quit`
- 基础知识：
    - 测试redis服务的性能：`redis-benchmark`
    - 查看redis服务是否正常运行：`ping`，如果正常则返回`PONG`
    - 查看redis服务器的统计信息：
        - 查看所有统计信息：`info`
        - 查看指定统计信息：`info section`
    - redis的数据库实例：
        - 作用类似于mysql的数据库实例，但redis中的数据库实例只能由redis服务来创建和维护，开发人员不能修改和自行创建数据库实例
        - 默认自动创建16个数据库实例，可以通过配置文件指定redis自动创建的数据库个数
        - 启动客户端时，默认连接0号数据库实例
        - 部分常用命令：
            - 切换数据库实例：`select index`
            - 查看当前数据库实例中所有key的数量：`dbsize`
            - 查看当前数据库实例中所有的key：`keys *   `
            - 清空数据库实例：`flushdb`
            - 清空所有的数据库实例：`flushall`
    - 查看redis中的配置信息：
        - 查看所有配置信息：`config get *`
        - 查看指定配置信息：`config get parameter`

### 5种数据结构及其操作命令
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
    - 查看指定key的剩余生存时间ttl（time to live）：`ttl key`
        - 如果key没有设置生存时间，则返回-1
        - 如果key不存在，则返回-2
    - 设置key的最大生存时间：`expire key seconds`
        - 设置成功则返回1，其他返回0
    - 查看指定key的数据类型：`type key`
        - 如果key不存在，则返回none
        - 如果key存在，则返回key的数据类型
    - 重命名key：`rename key newkey`
        - 如果修改成功，则返回OK
        - 如果key不存在，则返回`(error) ERR no such key`
        - 如果newkey已存在，返回OK且覆盖旧value
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
        - 对字符串数值运算：
            - 返回运算后的数据
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
            - count > 0：从列表的左侧移除count个跟value相等的数据
            - count < 0：从列表的右侧移除count个跟vlaue相等的数据
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
            - count > 0：随机获取的多个元素之间不能重复
            - count < 0: 随机获取的多个元素之间可能重复
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
	    - 获取指定有序集合中指定区间（闭区间）的元素：（`withscores`会显示元素的score值）
            - 下标区间：`zrange/zrevrange key startIndex endIndex [withscores]`
            - 分数区间：`zrangebyscore/zrevrangebyscore key min max [withscores]`
        - 删除指定有序集合中一个或多个元素：`zrem key member [member......]`
        - 获取指定有序集合中所有元素的个数：`zcard key`
        - 获取指定有序集合中分数在指定区间内的元素的个数：`zcount key min max`
        - 获取指定有序集合中指定元素的排名（分数升序/降序reverse）：`zrank/zrevrank key member`
        - 获取指定有序集合中指定元素的分数：`zscore key member`

