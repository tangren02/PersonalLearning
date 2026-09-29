---
title: 空类的sizeof值
tags: [flashcards, cpp]
source_id: M19
source_questions: [6]
source_pages: [7]
knowledge: 面经19-02-对象布局与空类
status: 待用户验收
---

当 class A 中没有任何成员变量和成员函数时，sizeof(A) 是多少？
?
值是 1。原因是对象需要有独特的地址，即使类中没有成员，也需要占用空间。

来源：[[基础面经19_上.pdf#page=7]] · 原题 Q6 · PDF 第7页；知识：[[面经19-02-对象布局与空类]]。
