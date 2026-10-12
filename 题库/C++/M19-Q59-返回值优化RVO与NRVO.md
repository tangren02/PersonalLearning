---
title: 返回值优化RVO与NRVO
tags: [flashcards, cpp]
source_id: M19
source_questions: [59]
source_pages: [47,48]
knowledge: 面经19-15-拷贝转换与临时对象
status: 待用户验收
---

C++ 的 RVO 与 NRVO 分别适用于什么返回形式？返回值优化希望避免哪些对象操作？
?
**RVO（返回值优化）**：函数直接返回临时对象。
**NRVO（命名返回值优化）**：函数返回命名的局部对象。
返回值优化可以避免临时对象的创建和销毁。
辅助片段：假设 MyClass 已定义；两个函数分别展示直接返回临时对象和返回具名局部对象。
```cpp
MyClass createObjectRVO() {
    return MyClass();
}
MyClass createObjectNRVO() {
    MyClass obj;
    return obj;
}
MyClass obj = createObjectRVO();
```
第一种可应用 RVO，第二种可应用 NRVO。
<!--SR:!2026-10-12,0,230-->

来源：[[基础面经19_上.pdf#page=47]] · 原题 Q59 · PDF 第47、48页；知识：[[面经19-15-拷贝转换与临时对象]]。
