---
sidebar_label: 10. RocketMQ
---

# RocketMQ

## 1 简介
### 1.1 消息队列MQ（Message Queue）
- MQ：面向消息的中间件
    - 组成：队列存储消息，生产者Producer生产消息，消费者Consumer消费消息
    - 特性：异步、削峰限流、解耦合
    - 类型：（吞吐量：单位时间内接收和处理消息的速度）
        |MQ类型|性能|功能|吞吐量|
        |:--:|:--:|:--:|:--:|
        |**ActiveMQ**|一般|单一|低|
        |**RabbitMQ**|好|丰富|一般|
        |**RocketMQ**|好|最丰富|高|
        |**kafka**|高（一般用于大数据领域）|单一|最大|
- 中间件：
    - 缓存中间件：redis、memcache
    - 数据库中间件：mycat、canal
    - 消息中间件：mq

### 1.2 RocketMQ结构
- 组成结构：
    - Producer：消息的发送者、生产者 &rarr; ProducerGroup：生产者组
    - Consumer：消息的接收者、消费者 &rarr; ConsumerGroup：消费者组（多个消费者组可同时消费同一个topic的消息）
    - NameServer：注册路由中心，管理Broker
    - Broker：暂存和传输消息的通道，含多个Topic
    - Topic：（虚拟结构）主题，分类消息，含多个Queue
    - Queue：（真实结构）队列，存放消息，含多个Message
- 流程：
    - Producer询问NameServer，NameServer分配一个Broker，Producer向该Broker发送消息
    - Consumer询问NameServer，NameServer会告知对应的Broker，Consumer向该Broker消费消息
    ```mermaid
    graph TB
    producer --> NameServer
    consumer --> NameServer
    broker --> NameServer
    producer --> broker
    consumer --> broker
    ```

---

## 2 实施