# 1 数组理论基础
1. 存储方式：下标从0开始，在内存空间中的地址是连续的
2. 增删元素：需要移动大量的元素（时间复杂度）；删除的本质上是覆盖
3. 多维数组是否是连续存储在内存中？c++中，Yes；Java中，No（类似索引表指向每一维数组存储的地址）

---

# 2 二分查找

> 【LC704】给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target ，如果目标值存在返回下标，否则返回-1。  
- 你可以假设 nums 中的所有元素是不重复的  
- n 将在 [1, 10000] 之间  
- nums 的每个元素都将在 [-9999, 9999] 之间

1. **<font color="red">有序数组 & 无重复元素 -> 使用二分法</font>**
2. 二分法应当遵循**循环不变量规则**，即在while循环时每一次边界的处理都要坚持根据区间的定义来操作 -> 区间的定义
    1. 左闭右闭[left, right]：
        ``` c++
            // 右闭 -> left == right 有意义
            while (left <= right)
            ...
            // 防止两者相加的结果溢出；结果等同于(left + right) / 2
            int middle = left + ((right - left) / 2);
            if (nums[middle] > target) right = middle - 1;
        ```
    2. 左闭右开[left, right)：
        ``` c++
            // 右开 -> left == right 没有意义
            while (left < right)
            ...
            if (nums[middle] > target) right = middle;
        ```

3. 相关题目：LC 35、34、69（隐藏数组）、367

> 补充：【LC34】给你一个按照非递减顺序排列的整数数组 nums ，和一个目标值 target 。请你找出给定目标值在数组中的开始位置和结束位置。如果数组中不存在目标值 target ，返回[-1, -1]。

1. 存在三种情况：
    1. target在数组范围外 -> [-1, -1]
    2. target在数组范围中，但数组中不存在target -> [-1, -1]
    3. target在数组范围中，且数组中存在target -> [left, right]
2. 拆分成寻找目标数组的左、右区间：（初学者最好一块一块的解决！）
    ``` c++
        class Solution {
        public:
            vector<int> searchRange(vector<int>& nums, int target) {
                int leftBorder = getLeftBorder(nums, target);
                int rightBorder = getRightBorder(nums, target);
                // 情况一：target在数组范围外
                if (leftBorder == -2 || rightBorder == -2) return {-1, -1};
                // 情况三：target在数组范围中，且数组中存在target
                if (rightBorder - leftBorder > 1)
                    return {leftBorder + 1, rightBorder - 1};
                // 情况二：target在数组范围中，但数组中不存在target
                return {-1, -1};
            }

        private:
            int getRightBorder(vector<int>& nums, int target) {
                int left = 0, right = nums.size() - 1;
                // right能达到-1，因此要设置-2表示未赋值
                int rightBorder = -2;
                while (left <= right) {
                    int middle = left + ((right - left) / 2);
                    if (nums[middle] > target) {
                        right = middle - 1;
                    } else {
                        // nums[middle] == target的情况也要包含，要使left划到相同目标值的最右边，即右边界
                        left = middle + 1;
                        rightBorder = left;
                    }
                }
                return rightBorder;
            }
            int getLeftBorder(vector<int>& nums, int target) {
                int left = 0, right = nums.size() - 1;
                int leftBorder = -2;
                while (left <= right) {
                    int middle = left + ((right - left) / 2);
                    if (nums[middle] < target) {
                        left = middle + 1;
                    } else {
                        right = middle - 1;
                        leftBorder = right;
                    }
                }
                return leftBorder;
            }
        };
    ```

---

# 3 移除元素

> 【LC27】给你一个数组 nums 和一个值 val ，你需要原地移除所有数值等于 val 的元素，并返回移除后数组的新长度。不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

1. 自想解法：两层for循环，外层循环数组，内层覆盖应删除元素 -> 暴力解法
2. **<font color="red">双指针/快慢指针法</font>**：【适用于数组、链表、字符串等】通过双指针，在一个for循环下完成两个for循环的方法。
    1. 快指针：快速寻找要纳入新数组的元素
    2. 慢指针：指向更新后的新数组的位置
    ``` c++
        class Solution {
        public:
            int removeElement(vector<int>& nums, int val) {
                int slowIndex = 0;
                for (int fastIndex = 0; fastIndex < nums.size(); fastIndex++) {
                    if (val != nums[fastIndex]) {
                        nums[slowIndex++] = nums[fastIndex];
                    }
                }
                // 每次循环，如有元素纳入数组中，slowIndex才++ -> 直接返回slowIndex
                return slowIndex;
            }
        };
    ```
