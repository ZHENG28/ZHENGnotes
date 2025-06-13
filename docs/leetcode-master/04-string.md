# 4. 字符串

## 1 反转字符串

> [【LC344】](https://leetcode.cn/problems/reverse-string/description/)编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

1. 采用双指针解法，交换指针所指元素，并向中间移动指针
2. <mark>注意</mark>：
    - 如果题目关键的部分直接用库函数就可以解决，建议 **不要使用库函数**
    - 如果库函数仅仅是解题过程中的一小部分，并且你已经很清楚这个库函数的内部实现原理的话，可以考虑 **使用库函数**

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

> [【LC】]()

---

## 4 翻转字符串里的单词

> [【LC】]()

---

## 5 右旋转字符串

> [【LC】]()

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
2. **<font color="red">KMP</font>**：

---

## 7 重复的子字符串

> [【LC】]()

---

## 8 总结篇