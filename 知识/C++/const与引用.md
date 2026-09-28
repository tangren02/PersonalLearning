---
title: const与引用
tags: [learning/cpp]
status: 待用户核对
---

# const 与引用

AI 原创学习草稿，需用户核对；仅用于个人学习，不含工作资料。

## 面试要点

- `const int*` 限制通过该指针修改所指值；`int* const` 限制指针自身改指向。`const` 并不总意味着整个可达对象图不可变。
- 引用是已有对象的别名，初始化后不能重新绑定；`ref = other` 是赋值给所引用对象，而非改绑引用。
- `const T&` 可绑定某些临时对象，但生命周期延长依赖具体初始化上下文，不能概括为“有 const 引用就不悬空”。
- `const` 成员函数限制通过该对象访问路径修改普通成员；`mutable` 成员是例外，指针成员所指对象也不因此自动变成 const。

## 小例子与边界

```cpp
#include <string>

const std::string& identity(const std::string& text) {
    return text;
}

void example() {
    const std::string& a = std::string("safe"); // 临时对象随 a 延长到作用域末尾
    const std::string& b = identity(std::string("short"));
    // 上一完整表达式结束后 b 已悬空；不得读取它
}
```

返回局部对象的引用同样悬空。`const_cast` 去掉限定不代表可合法修改：若底层对象最初就是 const，修改它是未定义行为。引用成员和 `new` 初始化等还有各自的生命周期边界，面试时应给出具体表达式再判断。

## 标准版本

上述 const 与左值引用核心规则在 C++11/14/17 都适用。C++11 增加右值引用；C++17 改变纯右值和临时量实质化模型，但不会让通过函数返回的引用自动再次延长临时对象寿命。

## 权威参考

- [cppreference：引用初始化与生命周期](https://en.cppreference.com/w/cpp/language/reference_initialization.html)
- [cppreference：cv 限定符](https://en.cppreference.com/w/cpp/language/cv.html)
- [C++ 工作草案：临时对象](https://eel.is/c++draft/class.temporary)

## 对应复习

[[Q009-const引用何时仍会悬空]] · [[Q010-指向const与const指针有何区别]]
