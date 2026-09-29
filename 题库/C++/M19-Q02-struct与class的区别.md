---
title: struct与class的区别
tags: [flashcards, cpp]
source_id: M19
source_questions: [2]
source_pages: [3,4]
knowledge: 面经19-01-面向对象与继承
status: 待用户验收
---

C++ 中 struct 和 class 有什么区别？从默认成员访问权限、默认继承权限、用途、支持的功能及与 C 的兼容性进行比较，并指出主要区别。
?
| 比较项 | struct | class |
| --- | --- | --- |
| 默认成员访问权限 | public | private |
| 默认继承权限 | public | private |
| 主要用途 | 表示简单的数据结构 | 表示封装数据和行为的对象 |
| 支持的功能 | 支持成员函数、继承和多态 | 支持成员函数、继承和多态 |
| 与 C 的兼容性 | 与 C 结构兼容 | 不兼容 |
主要区别是默认成员访问权限和默认继承权限。
辅助示例：`struct Person` 的成员可直接访问；`class Person01` 的私有成员通过公有方法访问。

来源：[[基础面经19_上.pdf#page=3]] · 原题 Q2 · PDF 第3、4页；知识：[[面经19-01-面向对象与继承]]。

