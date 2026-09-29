---
title: shared与weak的区别
tags: [flashcards, cpp]
source_id: M19
source_questions: [17]
source_pages: [15,16]
knowledge: 面经19-06-智能指针与并发
status: 待用户验收
---

shared_ptr 与 weak_ptr 在所有权、引用计数、生命周期和循环引用上有什么区别？
?
shared_ptr：共享拥有对象，增加引用计数，控制对象生命周期，可能形成循环引用。
weak_ptr：不拥有对象，不增加引用计数，不控制对象生命周期，可用于打破循环引用。

来源：[[基础面经19_上.pdf#page=15]] · 原题 Q17 · PDF 第15、16页；知识：[[面经19-06-智能指针与并发]]。
