---
title: 介绍
---

<p align="center">
    <img alt="logo" src="https://img.yzcdn.cn/vant/logo.png" width="120" height="120">
    <p style="text-align: center; font-size: 36px; margin: 0">Vant uni-app</p>
    <p style="text-align: center; margin: 0">轻量、可靠的移动端 Vue 组件库</p>
</p>

## 项目介绍

本项目为 [Vant](https://youzan.github.io/vant/#/zh-CN/intro) 的 uni-app 移植版。目标是实现与 Vant 完全一致的 API，支持通过 uni-app 一次编译到多平台，目前主要支持 H5 和小程序端。

## 扫码预览

<img style="height: 200px; display: block; margin: 20px auto 0 auto" src="https://cdn.xnngs.cn/img/20191104142053.png" />

## 更新日志

### v0.1.2 <Badge text="2019-11-07" type="tip"/>

- Features

  - 新增 Field 组件，包含基础功能
  - Cell: 
    - 新增`title-class`属性，用来设置左侧标题的额外类名，可解决左侧标题样式无法被覆盖的问题，额外样式必须是全局样式
    - 新增`required`属性，用来显示表单必填项的星号

- Bug Fixes
  - 修复 Icon 组件 click 事件名绑定错误的问题

### v0.1.1 <Badge text="2019-11-06" type="tip"/>

- Features

  - 完成弹出层组件基本功能

### v0.1.0 <Badge text="2019-11-06" type="tip"/>

- Features

  - 完成 `Button`、`Cell`、`Icon`、`Checkbox`、`Search`、`Switch`、`Collapse`、`Tag`、`Card` 这 9 个组件的基础功能
  - doc: 完成 9 个上面 9 个组件对应的文档，实现 h5 预览窗口和文档的路由同步

