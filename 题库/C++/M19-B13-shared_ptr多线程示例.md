---
title: shared_ptr多线程示例
tags: [flashcards, cpp]
source_id: M19
source_questions: [15]
source_pages: [14]
knowledge: 面经19-06-智能指针与并发
status: 待用户验收
---

Q15 的 shared_ptr 多线程示例共享什么数据，线程做什么？
?
示例共享一个值为 100 的 int，由 shared_ptr<int> 管理。
将 shared_ptr 传值给 10 个线程，各线程打印该值，最后逐个 join。

来源：[[基础面经19_上.pdf#page=14]] · 原题 Q15 · PDF 第14页；知识：[[面经19-06-智能指针与并发]]。
