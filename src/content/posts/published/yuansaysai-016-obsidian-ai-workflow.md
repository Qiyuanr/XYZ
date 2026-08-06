---
pubDatetime: 2026-08-05T23:44:00+04:00
featured: false
draft: false
title: "Obsidian + AI：把本地笔记库变成可调用的知识库"
tags:
  - "AI"
  - "予安AI"
  - "知识与工作流"
description: "从本地 Markdown 笔记、基础插件到 AI 接入和跨设备同步，搭一套可持续维护的知识库。"
hideEditPost: true
---

Obsidian 的核心是一个本地文件夹：笔记保存为 Markdown 文件，图片、PDF、音频等附件以普通文件保存。只要授权，支持文件访问的 AI 工具就能直接读取、整理和修改这些内容。

这让知识库可以成为 AI 的长期上下文，而不是每次对话都重新解释背景。

![Obsidian 与 AI 工作流封面](https://pbs.twimg.com/media/HO9KoEHaEAA8dYh?format=jpg&name=900x900)

配图 1

![文章配图](https://pbs.twimg.com/media/HO9KgdHbsAAFQYw?format=jpg&name=900x900)

配图 2

## 一、安装与创建知识库

从[官方页面下载 Obsidian](https://obsidian.md/download.html)。第一次打开时创建一个 Vault。Vault 本质上就是电脑上的一个文件夹，笔记和附件都会保存在里面。

- 选择一个容易备份的位置。

- 为知识库使用独立文件夹。

- 先记住 Cmd+P 或 Ctrl+P 命令面板。

- 同步方案等实际使用后再决定。

![文章配图](https://pbs.twimg.com/media/HO9JxeGbUAEuBRe?format=jpg&name=900x900)

配图 3

![文章配图](https://pbs.twimg.com/media/HO9J0N8acAAYSxa?format=jpg&name=900x900)

配图 4

## 二、先掌握这几种 Markdown

# 一级标题
## 二级标题

- 无序列表
1. 有序列表

**粗体**
*斜体*

[[另一篇笔记]]
~~~

刚开始不需要学习完整语法。标题、列表、强调文字和双向链接，已经足够建立基本知识库。

![文章配图](https://pbs.twimg.com/media/HO9J2nwaYAAc2Rq?format=jpg&name=900x900)

配图 5

![文章配图](https://pbs.twimg.com/media/HO9J4uPbsAEjpxh?format=jpg&name=900x900)

配图 6

## 三、插件按需求安装

- Web Clipper从浏览器保存网页和资料，具体媒体能力以当前版本为准。

- Calendar管理日记、复盘和按日期整理的笔记。

- Editing Toolbar用工具栏快速插入 Markdown 格式。

- Omnisearch搜索笔记正文，而不仅是文件名。

- QuickAdd快速记录灵感，并自动写入指定文件。

社区插件会运行第三方代码，安装前应检查维护状态、权限和代码来源。可参考[官方插件说明](https://obsidian.md/help/community-plugins)。

![文章配图](https://pbs.twimg.com/media/HO9J60nbUAALq1d?format=jpg&name=900x900)

配图 7

![文章配图](https://pbs.twimg.com/media/HO9J8PtaYAArosF?format=jpg&name=900x900)

配图 8

![文章配图](https://pbs.twimg.com/media/HO9J-XNbMAAqbYo?format=jpg&name=900x900)

配图 9

![文章配图](https://pbs.twimg.com/media/HO9J_f8bsAATtPL?format=jpg&name=900x900)

配图 10

## 四、把 Obsidian 接入 AI

最简单的方式，是让 Codex、Claude Code 等工具打开 Vault 文件夹。AI 可以读取已有笔记、整理重复内容、生成初稿，并把结果写回 Markdown 文件。

推荐工作流

素材收集 → 知识库归档 → AI 检索 → 生成初稿 → 人工审核 → 回写笔记

第一次使用时先只开放读取权限，确认 AI 能正确理解文件结构后，再允许它修改内容。

![文章配图](https://pbs.twimg.com/media/HO9KBjNbsAAOFsW?format=jpg&name=900x900)

配图 11

![文章配图](https://pbs.twimg.com/media/HO9KC2yaAAAuMH2?format=jpg&name=900x900)

配图 12

![文章配图](https://pbs.twimg.com/media/HO9KE00boAEyLFu?format=jpg&name=900x900)

配图 13

![文章配图](https://pbs.twimg.com/media/HO9KF9iaUAAUTF7?format=jpg&name=900x900)

配图 14

## 五、选择同步方式

- Obsidian Sync：官方同步服务，支持跨设备同步和端到端加密。

- iCloud：适合 Apple 设备之间同步。

- OneDrive、Dropbox、坚果云：把 Vault 放入同步目录。

- Git + GitHub：适合需要查看完整修改历史的人。

- Syncthing：适合希望自行管理同步服务的人。

同步前要注意同时编辑冲突、附件同步范围，以及移动端能否访问同步后的本地文件夹。官方价格和套餐可能变化，使用前查看[官方价格页面](https://obsidian.md/pricing.html)。

![文章配图](https://pbs.twimg.com/media/HO9KGzraAAAcjCk?format=jpg&name=900x900)

配图 15

![文章配图](https://pbs.twimg.com/media/HO9KIDFa4AAS2tK?format=jpg&name=900x900)

配图 16

![文章配图](https://pbs.twimg.com/media/HO9KGO_a4AA9V5v?format=jpg&name=900x900)

配图 17

[打开视频](https://video.twimg.com/tweet_video/HO9JvqebgAAYCSy.mp4)<video controls preload="metadata" poster="https://pbs.twimg.com/tweet_video_thumb/HO9JvqebgAAYCSy.jpg"><source src="https://video.twimg.com/tweet_video/HO9JvqebgAAYCSy.mp4" type="video/mp4"></video>动态演示

## 六、最小上手路径

- 建立 Vault先用本地文件夹保存笔记和附件。

- 练习 Markdown掌握标题、列表、强调和双向链接。

- 安装少量插件从收集资料和全文搜索开始。

- 让 AI 先读后写先测试读取一个小型知识库，再扩大权限。

- 最后再同步根据设备和备份需求选择方案。

---

来源：<https://x.com/xilo2991/status/2084967640498614588>
