---
title: 成员函数中 delete this 的影响
tags: [flashcards, cpp]
source_id: M19
source_questions: [62]
source_pages: [49]
knowledge: 面经19-13-指针风险与内存布局
status: 已验收
---

成员函数中调用 delete this 后，对象内存与成员函数代码各发生什么？结合 this 的作用，说明后续调用是否涉及 this 会产生什么影响。
?
对象内存中只有数据成员和虚函数表指针，没有成员函数代码；成员函数代码放在代码段。
调用成员函数时隐含传递 this，使函数知道由哪个对象调用。
delete this 释放对象内存；只要后续函数调用不涉及 this，仍能正常运行，否则会报错。
<!--SR:!2026-10-12,0,230-->

来源：[[基础面经19_上.pdf#page=49]] · 原题 Q62 · PDF 第49页；知识：[[面经19-13-指针风险与内存布局]]。
