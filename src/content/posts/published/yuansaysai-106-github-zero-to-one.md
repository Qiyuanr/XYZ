---
pubDatetime: 2026-08-05T22:14:00+04:00
featured: false
draft: false
title: "GitHub 从零入门：把代码保存、同步和协作起来"
tags:
  - "AI"
  - "予安AI"
  - "产品与开发"
description: "理解 Git 与 GitHub 的区别，完成仓库、分支、提交、推送和 Pull Request 的基本操作。"
hideEditPost: true
---

Git 是电脑上的版本管理工具，GitHub 是用于托管代码、同步和协作的平台。可以只使用 Git，也可以把 Git 仓库同步到 GitHub。

![GitHub 入门教程配图](https://pbs.twimg.com/media/HMehUv_bcAABF6b?format=jpg&name=900x900)

配图 1

![文章配图](https://pbs.twimg.com/media/HMd4_SFbUAAOael?format=jpg&name=900x900)

配图 2

## 一、准备账号和工具

在[GitHub](https://github.com/)注册账号。Git 的安装包可以从[官方页面](https://git-scm.com/downloads)获取。

安装完成后，在终端确认：

git --version
~~~

![文章配图](https://pbs.twimg.com/media/HMd8A9PbQAAIPbG?format=jpg&name=900x900)

配图 3

![文章配图](https://pbs.twimg.com/media/HMd84C4bEAAKQ69?format=jpg&name=900x900)

配图 4

## 二、初次配置 Git

git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
git config --list
~~~

全局配置会用于以后所有项目。需要不同身份时，可以在具体项目目录单独配置。

![文章配图](https://pbs.twimg.com/media/HMd9wlda0AAt93u?format=jpg&name=900x900)

配图 5

![文章配图](https://pbs.twimg.com/media/HMd5Cc4bEAEr9ox?format=jpg&name=900x900)

配图 6

## 三、创建仓库并完成第一次同步

在 GitHub 创建 Repository，填写仓库名和可选描述，再选择公开或私有。README 可以作为项目说明书，写清楚项目用途、安装和使用方式。

常见的本地工作流是：

git clone https://github.com/用户名/仓库名.git
cd 仓库名
git status
git add .
git commit -m "说明本次修改"
git push
~~~

add 把修改放入暂存区，commit 创建本地存档，push 把存档推送到 GitHub。提交信息要能说明这次改了什么。

![文章配图](https://pbs.twimg.com/media/HMeVwLiaYAA3mGI?format=jpg&name=900x900)

配图 7

![文章配图](https://pbs.twimg.com/media/HMd5DKsasAAhEby?format=jpg&name=900x900)

配图 8

## 四、分支和 Pull Request

分支是一条独立开发线，适合在不影响主分支的情况下开发功能或修复问题。

git checkout -b feature-login
git status
git add .
git commit -m "添加登录功能"
git push -u origin feature-login
~~~

推送后可以在 GitHub 发起 Pull Request，请其他人审查修改，再决定是否合并到主分支。

![文章配图](https://pbs.twimg.com/media/HMeYBKubcAI0ItW?format=jpg&name=900x900)

配图 9

![文章配图](https://pbs.twimg.com/media/HMd5EX6bAAA0XMX?format=jpg&name=900x900)

配图 10

## 五、使用别人的仓库

- 先读 README确认项目用途、安装步骤、运行命令和已知问题。

- 再看 LICENSE确认代码和素材是否允许你的使用方式。

- 检查维护状态查看最近提交、Issues 和版本要求。

- 选择获取方式只想查看可以 Download ZIP；需要更新使用 git clone；要修改并贡献则 Fork + Clone。

git clone https://github.com/项目所有者/项目名.git
cd 项目名
git pull
~~~

![文章配图](https://pbs.twimg.com/media/HMeblxHa0AAUyrK?format=jpg&name=900x900)

配图 11

![文章配图](https://pbs.twimg.com/media/HMd5C85aQAAou8I?format=jpg&name=900x900)

配图 12

## 六、日常安全习惯

- 不确定时先运行 git status 和 git diff。

- 开始新工作前先 git pull，减少冲突。

- 完成一个小步骤就提交一次。

- 重要操作前先备份。

- 谨慎使用 git reset --hard，它可能永久丢弃未提交修改。

---

来源：<https://x.com/AdrianPunk115/status/2074744543170469894>
