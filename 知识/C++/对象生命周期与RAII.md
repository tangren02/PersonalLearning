---
title: 对象生命周期与RAII
tags: [learning/cpp]
status: 待用户核对
---

# 对象生命周期与 RAII

AI 原创学习草稿，需用户核对；仅用于个人学习，不含工作资料。

## 面试要点

- RAII 把资源的获取、释放绑定到对象的初始化和析构；资源不限于内存，也包括锁、文件句柄等。
- 正常离开作用域，以及异常传播导致的栈展开，都会销毁已完成构造的自动对象，通常按构造完成的逆序进行。
- 构造函数抛异常时，该对象本身的析构函数不执行；已构造完成的基类和成员子对象会被销毁。因此资源应尽早交给 RAII 成员管理。
- RAII 解决资源清理，不自动保证操作失败后业务状态完全不变。强异常保证通常还需要“先准备、成功后提交”。

## 小例子与边界

```cpp
#include <memory>
#include <stdexcept>

void example() {
    std::unique_ptr<int> value(new int(42));
    throw std::runtime_error("失败");
} // 异常向调用方传播并展开此栈帧时，value 释放其拥有的 int
```

析构函数应避免抛出异常；在栈展开期间再让异常逃出析构函数会调用 `std::terminate`。进程被强制终止、`std::abort` 等并不保证常规栈展开，不能把 RAII 理解为任何终止方式下都必定清理。存储期也不等同于对象生命周期，例如一块存储可以被复用以构造新对象。

## 标准版本

RAII 思想适用于早期 C++；示例使用 C++11 的 `std::unique_ptr`。C++14 可用 `std::make_unique<int>(42)`；C++17 没有把异常安全升级为自动的强保证。

## 权威参考

- [cppreference：RAII](https://en.cppreference.com/w/cpp/language/raii.html)
- [C++ 工作草案：构造和析构中的异常](https://eel.is/c++draft/except.ctor)

## 对应复习

[[Q001-RAII与异常安全的边界]] · [[Q002-构造函数抛异常后谁会析构]]
