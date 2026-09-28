---
title: 如何用weak-ptr打破循环引用
tags: [flashcards/cpp]
status: 待用户核对
---

父节点与子节点互相用 shared_ptr 持有时，为什么可能泄漏？怎样用 weak_ptr 表达反向关系并安全访问？
?
- 双向强引用使外部所有者消失后强计数仍非零，所管理对象无法自动销毁。
- 按所有权设计保留正向强拥有，将仅观察的反向关系改为 weak_ptr；它不增加强计数。
- 使用 lock() 获取临时 shared_ptr，判空成功后再访问，不依赖先 expired() 再访问的分离检查。
- shared_ptr、weak_ptr、make_shared 从 C++11 起可用；此解环原则在 C++14/17 不变。

来源：[[智能指针与所有权]]。AI 草稿，待用户核对。
