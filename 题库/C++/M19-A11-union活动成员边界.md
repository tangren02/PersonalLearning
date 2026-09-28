---
title: union活动成员边界
tags: [flashcards, cpp]
source_id: M19
source_questions: [3]
source_pages: [4, 5]
knowledge: 面经19-02-对象布局与空类
status: 待用户验收
cpp_standard: C++17
---

union U { int i; double d; }; U u{3}; u.d = 2.5; 后能把 u.i 当作可移植的位重解释结果读出吗？
?
补充与纠错：不能。对这里的简单标量赋值开始 d 的生命周期并结束 i 的生命周期，之后应读取 d。读取不活动成员不是一般可移植的 C++17 类型转换方法；共同初始序列等受限例外并不许可随意读取任意成员。

来源：[[基础面经19_上.pdf#page=4]] · 原题 Q3 · PDF 第4、5页；知识：[[面经19-02-对象布局与空类]]。

