---
title: shared_ptr与weak_ptr的区别与联系
tags: [flashcards, cpp]
source_id: M19
source_questions: [17]
source_pages: [15,16]
knowledge: 面经19-06-智能指针与并发
status: 待用户验收
---

shared_ptr 与 weak_ptr 有什么区别和联系？从所有权、引用计数、生命周期控制及循环引用四方面比较，并说明 weak_ptr 的用途。
?
| 比较项 | shared_ptr | weak_ptr |
| --- | --- | --- |
| 所有权 | 共享对象所有权 | 不拥有对象 |
| 引用计数 | 增加引用计数 | 不增加引用计数 |
| 生命周期 | 控制对象的生命周期 | 不控制对象的生命周期 |
| 循环引用 | 可能形成循环引用并导致内存泄漏 | 可用于打破循环引用 |
`weak_ptr` 是对 `shared_ptr` 所管理对象的弱引用，用于需要引用对象、但不拥有对象或延长其生命周期的场景。
辅助说明：两个对象若通过 `shared_ptr` 相互持有，彼此的引用可能阻止释放；使用不增加引用计数的 `weak_ptr` 可打破这种循环引用。

来源：[[基础面经19_上.pdf#page=15]] · 原题 Q17 · PDF 第15、16页；知识：[[面经19-06-智能指针与并发]]。

