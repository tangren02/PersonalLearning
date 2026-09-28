---
title: struct与union的存储区别
tags: [flashcards, cpp]
source_id: M19
source_questions: [3]
source_pages: [4, 5]
knowledge: 面经19-02-对象布局与空类
status: 待用户验收
cpp_standard: C++17
---

要同时保存 int 和 double，与要保存二者之一，struct 和 union 的存储模型有什么不同？
?
普通 struct 可让两个成员同时保持各自的值；union 成员共享存储，通常一次只有一个活动成员，需知道当前保存的类型。补充与纠错：union 不自动保存类型标签；有非平凡成员时还需正确管理生命周期，不能仅因节省空间就无条件替换 struct。

来源：[[基础面经19_上.pdf#page=4]] · 原题 Q3 · PDF 第4、5页；知识：[[面经19-02-对象布局与空类]]。

