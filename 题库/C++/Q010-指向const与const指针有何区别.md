---
title: 指向const与const指针有何区别
tags: [flashcards/cpp]
status: 待用户核对
---

const int* p 与 int* const p 分别限制什么？const_cast 去掉 const 后是否一定能合法修改所指对象？
?
- const int* p 限制通过 p 修改所指 int，p 自身可重新指向别处。
- int* const p 限制 p 自身改指向；若指向可修改的 int，可通过它修改该 int。
- const_cast 不改变对象本身最初的 const 属性；修改实际定义为 const 的对象是未定义行为。
- 若底层对象本来不是 const，仅访问路径加了 const，去掉限定后的修改不因这一点而非法；仍须满足生命周期等规则。C++11/14/17 均适用。

来源：[[const与引用]]。AI 草稿，待用户核对。
