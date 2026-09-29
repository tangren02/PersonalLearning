---
title: Animal示例中的多态
tags: [flashcards, cpp]
source_id: M19
source_questions: [1]
source_pages: [1,2,3]
knowledge: 面经19-01-面向对象与继承
status: 待用户验收
---

Animal、Dog、Cat 示例如何表现多态？
?
Animal 定义虚函数 speak() 和 info()，Dog 和 Cat 分别覆盖它们。
将 Dog、Cat 对象的指针放入 vector<Animal*>，通过 Animal 指针调用 info() 和 speak()，表现出不同的行为。

来源：[[基础面经19_上.pdf#page=1]] · 原题 Q1 · PDF 第1、2、3页；知识：[[面经19-01-面向对象与继承]]。
