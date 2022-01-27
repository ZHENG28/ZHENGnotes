# 基础语法
## 标题
- 几个#表示几级标题
## 换行
- 回车不表示换行
- 可以在一行后面空格，再回车->换行
    - 一个空格：  
        `&nbsp;`：No-Break Space，按下space键产生的空格
    - 两个空格：  
        `&ensp;`：En Space，em的一半
    - 四个空格：  
        `&emsp;`：Em Space，一个中文字的宽度
## 强调
- *斜体1* 或 _斜体2_
- **加粗1** 或 __加粗2__
- ~~删除线~~
- ==重点==
## 列表
- 无序列表：`-` 或 `*`
- 有序列表：`1. `
- 任务列表：`- [ ]` 与 `- [x]`
    - [ ] 第一个todo
    - [ ] 第二个todo
    - [x] 第三个todo
## 链接
- [Github](http://github.com)
- [Go to Baidu](https://www.baidu.com)
## 引用
- 几个>表示几个引用嵌套
- 回车即换行
- 要跳出引用，只需打一个空行即可
    > 这是第一行
    这是第二行

    这是在外面
## 分割线
- `---`
- `***`
- `___`
## 代码块
- 行内代码：`
- 块代码：```
    ``` java {.line-numbers}
    function add(x, y) {
        return x + y;
    }
    ```
## 表格
- `^`：向上合并一个单元格
- ` `：向左合并一个单元格
- `>`：向右合并一个单元格
- 标题栏与表格数据之间必须要有`|---|`分隔
    |a|b|c|
    |---|---|---|
    |1|2|3|
    |4|5|6|
    |7|^|9|
    |>|11|12|
    |13||15|
## 图标
- Emoji：:smile: :fa-google:
- 上标：内容^上标^
- 下标：内容~下标~
- 脚注：内容[^脚注]
    [^脚注]: 我是脚注我是脚注
- 缩略
    *[缩略]: 我是缩略的地方地方地方

---

# 数学
## 公式
- 类似于Latex
- 行内显示：$f(x)=x+12$
- 块显示：
    $$
    \sum_{n=1}^{100} n
    $$

---

# 文件导入
## 支持的格式
- 图片：`.jpg` `.gif` `.png` `.svg` `.bmp`
- 表格：`.csv`
- `.html`
- `.pdf`
- 代码：`@import "file_name" {formatter}`

---

# 图表
## 流程图
```flow
st=>start: Start111:>http://www.google.com
e=>end:>http://www.google.com
op12=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes or No?:>http://www.google.com
io=>inputoutput: catch something

st->op12->cond
cond(yes)->io->e
cond(no)->sub1(right)->op12
```
- 总体代码分为两段：
    - 定义变量名
        - `变量名=>具体操作: 显示内容`
        - `:>url`：可跳转到相应网站
    - 具体流程
- 流程图符号：
    - 起止`start`或`end`：圆角矩形
    - 流程：箭头（具体流程中用`->`表示）
    - 输入输出`inputoutput`：平行四边形
    - 处理`operation`：矩形
    - 判断`condition`：菱形（具体流程中需要分情况写）
    - 预定义过程`subroutine`：矩形内多两条竖线
## 支持的其他语言
- sequence diagrams
- mermaid
- PlantUML
- WaveDrom
- GraphViz
- Vega & Vega-lite
- Ditaa

---

# 字体样式（以HTML的方式定义）
## 颜色
in: `<font color=blue>Blue</font>`
out: <font color=blue>Blue</font>
> 可以使用颜色的单词或者Hex格式来定义颜色
## 字体
in: `<font face="Times New Roman">This is Times New Roman</font>`
out: <font face="Times New Roman">This is Times New Roman</font>

---

# 幻灯片的制作
To see [my first slide](res/toHelloSlide.md)