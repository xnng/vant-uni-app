# 快速上手

## 脚手架

推荐使用 Vue 官方提供的脚手架 Vue Cli 3 创建 uni-app 项目

### 安装 Vue Cli

```bash
npm install -g @vue/cli
```

### 创建一个 uni-app 项目

```bash
vue create -p dcloudio/uni-preset-vue my-project
```

## 安装

### 通过 npm 安装

```bash
npm i vant-uni-app
```

### 通过 yarn 安装

```bash
yarn add vant-uni-app
```

## 引入组件

由于小程序的限制，目前还不支持全局注册组件，仅支持局部注册，例如使用 `button` 组件：

- 引入

```js
<script>
import vanButton from 'vant-uni-app/lib/button'
export default {
  components: { vanButton }
}
</script>
```

- 使用

```js
<template>
  <van-button>按钮</van-button>
</template>
```
