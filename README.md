## VUE-H5-TEMPLATE

<p>
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.11-brightgreen.svg" alt="vue">
  </a>
  </a>
    <a href="https://youzan.github.io/vant/#/zh-CN/">
    <img src="https://img.shields.io/badge/vant-2.12.36-1989fa.svg" alt="vant">
  </a>
  <a href="https://github.com/Ewall1106/panda-vue-template/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

`Vue-H5-Template` 项目使用提供搭建 `移动端h5页面` 开发所需的基础模板，并提供一些通用型的解决方案、可复用组件及扩展功能。

[vue2.x 版本](https://github.com/Ewall1106/vue-h5-template/tree/2.x) | [vue3.x 版本](https://github.com/Ewall1106/vue-h5-template/tree/3.x)

## 基本说明

- [预览地址](https://template.xwhx.top)
- [更新日志](https://github.com/Ewall1106/vue-h5-template/blob/2.x/changelog.md)

### 扫码预览

<img width="180" class="zoom" src="https://z3.ax1x.com/2021/03/27/6zzC34.png">

### 安装使用

```bash
# 下载项目
$ git -b 2.x git@github.com:Ewall1106/vue-h5-template.git
# 安装运行
$ yarn & yarn dev
```

## 功能特性

:hammer: 基础能力

- `eslint` 校检及错误提示
- `prettier` 统一代码风格
- `vw` 移动端适配
- `vuex` 封装及使用
- `vue-router` 路由配置及权限控制
- `axios` 封装及请求

:hammer: 组件相关

- `vant` 组件的安装及使用
- `scroll` 横向滚动组件封装
- `svg-icon` 图标组件

- ...

## 目录结构

```
|-- public
|-- src
|   |-- api               // 接口列表
|   |-- assets            // 图片资源
|   |-- components        // 通用组件
|   |-- filters           // 过滤器
|   |-- icons             // 图标
|   |-- router            // 路由
|   |-- store             // 状态管理
|   |-- styles            // 公共样式
|   |-- types             // 文件声明
|   |-- utils             // 工具函数
|   |-- views             // 页面
|   |-- App.vue           // 主页面
|   |-- main.js           // 入口文件
|-- babel.config.js       // babel配置文件
|-- changelog.md          // 更新日志
|-- package.json          // 客户端依赖
|-- .postcssrc.js         // postcss配置文件
|-- vue.config.js         // vue相关配置文件
|-- ...
```

## 协议

- [MIT](https://github.com/Ewall1106/vue-h5-template/blob/master/LICENSE)

- Copyright (c) 2022-present Ewall&熊猫
