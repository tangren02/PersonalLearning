---
title: 委托与explicit不是互斥分类
tags: [flashcards, cpp]
source_id: M19
source_questions: [10]
source_pages: [10, 11]
knowledge: 面经19-03-构造与析构
status: 待用户验收
cpp_standard: C++17
---

T() : T(0) {} 与在 T() 函数体内写 T(0); 有何不同？explicit T(int) 能怎样调用？
?
前者委托到本类另一构造函数，委托目标是该初始化列表的唯一项；目标完成后执行委托体。后者只创建另一个临时对象。explicit T(int) 允许 T x(1) 或 T x{1}，不允许靠该构造执行 T x = 1。补充与纠错：委托、explicit、带参是不同维度，不能列成互斥的六种类型。

来源：[[基础面经19_上.pdf#page=10]] · 原题 Q10 · PDF 第10、11页；知识：[[面经19-03-构造与析构]]。

