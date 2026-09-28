---
title: weak的计数与lock
tags: [flashcards, cpp]
source_id: M19
source_questions: [17]
source_pages: [15, 16]
knowledge: 面经19-06-智能指针与并发
status: 待用户验收
cpp_standard: C++17
---

weak_ptr 不增加哪种计数？使用时为什么优先 if (auto p = w.lock())，而不是先 expired 再假定对象活着？
?
weak_ptr 不增加强引用计数，不保活对象，但仍参与弱观察管理。lock 原子地尝试取得强拥有权，成功返回 shared_ptr，过期返回空。补充与纠错：expired 检查后对象可能消失；lock 成功只保证拥有权，不自动保护对象字段的并发读写。

来源：[[基础面经19_上.pdf#page=15]] · 原题 Q17 · PDF 第15、16页；知识：[[面经19-06-智能指针与并发]]。

