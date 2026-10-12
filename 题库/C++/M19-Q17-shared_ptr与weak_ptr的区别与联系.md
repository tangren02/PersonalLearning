---
title: shared_ptr与weak_ptr的区别与联系
tags: [flashcards, cpp]
source_id: M19
source_questions: [17]
source_pages: [15,16]
knowledge: 面经19-06-智能指针与并发
status: 已验收
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
循环引用辅助片段：
```cpp
class Node {
public:
    std::shared_ptr<Node> next;
};
auto node1 = std::make_shared<Node>();
auto node2 = std::make_shared<Node>();
node1->next = node2;
node2->next = node1;
```
两个节点通过各自的 `next` 相互持有对方的 `shared_ptr`，形成循环引用，可能阻止对象释放。
<!--SR:!2026-10-11,0,230-->

来源：[[基础面经19_上.pdf#page=15]] · 原题 Q17 · PDF 第15、16页；知识：[[面经19-06-智能指针与并发]]。

