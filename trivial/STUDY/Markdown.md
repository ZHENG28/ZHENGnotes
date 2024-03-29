# 1 基础语法
## 1.1 标题
1. 几个#表示几级标题
2. 插件`anchor-navigation-ex`会给##自动加上1.1.

## 1.2 换行
1. 行尾加2个空格 + 回车 = 换行
    1. 一个空格：  
        `&nbsp;`：No-Break Space，按下space键产生的空格
    2. 两个空格：  
        `&ensp;`：En Space，em的一半
    3. 四个空格：  
        `&emsp;`：Em Space，一个中文字的宽度

## 1.3 强调
1. *斜体效果*：`*斜体1* 或 _斜体2_`
2. **加粗效果**：`**加粗1** 或 __加粗2__`
3. ~~删除线效果~~：`~~删除线~~`

## 1.4 列表
1. 无序列表：`-` 或 `*`
2. 有序列表：`1. `
3. 任务列表：`- [ ]` 与 `- [x]`
    - [ ] 第一个todo
    - [ ] 第二个todo
    - [x] 第三个todo

> [!DANGER]
> 插件安装失败，TODO勾选框无法正常显示

## 1.5 链接
- [Github](http://github.com)
- [Go to Baidu](https://www.baidu.com)

## 1.6 引用
1. 几个`>`表示几个引用嵌套
2. 要跳出引用，只需打一个空行即可
    > 这是第一行
        >> 这是第二行  
        这是第三行

    这是在外面

## 1.7 分割线
1. `---`
2. `***`
3. `___`

## 1.8 代码块
1. 行内代码：\`  
    `function add(x, y) { return x + y; }`
2. 块代码：\`\`\`
    ``` java
    function add(x, y) {
        return x + y;
    }
    ```

## 1.9 表格
- 代码：
```
    | a | b | c |
    | :--: | :--: | :--: |
    | 1 | 2 | 3 |
    | 4 | 5 | 6 |
```
- 效果：

| a | b | c |
| :--: | :--: | :--: |
| 1 | 2 | 3 |
| 4 | 5 | 6 |

---

# 2 数学
## 2.1 公式
- 类似于Latex
- 行内显示：$$ f(x)=x+12 $$
- 块显示：
    $$
    \sum_{n=1}^{100} n
    $$
- [常用符号](https://blog.csdn.net/u013914471/article/details/82973812)

---

# 3 文件导入
## 3.1 支持的格式
- 图片：`.jpg` `.gif` `.png` `.svg` `.bmp`
- 表格：`.csv`
- 网页：`.html`
- 文件：`.pdf`
- 代码：`@import "file_name" {formatter}`

---

# 4 图表
## 4.1 流程图
```mermaid
graph TD
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```

## 4.2 支持的其他语言和图
- sequence diagrams
- mermaid
- PlantUML
- WaveDrom
- GraphViz
- Vega & Vega-lite
- Ditaa

---

# 5 字体样式（以HTML的方式定义）
## 5.1 颜色
in: `<font color=blue>Blue</font>`  
out: <font color=blue>Blue</font>
> [!TIP]
> 可以使用颜色的单词或者Hex格式来定义颜色

## 5.2 字体
in: `<font face="Times New Roman">This is Times New Roman</font>`  
out: <font face="Times New Roman">This is Times New Roman</font>

---

# 6 幻灯片的制作
To see [my first slide](res/toHelloSlide.md)