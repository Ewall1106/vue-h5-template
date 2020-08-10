<p align="center">
  <img width="100" height="100" src="https://raw.githubusercontent.com/Ewall1106/panda-vue-template/master/src/assets/logo.png">
  <h3  align="center">手把手教你搭建vue小商城</h3>
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.11-brightgreen.svg" alt="vue">
  </a>
   <a href="https://cli.vuejs.org/guide/">
    <img src="https://img.shields.io/badge/@vue/cli-4.2.3-brightgreen.svg" alt="vue-cli">
  </a>
    <a href="https://youzan.github.io/vant/#/zh-CN/">
    <img src="https://img.shields.io/badge/vant-2.7.0-brightgreen.svg" alt="vant">
  </a>
   <a href="https://www.npmjs.com/">
    <img src="https://img.shields.io/badge/npm-6.9.0-brightgreen.svg" alt="npm">
  </a>
  <a href="https://github.com/Ewall1106/panda-vue-template/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

## 介绍

一个商城小项目。  
目的是能使用不同的技术栈来实现多个端的开发，并且可以涵盖各种丰富的实用功能。

- [项目预览](https://ewall1106.github.io/panda-mall)
- [文档说明](https://ewall1106.github.io/docs-mall)

## 使用

> Tips: 为了避免出现未知的问题，首次安装最好使用官方镜像源。

```
# 下载到本地
$ git clone git@github.com:Ewall1106/mall.git

# 客户端运行
$ cd mall
$ npm install
$ npm run dev

# 服务端运行
$ cd server
$ npm install
$ npm run dev
```

## 目录结构

```
|-- mock                  // 本地mock数据
|-- public                // public
|-- server                // -- 服务端代码
|   |-- bin               // bin命令
|   |-- public            // public
|   |-- routes            // 路由表
|   |-- views             // 模板引擎
|   |-- app.js            // koa主文件
|   |-- package.json      // 服务端依赖
|-- src                   // -- 客户端代码
|   |-- api               // 接口列表
|   |-- assets            // 图片资源
|   |-- components        // 公共组件
|   |-- icons             // svg图标
|   |-- router            // 路由
|   |-- store             // vuex
|   |-- styles            // 公共样式
|   |-- utils             // 工具函数
|   |-- views             // 具体页面
|   |-- App.vue           // 主页面
|   |-- main.js           // 入口文件
|   |-- permission.js     // 权限控制逻辑
|-- package.json          // 客户端依赖
|-- .eslint.xx            // eslint处理
|-- babel.config.js       // babel配置文件
|-- postcss.config.js     // postcss配置文件
|-- vue.config.js         // vue相关配置文件
```

## 推荐

- [webpack 从 0 到 1](https://github.com/Ewall1106/webpack-demo)
- [create-panda-app](https://github.com/Ewall1106/create-panda-app)

## 协议

[MIT](https://github.com/Ewall1106/mall/blob/master/LICENSE)

Copyright (c) 2020-present Ewall&熊猫
