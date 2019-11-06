# Button 按钮

## 引入

```js
<script>
import vanButton from 'vant-uni-app/lib/button'
export default {
  components: { vanButton }
}
</script>
```

## 代码演示

### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`

```html
<van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
```

### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<van-button plain type="primary">朴素按钮</van-button>
<van-button plain type="info">朴素按钮</van-button>
```

### 细边框

设置`hairline`属性可以开启 0.5px 边框，基于伪类实现

```html
<van-button plain hairline type="primary">细边框按钮</van-button>
<van-button plain hairline type="info">细边框按钮</van-button>
```

### 禁用状态

通过`disabled`属性来禁用按钮，禁用状态下按钮不可点击

```html
<van-button disabled type="primary">禁用状态</van-button>
<van-button disabled type="info">禁用状态</van-button>
```

### 按钮形状

通过`square`设置方形按钮，通过`round`设置圆形按钮

```html 
<van-button square type="primary">方形按钮</van-button>
<van-button round type="info">圆形按钮</van-button>
```

### 按钮尺寸

支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html 
<van-button type="primary" size="large">大号按钮</van-button>
<van-button type="primary" size="normal">普通按钮</van-button>
<van-button type="primary" size="small">小型按钮</van-button>
<van-button type="primary" size="mini">迷你按钮</van-button>
```

### 页面导航

可以通过`url`属性进行 URL 跳转，或通过`to`属性进行路由跳转

```html
<van-button type="primary" url="/vant/mobile.html">URL 跳转</van-button>
<van-button type="primary" to="index">路由跳转</van-button>
```

### 自定义颜色

通过`color`属性可以自定义按钮的颜色

```html
<van-button color="#7232dd">单色按钮</van-button>
<van-button color="#7232dd" plain>单色按钮</van-button>
<van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</van-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|:------|:------|:------|:------|:------|
| type | 类型，可选值为 `primary` `info` `warning` `danger` | *string* | `default` | - |
| size | 尺寸，可选值为 `large` `small` `mini` | *string* | `normal` | - |
| color | 按钮颜色，支持传入`linear-gradient`渐变色 | *string* | - | - |
| plain | 是否为朴素按钮 | *boolean* | `false` | - |
| square | 是否为方形按钮 | *boolean* | `false` | - |
| round | 是否为圆形按钮 | *boolean* | `false` | - |
| disabled | 是否禁用按钮 | *boolean* | `false` | - |
| hairline | 是否使用 0.5px 边框 | *boolean* | `false` | - |
| url | 点击后跳转的链接地址，同 uni.navigateTo | *string* | - | - |
| to | 点击后跳转的链接地址，同 uni.redirectTo | *string* | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|:------|:------|:------|
| click | 点击按钮，且按钮状态不为禁用时触发 | event: Event |