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

[English](https://github.com/Ewall1106/vue-h5-template/blob/2.x/README.md) | [简体中文](https://github.com/Ewall1106/vue-h5-template/blob/2.x/README.zh.md)

The `Vue-H5-Template` project provides the basic template required for building `mobile H5 page` development, and provides some general solutions, reusable components and extended functions.

The project maintains two versions, includes `vue2.x` and `vue3.x`. Please select a different branch to view the details.

version: [vue2.x](https://github.com/Ewall1106/vue-h5-template/tree/2.x) | [vue3.x](https://github.com/Ewall1106/vue-h5-template/tree/3.x)

## BASIC

- [preview](https://template.xwhx.top)
- [changelog](https://github.com/Ewall1106/vue-h5-template/blob/2.x/changelog.md)

### Scan

<img width="180" src="https://s4.ax1x.com/2021/12/11/oHZy5V.png">

### Usage

```bash
# clone
$ git -b 2.x git@github.com:Ewall1106/vue-h5-template.git
# install & run
$ yarn & yarn dev
```

## FEATURES

:hammer: basic

- `eslint` Check and error prompt
- `prettier` uniform program style
- `vw` mobile adaption
- `vuex` encapsulation && usage
- `vue-router` routing configuration and permission control
- `axios` encapsulation and request

:hammer: components

- `vant` install && usage
- `scroll` horizontal scroll component
- `svg-icon` icon component
- ...

## CONTENTS

```
|-- public
|-- src
|   |-- api               // api
|   |-- assets            // assets && picture
|   |-- components        // generic components
|   |-- filters           // filters
|   |-- icons             // icons
|   |-- router            // router
|   |-- store             // state management
|   |-- styles            // common styles
|   |-- utils             // utility function
|   |-- views             // pages
|   |-- App.vue           // main page
|   |-- main.js           // entry file
|-- babel.config.js       // babel config
|-- changelog.md          // changelog
|-- package.json          // just package.json
|-- .postcssrc.js         // postcss config
|-- vue.config.js         // vue config
|-- ...
```

## LICENSE

- [MIT](https://github.com/Ewall1106/vue-h5-template/blob/master/LICENSE)

- Copyright (c) 2022-present Ewall Xiong
