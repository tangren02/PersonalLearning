---
title: shared_ptr的线程安全
tags: [flashcards, cpp]
source_id: M19
source_questions: [15]
source_pages: [14]
knowledge: 面经19-06-智能指针与并发
status: 已验收
---

shared_ptr 是否线程安全？区分引用计数操作与被管理对象本身的线程安全性，并说明多线程读写被管理对象时需要注意什么。
?
`shared_ptr` 的引用计数操作是线程安全的，但被管理对象本身并不因此自动具备线程安全性。
多个线程读写被管理对象时，需要额外的同步措施来保证对象访问安全。
`shared_ptr` 适合用于多线程共享对象，但不能用引用计数安全代替对象访问的同步。
辅助片段：
```cpp
void threadFunction(std::shared_ptr<int> ptr) {
    std::cout << "Thread: " << std::this_thread::get_id()
              << ", Value: " << *ptr << '\n';
}
auto sharedPtr = std::make_shared<int>(100);
std::vector<std::thread> threads;
for (int i = 0; i < 10; ++i)
    threads.push_back(std::thread(threadFunction, sharedPtr));
for (auto& th : threads) th.join();
```
`sharedPtr` 按值传给 10 个线程，各线程读取所管理整数的值，最后逐个 `join()` 等待结束。此片段展示共享对象的读取，没有展示并发修改对象。
<!--SR:!2026-10-11,0,230-->

来源：[[基础面经19_上.pdf#page=14]] · 原题 Q15 · PDF 第14页；知识：[[面经19-06-智能指针与并发]]。

