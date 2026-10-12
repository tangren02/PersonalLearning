---
title: struct与union的区别
tags: [flashcards, cpp]
source_id: M19
source_questions: [3]
source_pages: [4,5]
knowledge: 面经19-02-对象布局与空类
status: 已验收
---

结构体 struct 和联合体 union 有什么区别？从内存分配、大小、数据存储、成员访问和使用场景进行比较。
?
| 比较项 | struct | union |
| --- | --- | --- |
| 内存分配 | 各成员占用各自的内存空间 | 所有成员共享同一块内存 |
| 大小 | 所有成员大小之和 | 最大成员的大小 |
| 数据存储 | 存储不同但相关的数据 | 可以表示不同类型的数据，但一次只使用一种 |
| 成员访问 | 可以同时访问多个成员 | 只能访问当前存储的成员 |
| 使用场景 | 需要同时保存多种类型的数据 | 需要节省内存，且成员互斥使用 |
辅助片段：
```cpp
struct StructExample { int intValue; float floatValue; char str[20]; };
union UnionExample { int intValue; float floatValue; char str[20]; };
StructExample s;
s.intValue = 10;
s.floatValue = 3.14;
strcpy(s.str, "Hello"); // 三个成员的值同时保留
UnionExample u;
u.intValue = 10;
std::cout << u.intValue;
u.floatValue = 3.14;
std::cout << u.floatValue;
strcpy(u.str, "Hello");
std::cout << u.str;
```
结构体同时保留各成员值；联合体的成员共享内存，每次赋值后只读取刚赋值的成员。
<!--SR:!2026-10-11,0,230-->

来源：[[基础面经19_上.pdf#page=4]] · 原题 Q3 · PDF 第4、5页；知识：[[面经19-02-对象布局与空类]]。

