# Switch 开关

## 引入

```js
<script>
import vanSwitch from 'vant-uni-app/lib/switch'
export default {
  components: { vanSwitch }
}
</script>
```


## 代码演示

### 基础用法

通过`v-model`绑定开关的选中状态，`true`表示开，`false`表示关

```html
<van-switch v-model="checked" />
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};  
```

### 禁用状态

通过`disabled`属性来禁用开关，禁用状态下开关不可点击

```html
<van-switch v-model="checked" disabled />
```

### 自定义大小

通过`size`属性自定义开关的大小

```html
<van-switch v-model="checked" size="24px" />
```

### 自定义颜色

`active-color`属性表示打开时的背景色

```html
<van-switch v-model="checked" active-color="#07c160" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 开关选中状态 | *any* | `false` | - |
| disabled | 是否为禁用状态 | *boolean* | `false` | - |
| size | 开关尺寸，默认单位为`px` | *string \| number* | `30px` | 2.2.11 |
| active-color | 打开时的背景色 | *string* | `#1989fa` | - |

### Events

| 事件名 | 说明 | 回调参数 | 版本 |
|------|------|------|------|
| change | 开关状态切换回调 | checked: 是否选中开关 | - |
