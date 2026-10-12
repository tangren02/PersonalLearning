---
title: new与malloc及减少内存碎片
tags: [flashcards, cpp]
source_id: M19
source_questions: [22]
source_pages: [20]
knowledge: 面经19-09-动态内存与RAII
status: 待用户验收
---

new 和 malloc 从哪里分配内存？比较初始化、返回类型和失败处理，并列出减少内存碎片的策略。
?
| 比较项 | new | malloc |
| --- | --- | --- |
| 分配位置 | 堆区 | 堆区 |
| 初始化 | 调用构造函数初始化 | 不调用构造函数，需手动初始化 |
| 返回类型 | 指定类型的指针 | void*，需强制转换类型 |
| 分配失败 | 抛出异常 | 返回 NULL |
减少内存碎片：使用内存池；按需分配大块内存；避免频繁分配和释放；合并相邻空闲块。
辅助片段：分别分配并释放一个整数；malloc 成功后手动赋值。
```cpp
int* p1 = new int(5);
delete p1;
int* p2 = (int*)malloc(sizeof(int));
if (p2 != nullptr) {
    *p2 = 10;
    free(p2);
}
```
<!--SR:!2026-10-12,0,230-->

来源：[[基础面经19_上.pdf#page=20]] · 原题 Q22 · PDF 第20页；知识：[[面经19-09-动态内存与RAII]]。
