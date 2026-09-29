---
title: shared_ptr的线程安全
tags: [flashcards, cpp]
source_id: M19
source_questions: [15]
source_pages: [14]
knowledge: 面经19-06-智能指针与并发
status: 待用户验收
---

shared_ptr 是不是线程安全的？适用于什么场景？
?
shared_ptr 的引用计数操作是线程安全的，但它所管理的对象本身不是线程安全的。
对所管理对象进行读写时，需要额外的同步。
使用场景是多线程共享同一对象。

来源：[[基础面经19_上.pdf#page=14]] · 原题 Q15 · PDF 第14页；知识：[[面经19-06-智能指针与并发]]。
