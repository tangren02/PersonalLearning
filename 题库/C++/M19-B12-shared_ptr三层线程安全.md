---
title: shared_ptr三层线程安全
tags: [flashcards, cpp]
source_id: M19
source_questions: [15]
source_pages: [14]
knowledge: 面经19-06-智能指针与并发
status: 待用户验收
cpp_standard: C++17
---

shared_ptr 的线程安全要区分哪三层？
?
不同 shared_ptr 实例共享控制块时，可各自修改自己的实例，计数管理有同步保障；同一个 shared_ptr 变量发生并发读写或写写时需额外同步；所指对象的普通字段并发访问另按数据竞争规则同步。补充与纠错：原文缺少“同一个 shared_ptr 变量”层，控制块安全不等于对象安全。

来源：[[基础面经19_上.pdf#page=14]] · 原题 Q15 · PDF 第14页；知识：[[面经19-06-智能指针与并发]]。

