---
title: Herdr 快捷键
tags:
  - 工具快捷键
  - herdr
---

# Herdr 快捷键

面向终端里的 Herdr，按“想做什么”查找。以官方 **0.9.3 默认配置**为准，核对日期：2026-10-08；官网当时标为 Latest 0.9.3，固定版本依据见文末。未在本机逐项实测，自定义配置、输入法和外层终端可能影响实际按键。

## 前缀怎么按

- 默认前缀 `prefix` = **`Ctrl+B`（Control，不是 macOS Command）**。
- 本文 `prefix → c` 表示：同时按下 `Ctrl+B`，**松开，再按 `c`**；不是把三个键一起按。
- `prefix → Shift+N` 表示先完成前缀，再同时按 `Shift` 和 `N`。`h / j / k / l` 表示四个可选键，依次对应左 / 下 / 上 / 右，不是连按四次。
- **带 `prefix →` 的操作都需要前缀**；标为“模式内”的键只在该界面生效。无需前缀的直接键也不是操作系统级全局热键，必须先由外层终端传给 Herdr。
- 官方的 `Ctrl+Alt+…` 无前缀方案是**自定义配置示例，不是默认键位**。本文不将其列作出厂快捷键。[1][2]

先记这几个：`prefix → c` 新标签页、`prefix → v / -` 分屏、`prefix → h / j / k / l` 切窗格、`prefix → w` 工作区导航、`prefix → q` 暂时离开并保留运行。

## 窗格（Pane）

以下均为默认前缀操作。[1][3]

| 想做什么               | 快捷键                                              | 条件或提醒                             |
| ------------------ | ------------------------------------------------ | --------------------------------- |
| 向右分屏               | `prefix → v`                                     | 左右并排                              |
| 向下分屏               | `prefix → -`                                     | 上下堆叠；官方键名为 `minus`                |
| 聚焦左 / 下 / 上 / 右窗格  | `prefix → h / j / k / l`                         | 切换焦点，不移动窗格                        |
| 下一个 / 上一个窗格        | `prefix → Tab` / `prefix → Shift+Tab`            | 循环切换                              |
| 与左 / 下 / 上 / 右窗格交换 | `prefix → Shift+H / Shift+J / Shift+K / Shift+L` | 移动当前聚焦窗格的位置                       |
| 放大 / 还原当前窗格        | `prefix → z`                                     | 切换当前窗格的 zoom 状态                   |
| 进入调整大小模式           | `prefix → r`                                     | 进入模式，不是一次固定步长的缩放                  |
| 重命名当前窗格            | `prefix → Shift+P`                               | 作用于聚焦窗格                           |
| 关闭当前窗格             | `prefix → x`                                     | **关闭聚焦窗格**，不是暂时离开；需要保留运行时用 detach |

## 标签页（Tab）

标签页操作针对当前工作区。[1][3]

| 想做什么 | 快捷键 | 条件或提醒 |
| --- | --- | --- |
| 新建标签页 | `prefix → c` | 默认先询问标签页名称 |
| 下一个 / 上一个标签页 | `prefix → n` / `prefix → p` | 切换现有标签页 |
| 跳到第 1–9 个标签页 | `prefix → 1…9` | 前缀后只按目标数字，不是工作区编号 |
| 重命名当前标签页 | `prefix → Shift+T` | 作用于活动标签页 |
| 关闭当前标签页 | `prefix → Shift+X` | **关闭活动标签页**；若是最后一个标签页，工作区也会关闭，默认会询问确认。[4] |

## 工作区（Workspace）与会话

以下仍然需要前缀；工作区导航与 Goto 是两个不同入口。[1][3]

