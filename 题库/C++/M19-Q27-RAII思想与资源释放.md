---
title: RAII思想与资源释放
tags: [flashcards, cpp]
source_id: M19
source_questions: [27]
source_pages: [25,26]
knowledge: 面经19-09-动态内存与RAII
status: 待用户验收
---

RAII 是什么思想？它如何通过对象的生命周期与作用范围管理资源，并在异常发生时避免资源泄漏？
?
RAII 是 Resource Acquisition Is Initialization，即“资源获取即初始化”。
1. 对象创建时获取资源。
2. 对象析构时自动释放资源。
3. 通过对象的作用范围控制资源生命周期。
4. 异常发生时也保证资源正确释放，提供异常安全性。
将资源与对象生命周期绑定，能够自动管理资源，避免资源泄漏和未定义行为。
辅助片段：摘取文件资源的获取与释放；假设 file 是 FileRAII 的 std::fstream 成员，filename 类型为 const std::string&，省略写入方法和其余类体。
```cpp
FileRAII(const std::string& filename) {
    file.open(filename, std::ios::out | std::ios::trunc);
    if (!file.is_open()) throw std::runtime_error("Unable to open file");
}
~FileRAII() {
    if (file.is_open()) file.close();
}
```
构造时打开文件，打开失败抛出异常；对象析构时关闭已打开的文件。
<!--SR:!2026-10-12,0,230-->

来源：[[基础面经19_上.pdf#page=25]] · 原题 Q27 · PDF 第25、26页；知识：[[面经19-09-动态内存与RAII]]。
