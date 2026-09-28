---
title: std-move是否一定触发移动
tags: [flashcards/cpp]
status: 待用户核对
---

std::move(x) 是否一定移动资源？当 x 是 const std::string 时，用它初始化另一个 string 通常调用什么？
?
- std::move 本身只是值类别转换，实际动作取决于后续重载决议。
- const string 经转换仍保留 const，得到 const string&&，不能绑定通常的 string&& 移动构造参数。
- 因而该初始化通常调用接受 const string& 的拷贝构造；没有合适重载时也可能无法编译。
- C++11/14/17 均适用；不能把“写了 move”等同于已经转移资源。

来源：[[拷贝与移动语义]]。AI 草稿，待用户核对。
