---
title: strlen与sizeof的区别
tags: [flashcards, cpp]
source_id: M19
source_questions: [54]
source_pages: [44,45]
knowledge: 面经19-16-零拷贝与大小计算
status: 待用户验收
---

strlen 和 sizeof 在含义、参数、返回类型和计算时机上有什么区别？它们分别适合测量什么？
?
| 比较项 | strlen | sizeof |
| --- | --- | --- |
| 含义 | 函数，计算 C 风格字符串长度，不包括结尾 null 字符 | 编译时运算符，计算对象、类型或结构的内存大小，单位为字节 |
| 参数 | 指向以 null 结尾字符数组的指针 | 变量、数组、指针、类型或表达式 |
| 返回类型 | size_t | size_t |
| 计算时机 | 运行时，扫描至第一个 null 字符 | 编译时确定，不依赖运行时状态 |
strlen 适合字符串实际长度和动态内容；sizeof 适合内存占用与数据布局大小。
辅助片段：Hello 的字符串长度为 5，数组包含结尾 null 字符而占 6 字节；整数数组的总字节数取决于 int 大小，元素个数为 5。
```cpp
char str[] = "Hello";
strlen(str); // 5
sizeof(str); // 6
int arr[] = {1, 2, 3, 4, 5};
sizeof(arr); // 数组总字节数
sizeof(arr) / sizeof(arr[0]); // 5
```
<!--SR:!2026-10-12,0,230-->

来源：[[基础面经19_上.pdf#page=44]] · 原题 Q54 · PDF 第44、45页；知识：[[面经19-16-零拷贝与大小计算]]。
