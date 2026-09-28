---
title: private不是没有继承
tags: [flashcards, cpp]
source_id: M19
source_questions: [7]
source_pages: [7, 8]
knowledge: 面经19-01-面向对象与继承
status: 待用户验收
cpp_standard: C++17
---

基类有 private 数据和函数，为什么派生对象仍有这部分状态，却不能直接访问？
?
补充与纠错：private 限制访问，不表示基类部分不存在或私有成员没有继承。基类自己的 public 函数仍可操作其 private 状态，派生类通常通过该接口访问；派生类普通成员函数不能直接访问基类 private 成员，友元等情况另论。

来源：[[基础面经19_上.pdf#page=7]] · 原题 Q7 · PDF 第7、8页；知识：[[面经19-01-面向对象与继承]]。

