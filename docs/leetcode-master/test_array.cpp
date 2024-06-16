#include <stdio.h>

#include <iostream>
using namespace std;

void test_two_array_in_memory() {
    // c++：二维数组在内存中连续存放
    int array[2][3] = {{0, 1, 2}, {3, 4, 5}};
    cout << &array[0][0] << " " << &array[0][1] << " " << &array[0][2] << endl;
    cout << &array[1][0] << " " << &array[1][1] << " " << &array[1][2] << endl;
}

int main() { test_two_array_in_memory(); }