3. 相关题目：LC 26、283、844、977（下）

---

# 4 有序数组的平方

> 【LC977】给你一个按非递减顺序排序的整数数组 nums ，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

1. 自想解法：数组内元素全部平方，然后排序 -> 暴力解法
2. 双指针法：仔细观察数组，负数平方后降序，正数平方后升序，因此可以用归并排序。
    ``` c++
        class Solution {
        public:
            vector<int> sortedSquares(vector<int>& nums) {
                vector<int> ret(nums.size(), 0);
                int i = 0, j = nums.size() - 1, k = nums.size() - 1;
                while (i <= j) {
                    // 数组元素平方的最大值一定在左右边界
                    if (nums[i] * nums[i] > nums[j] * nums[j]) {
                        ret[k--] = nums[i] * nums[i];
                        i++;
                    } else {
                        ret[k--] = nums[j] * nums[j];
                        j--;
                    }
                }
                return ret;
            }
        };
    ```

---

# 5 长度最小的子数组

> 【LC209】给定一个含有 n 个正整数的数组和一个正整数 target 。找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

1. 自想解法：两个for循环嵌套，外层寻找数组的起始位置，内层寻找数组的终止位置 -> 暴力解法
2. **<font color="red">滑动窗口</font>**：只用一层for循环，不断调节子序列的起始位置和终止位置，从而得到结果
    1. 起始位置的调整：如果窗口内的值满足条件，则向前移动指针
    2. 结束位置的调整：遍历的指针
    ``` c++
    class Solution {
    public:
        int minSubArrayLen(int target, vector<int>& nums) {
            // INT32_MAX：库常数
            int result = INT32_MAX;
            int left = 0, sum = 0, subLength = 0;
            for (int right = 0; j < nums.size(); j++) {
                sum += nums[j];
                // 这里应该使用while而不是if，每次需要将窗口缩小到正好不满足题目条件为止
                while (sum >= target) {
                    subLength = right - left + 1;
                    result = result < subLength ? result : subLength;
                    sum -= nums[left++];
                }
            }
            // 注意为0的条件
            return result == INT32_MAX ? 0 : result;
        }
    };
    ```
3. 相关题目：LC 904、76（209 -> 904 -> 76：滑动窗口、哈希表unordered_map）

---

# 6 螺旋矩阵II

> 【LC59】给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

1. 不涉及到算法，纯模拟过程
2. 模拟顺时针画矩阵：上行从左到右、右列从上到下、下行从右到左、左列从下到上
3. 要坚持**循环不变量规则**，保持一致的左闭右开、左开右闭的原则
    ``` c++
        class Solution {
        public:
            vector<vector<int>> generateMatrix(int n) {
                vector<vector<int>> matrix(n, vector<int>(n, 0));
                // 每一圈的起始坐标
                int startX = 0, startY = 0;
                // 圈数
                int loop = n / 2;
                // 边界长度，每循环一圈就缩减1
                int margin = 1;
                int count = 1;
                int i = 0, j = 0;
                while (loop--) {
                    // 上行：从左到右
                    for (j = startY; j < n - margin; j++) {
                        matrix[startX][j] = count++;
                    }
                    // 右列：从上到下
                    for (i = startX; i < n - margin; i++) {
                        matrix[i][j] = count++;
                    }
                    // 下行：从右到左
                    for (; j > startY; j--) {
                        matrix[i][j] = count++;
                    }
                    // 左列：从下到上
                    for (; i > startX; i--) {
                        matrix[i][startY] = count++;
                    }
                    startX++;
                    startY++;
                    margin++;
                }
                // 奇数判断：如果是，就给最中心的元素赋值
                if (n % 2) {
                    matrix[n / 2][n / 2] = n * n;
                }
                return matrix;
            }
        };
    ```
4. 相关题目：LC 54、29

---

# 7 总结篇
1. 理论基础：`见 1.数组理论基础`
2. 经典题目：二分、双指针、滑动窗口、模拟行为
3. ![array_summary](./img/1.array/summary.png)