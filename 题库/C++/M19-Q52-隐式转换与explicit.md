---
title: 隐式转换与explicit
tags: [flashcards, cpp]
source_id: M19
source_questions: [52]
source_pages: [43]
knowledge: 面经19-15-拷贝转换与临时对象
status: 待用户验收
---

什么是隐式转换？如何限制构造函数产生的隐式转换？
?
隐式转换是编译器自动把一种类型转换成另一种类型。
使用 explicit 关键字防止构造函数的隐式转换，确保只能显式调用构造函数。
<!--SR:!2026-10-12,0,230-->

来源：[[基础面经19_上.pdf#page=43]] · 原题 Q52 · PDF 第43页；知识：[[面经19-15-拷贝转换与临时对象]]。
