---
title: struct与union的成员访问
tags: [flashcards, cpp]
source_id: M19
source_questions: [3]
source_pages: [4,5]
knowledge: 面经19-02-对象布局与空类
status: 待用户验收
---

struct 和 union 在同时保存、访问成员及使用场景方面有何区别？
?
struct 可以同时存储和访问所有成员。
union 一次只使用一种成员，只访问当前使用的成员。
struct 用于同时保存不同但相关的多种类型数据；union 可以存储多种类型，但一次只用一种，适用于节省内存、成员互斥使用的场景。
union 示例依次为 int、float、char[20] 成员赋值，并在每次赋值后输出对应成员。

来源：[[基础面经19_上.pdf#page=4]] · 原题 Q3 · PDF 第4、5页；知识：[[面经19-02-对象布局与空类]]。
