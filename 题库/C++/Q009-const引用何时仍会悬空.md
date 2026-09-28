---
title: const引用何时仍会悬空
tags: [flashcards/cpp]
status: 待用户核对
---

identity(const std::string& x) 返回 x 的引用时，const std::string& r = identity(std::string("x")); 为什么会悬空？
?
- 临时 string 绑定到函数的引用参数，只存活到包含调用的完整表达式结束，即初始化语句的分号处。
- identity 返回同一对象的引用，不会再次延长临时对象寿命；分号后 r 悬空。
- 与直接写 const std::string& r = std::string("x"); 不同，直接绑定可把临时对象寿命延长到该局部引用的寿命。
- C++11/14/17 都不能通过转交引用延长这一寿命；C++17 的纯右值规则不修复此悬空问题。

来源：[[const与引用]]。AI 草稿，待用户核对。
