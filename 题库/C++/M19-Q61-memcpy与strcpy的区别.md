---
title: memcpy与strcpy的区别
tags: [flashcards, cpp]
source_id: M19
source_questions: [61]
source_pages: [49]
knowledge: 面经19-16-零拷贝与大小计算
status: 待用户验收
---

memcpy 和 strcpy 分别用于拷贝什么？它们如何确定拷贝长度，各适合哪类数据？
?
memcpy 用于内存块拷贝，可拷贝任意类型数据；需要指定字节数，适合二进制数据。
strcpy 用于字符串拷贝，直到遇到 \0 结束符，适合字符串。
<!--SR:!2026-10-12,0,230-->

来源：[[基础面经19_上.pdf#page=49]] · 原题 Q61 · PDF 第49页；知识：[[面经19-16-零拷贝与大小计算]]。
