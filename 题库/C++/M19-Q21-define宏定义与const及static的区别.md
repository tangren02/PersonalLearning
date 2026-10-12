---
title: define宏定义与const及static的区别
tags: [flashcards, cpp]
source_id: M19
source_questions: [21]
source_pages: [19,20]
knowledge: 面经19-08-宏常量与static
status: 待用户验收
---

define 宏定义、const 与 static 在类型检查、作用范围、存储方式、调试支持和用途上有什么区别？
?
| 比较项 | define 宏定义 | const | static |
| --- | --- | --- | --- |
| 类型检查 | 不进行类型检查 | 进行类型检查 | 进行类型检查 |
| 作用范围 | 全局 | 作用域内有效 | 作用域内有效 |
| 存储方式 | 编译时替换文本 | 编译时常量 | 静态存储，生命周期贯穿整个程序 |
| 调试支持 | 调试困难，无法设置断点 | 可以设置断点 | 可以设置断点 |
| 用途 | 简单常量或复杂表达式 | 常量或只读数据 | 静态变量或静态成员变量 |
define 通过预处理器进行文本替换，缺乏类型检查；const 定义常量，类型检查提高安全性；static 定义静态变量或成员，具有文件内或函数内的局部作用域，在程序生命周期内保持值的持久性。
辅助片段：保留常量声明和静态计数；每次调用 incrementCounter，localCounter 与 counter 都递增并保留其值。
```cpp
#define PI 3.14159
const int MAX_SIZE = 100;
static int counter = 0;
void incrementCounter() {
    static int localCounter = 0;
    ++localCounter;
    ++counter;
}
```
<!--SR:!2026-10-12,0,230-->

来源：[[基础面经19_上.pdf#page=19]] · 原题 Q21 · PDF 第19、20页；知识：[[面经19-08-宏常量与static]]。