| 想做什么             | 快捷键                | 条件或提醒                                                                 |
| ---------------- | ------------------ | --------------------------------------------------------------------- |
| 打开工作区导航          | `prefix → w`       | 模式内用 `↑ / ↓` 选择，`Enter` 激活；`Esc` 或前缀键取消、不切换。[5]                       |
| 搜索并跳到 Agent / 终端 | `prefix → g`       | Goto 内按 `/` 搜索，`Enter` 跳转；未输入搜索时可用 `↑ / ↓` 或 `j / k` 选行               |
| 新建工作区            | `prefix → Shift+N` | 与小写 `n` 的“下一个标签页”不同                                                   |
| 重命名工作区           | `prefix → Shift+W` | 作用于选中的工作区                                                             |
| 关闭工作区            | `prefix → Shift+D` | **关闭选中的工作区**，默认确认；若选中 worktree 分组的父工作区，会关闭整个 Herdr 分组，但不删除检出目录或分支。[2] |
| 显示 / 收起侧栏        | `prefix → b`       | 注意第二步是普通 `b`，不是再按 `Ctrl+B`                                            |
| 暂时离开（detach）     | `prefix → q`       | **仅断开当前客户端**；窗格、Agent 等继续运行，不是关闭工作区或停止服务                              |

## 复制与历史输出

只有进入复制模式需要前缀；下面其余按键均是**复制模式内**的直接按键，不是全局快捷键。[1]

| 想做什么 | 快捷键 | 条件或提醒 |
| --- | --- | --- |
| 进入当前窗格的复制模式 | `prefix → [` | 运行中的程序不会暂停 |
| 移动 / 翻页 | `h / j / k / l`；`PageUp / PageDown` | 默认 `Ctrl+B` 仍是前缀，不要将其当成复制模式的向上翻页 |
| 向前 / 向后搜索文本 | `/` / `?` | 字面搜索；查询含大写字母时区分大小写 |
| 重复 / 反向重复搜索 | `n` / `Shift+N` | 针对刚才的搜索 |
| 开始选择 | `v` 或 `Space` | 再移动光标扩展选区 |
| 复制选区 | `y` 或 `Enter` | 先选中需要的文本 |
| 不复制并离开 | `q` 或 `Esc` | `Esc` 会先清除活动选区或搜索，再退出 |

## 帮助、直接键与实际键位

| 想做什么 | 快捷键 / 命令 | 条件或提醒 |
| --- | --- | --- |
| 查看当前生效的全部绑定 | `prefix → ?` | 帮助内按 `/` 筛选动作与快捷键，`Backspace` 编辑筛选，`Ctrl+U` 清空筛选。[1] |
| 打开设置 | `prefix → s` | 需要前缀。[3] |
| 重新加载配置 | `prefix → Shift+R` | 重载运行中的配置；不是“调整大小”的小写 `r`。[2][3] |
| 进入前缀模式 | `Ctrl+B` | **直接键，无需另加前缀**；由 `keys.prefix` 控制。[3] |
| 向远程 Herdr 发送剪贴板图片 | `Ctrl+V` | **直接键，无需前缀**；这是本地客户端的远程图片功能，不能将其概括成全局导航或通用复制键。[3] |
| 查看内置默认配置 | `herdr --default-config` | 在 shell 中运行；打印默认值，不代表当前自定义绑定。[2] |
| 查本机配置路径 | `herdr --help` | 输出包含解析后的配置路径；最终以应用内帮助显示的活动绑定为准。[2] |

## 官方来源

[1]: https://herdr.dev/docs/keyboard/
[2]: https://herdr.dev/docs/configuration/#keybindings
[3]: https://herdr.dev/docs/config-reference/
[4]: https://herdr.dev/docs/cli-reference/#tabs
[5]: https://herdr.dev/docs/connecting-machines/#switch-between-machines

- [Keyboard][1]：前缀、常用操作、帮助筛选、复制模式；[Configuration][2]：绑定语法、默认配置查询；[Worktrees](https://herdr.dev/docs/configuration/#worktrees)：分组关闭范围。
- [Config reference][3]：核对 `keys.*` 默认值及 `ui.confirm_close`；[CLI reference][4]：关闭最后标签页的级联行为；[Connecting machines][5]：导航模式确认与取消。
- 固定 **v0.9.3**：[Keyboard 原始文档](https://github.com/herdrdev/herdr/blob/v0.9.3/docs/next/website/src/content/docs/keyboard.mdx)、[配置参考原始数据](https://github.com/herdrdev/herdr/blob/v0.9.3/docs/next/website/src/data/config-reference.json)。官网 Latest 链接会随发布更新；本文不混用 Preview 或旧版键位。
