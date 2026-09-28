---
title: const限定哪一层
tags: [flashcards, cpp]
source_id: M19
source_questions: [13]
source_pages: [13]
knowledge: 面经19-04-指针引用与const
status: 待用户验收
cpp_standard: C++17
---

const int* p、int* const p、const int* const p 分别能否改指向和通过 p 写值？
?
const int* 可改指向，不能经 p 写 int；int* const 不可改指向，可经 p 写可修改的 int；const int* const 两者都不可。补充与纠错：指向 const 不表示原对象绝对不变；原对象若非 const，仍可通过其他合法可写路径修改。

来源：[[基础面经19_上.pdf#page=13]] · 原题 Q13 · PDF 第13页；知识：[[面经19-04-指针引用与const]]。

