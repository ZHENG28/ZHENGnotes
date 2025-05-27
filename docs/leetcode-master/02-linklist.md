# 2. 链表

## 1 链表理论基础
1. 通过指针串在一起的线性结构，`节点node = 数据域data + 指针域next`，头节点为head
2. 类型：
    1. 单链表：指针只能指向下一个节点
        ![singlylinklist-structure](./img/2.linklist/singlylinklist.png)
    2. 双链表：指针可以指向前一个节点，也能指向后一个节点（既可向前查询，又可向后查询）
        ![doublylinklist-structure](./img/2.linklist/doublylinklist.png)
    3. 循环链表：链表首尾相连（可解决**约瑟夫环**问题）
        ![circularlinklist-structure](./img/2.linklist/circularlinklist.png)
3. 存储方式：散乱分布，只由指针链接（如何分配取决于内存管理）
4. 定义：
    ```cpp showLineNumbers
    struct ListNode { // 单链表
        int value;
        ListNode *next;
        ListNode(int x) : value(x), next(NULL) {} // 构造函数
    };
    ```
5. 操作：
    1. 删除节点：将前一个节点的next指针指向后一个节点（c++中需要手动释放删除节点的内存；java中有自己的内存回收机制，因此不需要手动）
        ![delete-node](./img/2.linklist/delete_node.png)
    2. 添加节点：修改节点指针域
        ![add-node](./img/2.linklist/add_node.png)

---

## 2 移除链表元素

> [【LC203】](https://leetcode.cn/problems/binary-search/description/)给你一个链表的头节点 head 和一个整数 val，请你删除链表中所有满足 Node.val == val 的节点，并返回新的头节点。

1. 删除头节点要分情况讨论：
    1. 直接在原来的链表上操作：需要区分头节点和其他节点的处理方式
    ```cpp showLineNumbers
    /**
        * Definition for singly-linked list.
    * struct ListNode {
    *     int val;
    *     ListNode *next;
    *     ListNode() : val(0), next(nullptr) {}
    *     ListNode(int x) : val(x), next(nullptr) {}
    *     ListNode(int x, ListNode *next) : val(x), next(next) {}
    * };
    */
    class Solution {
    public:
        ListNode* removeElements(ListNode* head, int val) {
            // 这里不是if，而是while，因为要删除满足条件的所有头节点
            while (head != NULL && head->val == val) {
                // 删除多余节点，手动释放内存
                ListNode* tmp = head;
                head = head->next;
                delete tmp;
            }

            ListNode* cur = head;
            while (cur != NULL && cur->next != NULL) {
                if (cur->next->val == val) {
                    ListNode* tmp = cur->next;
                    cur->next = (cur->next)->next;
                    delete tmp;
                } else {
                    cur = cur->next;
                }
            }
            return head;
        }
    };
    ```
    2. 设置一个虚拟头节点进行删除操作：统一处理
2. 删除节点后，最好释放内存，否则容易内存溢出

---

## 3 设计链表

> [【LC707】](https://leetcode.cn/problems/design-linked-list/description/)你可以选择使用单链表或者双链表，设计并实现自己的链表。单链表中的节点应该具备两个属性：val 和 next 。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果是双向链表，则还需要属性 prev 以指示链表中的上一个节点。假设链表中的所有节点下标从 0 开始。实现 MyLinkedList 类：
> - MyLinkedList() 初始化 MyLinkedList 对象。
> - int get(int index) 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 。
> - void addAtHead(int val) 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
> - void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
> - void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
> - void deleteAtIndex(int index) 如果下标有效，则删除链表中下标为 index 的节点。

1. 声明定义：需要声明私有变量
```cpp showLineNumbers
class MyLinkedList {
public:
    // 定义链表节点结构体
    struct LinkedNode {
        int val;
        LinkedNode* next;
        LinkedNode(int val) : val(val), next(nullptr) {}
    };

    // 初始化链表
    MyLinkedList() {
        // 定义虚拟头节点（不是真正的头节点）
        _dummyHead = new LinkedNode(0);
        _size = 0;
    }

private:
    int _size;
    LinkedNode* _dummyHead;
};
```

---

## 4 翻转链表

> [【LC206】](https://leetcode.cn/problems/reverse-linked-list/description/)给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

1. 改变链表节点的next指针指向，将链表翻转，而不用重新定义一个新的链表，浪费内存空间
    ![reverse](./img/2.linklist/4.1.reverse.gif)
```cpp showLineNumbers
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* cur = head;
        ListNode* prev = nullptr;
        while (cur) {
            // 用于保存下一个节点
            ListNode* tmp = cur->next;
            // 翻转
            cur->next = prev;
            // 更新指针
            prev = cur;
            cur = tmp;
        }
        return prev;
    }
};
```

---

## 5 两两交换链表中的节点

> 【LC206】给你一个链表的头节点 head 和一个整数 val，请你删除链表中所有满足 Node.val == val 的节点，并返回新的头节点。

1. 

---

## 6 删除链表的倒数第N个节点

> 【LC206】给你一个链表的头节点 head 和一个整数 val，请你删除链表中所有满足 Node.val == val 的节点，并返回新的头节点。

1. 

---

## 7 链表相交

> 【LC206】给你一个链表的头节点 head 和一个整数 val，请你删除链表中所有满足 Node.val == val 的节点，并返回新的头节点。

1. 

---

## 8 环形链表II

> 【LC206】给你一个链表的头节点 head 和一个整数 val，请你删除链表中所有满足 Node.val == val 的节点，并返回新的头节点。

1. 

---

## 9 总结篇
1. 理论基础：见 `1 链表理论基础`
2. 