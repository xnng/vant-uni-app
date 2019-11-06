# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示

### 引入

``` javascript
import vanPopup from 'vant-uni-app/lib/popup'
export default {
  components: { vanCell }
}
```

## 代码演示

### 基础用法

通过`v-model`控制弹出层是否展示

```html
<van-cell is-link @click="showPopup">展示弹出层</van-cell>

<van-popup v-model="show">内容</van-popup>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
```

### 弹出位置

通过`position`属性设置弹出位置，默认居中弹出，可以设置为`top`、`bottom`、`left`、`right`

```html
<van-popup
  v-model="show"
  position="top"
  :style="{ height: '20%' }"
/>
```

### 关闭图标

设置`closeable`属性后，会在弹出层的右上角显示关闭图标，并且可以通过`close-icon`属性自定义图标

```html
<van-popup
  v-model="show"
  closeable
  position="bottom"
  :style="{ height: '20%' }"
/>

<!-- 自定义图标 -->
<van-popup
  v-model="show"
  closeable
  close-icon="close"
  position="bottom"
  :style="{ height: '20%' }"
/>
```

### 圆角弹窗

设置`round`属性后，弹窗会根据弹出位置添加不同的圆角样式

```html
<van-popup
  v-model="show"
  round
  position="bottom"
  :style="{ height: '20%' }"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前组件是否显示 | *boolean* | `false` | - |
| position | 弹出位置，可选值为 `top` `bottom` `right` `left` | *string* | `center` | - |
| round | 是否显示圆角 | *boolean* | `false` | 2.0.7 |
| closeable | 是否显示关闭图标 | *boolean* | `false` | 2.2.0 |
| close-icon | 关闭图标名称或图片链接 | *string* | `cross` | 2.2.0 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击弹出层时触发 | event: Event |
| close | 关闭弹出层时触发 | - |
