# 4. 字符串

## 1 反转字符串

> [【LC344】](https://leetcode.cn/problems/reverse-string/description/)编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

1. 采用双指针解法，交换指针所指元素，并向中间移动指针

:::danger[要不要使用库函数？]
- 如果题目关键的部分直接用库函数就可以解决，建议 **不要使用库函数**
- 如果库函数仅仅是解题过程中的一小部分，并且你已经很清楚这个库函数的内部实现原理的话，可以考虑 **使用库函数**
:::

---

## 2 反转字符串II

> [【LC541】](https://leetcode.cn/problems/reverse-string-ii/description/)给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
> - 如果剩余字符少于 k 个，则将剩余字符全部反转。
> - 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

1. 自想解法：i为反转区间右区间，每次移动 `2 * k`；但逻辑不严谨，部分情况未考虑到
2. 思路相同，但i设置为反转区间左区间，不用考虑右区间溢出数组长度的问题，简化逻辑
```cpp showLineNumbers
class Solution {
public:
    string reverseStr(string s, int k) {
        for (int i = 0; i < s.size(); i += 2 * k) {
            // 考虑剩余字符少于k个的情况
            int end = (i + k) < s.size() ? (i + k) : s.size();
            reverse(s.begin() + i, s.begin() + end);
        }
        return s;
    }
};
```

---

## 3 替换数字

> [【LC】]

---

## 4 翻转字符串里的单词

> [【LC151】](https://leetcode.cn/problems/reverse-words-in-a-string/description/)给你一个字符串 s ，请你反转字符串中 单词 的顺序。单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。  
> 注意：输入字符串 s 中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

1. 自想解法：用库函数split分割单词，然后将单词数组倒序相连
2. 要求：空间复杂度为 `O(1)`
    ```cpp showLineNumbers
    class Solution {
    public:
        string reverseWords(string s) {
            // 1. 移除多余空格
            removeSpaces(s);

            // 2. 将整个字符串翻转
            reverse(s.begin(), s.end());

            // 3. 将字符串中的每个单词翻转
            int begin = 0;
            for (int end = 0; end <= s.size(); end++) {
                if (end == s.size() || ' ' == s[end]) {
                    reverse(s.begin() + begin, s.begin() + end);
                    begin = end + 1;
                }
            }

            return s;
        }

    private:
        void removeSpaces(string& s) {
            // 采用双指针法去除多余空格
            int slow = 0;
            for (int fast = 0; fast < s.size(); fast++) {
                // 删除字符串中的所有空格
                if (' ' != s[fast]) {
                    // 在每个单词开头加上空格
                    if (0 != slow) {
                        s[slow++] = ' ';
                    }
                    // 补全单词
                    while (fast < s.size() && ' ' != s[fast]) {
                        s[slow++] = s[fast++];
                    }
                }
            }
            // 重新设置字符串长度
            s.resize(slow);
        }
    };
    ```

---

## 5 右旋转字符串

> [【LC】]

---

## 6 实现strStr()

> [【LC28】](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回 -1 。

1. 自想解法：遍历 `haystack` 字符串，按 `needle` 字符串的长度去匹配是否存在 `needle` 字符串
```cpp showLineNumbers
class Solution {
public:
    int strStr(string haystack, string needle) {
        for (int i = 0; i < haystack.size(); i++) {
            if (i + needle.size() > haystack.size()) {
                return -1;
            }
            if (haystack.substr(i, needle.size()) == needle) {
                return i;
            }
        }
        return -1;
    }
};
```
2. **<font color="red">KMP</font>**：当出现字符串不匹配时，可以 **记录之前已匹配的那部分文本** &rarr; 避免从头去做匹配
3. **<font color="red">前缀表（prefix table）</font>**：用来记录当模式串与主串不匹配时，模式串应该回退到哪个位置开始重新匹配
    - 记录下标i之前（包括i）的字符串中 **相同前后缀的长度**
        - **前缀**：不包含最后一个字符的所有 <mark>以第一个字符开头</mark> 的连续子串
        - **后缀**：不包含第一个字符的所有 <mark>以最后一个字符结尾</mark> 的连续子串
    - 计算过程：![prefix-table](./img/4.string/6.1.prefix_table.png)
        1. 以下标0为结尾的子串 `a`：长度为0
            - 前缀子串：不存在
            - 后缀子串：不存在
        2. 以下标1为结尾的子串 `aa`：长度为1
            - 前缀子串：<mark>`a`</mark>
            - 后缀子串：<mark>`a`</mark>
        3. 以下标2为结尾的子串 `aab`：长度为0
            - 前缀子串：`a`、`aa`
            - 后缀子串：`b`、`ab`
        4. 以下标3为结尾的子串 `aaba`：长度为1
            - 前缀子串：<mark>`a`</mark>、`aa`、`aab`
            - 后缀子串：<mark>`a`</mark>、`ba`、`aba`
        5. 以下标4为结尾的子串 `aabaa`：长度为2
            - 前缀子串：`a`、<mark>`aa`</mark>、`aab`、`aaba`
            - 后缀子串：`a`、<mark>`aa`</mark>、`baa`、`abaa`
        6. 以下标5为结尾的子串 `aabaaf`：长度为0
            - 前缀子串：`a`、`aa`、`aab`、`aaba`、`aabaa`
            - 后缀子串：`f`、`af`、`aaf`、`baaf`、`abaaf`
    - 若匹配失败的位置是后缀子串的后面，那么从与其相同的前缀子串的后面重新匹配即可
        ![prefix-table-match](./img/4.string/6.2.prefix_table_match.gif)
        - 从匹配失败的位置开始，找往前一位字符所记录的长度length &rarr; 将下标移动到length的位置，继续匹配

---

## 7 重复的子字符串

> [【LC】]

---

## 8 总结篇
1. 理论基础：字符串是若干字符组成的有限序列，或者说是一个字符数组
    1. c：用结束符 `'\0'` 来判断字符串是否结束
    2. c++：用string类的 `size` 接口来判断字符串是否结束
2. 经典题目：双指针法、翻转系列、KMP（匹配和重复子串问题）