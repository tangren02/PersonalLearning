---
title: 空类的sizeof值
tags: [flashcards, cpp]
source_id: M19
source_questions: [6]
source_pages: [7]
knowledge: 面经19-02-对象布局与空类
status: 待用户验收
---

已定义空类 `class A {};`，其中没有任何成员变量和成员函数。sizeof(A) 的值是多少？为什么？
?
`sizeof(A)` 的值是 1。
即使类中没有成员，也需要给每个实例分配一定空间，使各实例具有独特的地址。

来源：[[基础面经19_上.pdf#page=7]] · 原题 Q6 · PDF 第7页；知识：[[面经19-02-对象布局与空类]]。

