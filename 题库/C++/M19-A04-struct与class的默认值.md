---
title: struct与class的默认值
tags: [flashcards, cpp]
source_id: M19
source_questions: [2]
source_pages: [3, 4]
knowledge: 面经19-01-面向对象与继承
status: 待用户验收
cpp_standard: C++17
---

C++ 中 struct 与 class 有哪两项语言层面的默认差别？struct 能有虚函数吗？
?
struct 默认成员访问和基类继承均为 public；class 均为 private。两者都可有构造析构、成员函数、继承和虚函数。例：struct D : B {} 默认公开继承，class D : B {} 默认私有继承；显式写 public 后不会被关键词改成 private。

来源：[[基础面经19_上.pdf#page=3]] · 原题 Q2 · PDF 第3、4页；知识：[[面经19-01-面向对象与继承]]。

