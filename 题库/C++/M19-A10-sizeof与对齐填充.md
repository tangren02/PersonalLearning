---
title: sizeof与对齐填充
tags: [flashcards, cpp]
source_id: M19
source_questions: [3]
source_pages: [4, 5]
knowledge: 面经19-02-对象布局与空类
status: 待用户验收
cpp_standard: C++17
---

struct S { char c; int i; }; 的 sizeof 必为成员大小之和吗？union 大小必为最大成员大小吗？
?
补充与纠错：都不保证。struct 可能有成员间和尾部填充；union 要足够容纳最大成员，并满足对齐，也可能有填充。因此应说 struct 的布局受成员及对齐影响，union 的存储至少容纳最大成员；具体数值取决于类型和实现，不死背某平台输出。

来源：[[基础面经19_上.pdf#page=4]] · 原题 Q3 · PDF 第4、5页；知识：[[面经19-02-对象布局与空类]]。

