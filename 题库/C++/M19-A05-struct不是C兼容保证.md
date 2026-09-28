---
title: struct不是C兼容保证
tags: [flashcards, cpp]
source_id: M19
source_questions: [2]
source_pages: [3, 4]
knowledge: 面经19-01-面向对象与继承
status: 待用户验收
cpp_standard: C++17
---

为什么“C++ struct 与 C 兼容，而 class 不兼容”不能作为通用结论？
?
补充与纠错：struct/class 关键词不决定跨语言兼容性。C++ struct 也能有虚函数、继承、std::string 等 C 无法直接表达的结构。互操作要检查具体类型、布局和 ABI；标准布局属性也不是任意跨语言 ABI 的万能保证。简单数据常写 struct 只是习惯。

来源：[[基础面经19_上.pdf#page=3]] · 原题 Q2 · PDF 第3、4页；知识：[[面经19-01-面向对象与继承]]。

