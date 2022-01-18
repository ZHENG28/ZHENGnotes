# Introduction


sdasdd`asda`czxcz

```mermaid
graph TD
    a-->b
```

```python
print("hello")

def show(num):
    return num
```

```flow
st=>start: 开始框
op=>operation: 处理框
cond=>condition: 判断框(是或否?)
sub1=>subroutine: 子流程
io=>inputoutput: 输入输出框
e=>end: 结束框
st(right)->op(right)->cond
cond(yes)->io(bottom)->e
cond(no)->sub1(right)->op
```

```sequence
Title: 标题：复杂使用
对象A->对象B: 对象B你好吗?（请求）
Note right of 对象B: 对象B的描述
Note left of 对象A: 对象A的描述(提示)
对象B-->对象A: 我很好(响应)
对象B->小三: 你好吗
小三-->>对象A: 对象B找我了
对象A->对象B: 你真的好吗？
Note over 小三,对象B: 我们是朋友
participant C
Note right of C: 没人陪我玩
```

```mermaid
gantt

section Section
Completed: done, des1, 2014-01-06, 2014-01-08
Active : active, des2, 2014-01-07, 3d
Parallel 1 : des3, after des1, 1d
Parallel 2 : des4, after des1, 1d
Parallel 3 : des5, after des3, 1d
Parallel 4 : des6, after des4, 1d
```

```mermaid
graph TB

开始爬取-->人民网

开始爬取-->光明网
开始爬取-->中工网
开始爬取-->人民政协网

```

```mermaid
graph TB

人民网-->政治
人民网-->社会
人民网-->教育
人民网-->经济
人民网-->健康
```

```mermaid
graph LR

String-->|encode|Bytes
Bytes--decode-->String

```