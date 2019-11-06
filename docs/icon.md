# Icon 图标

## 引入

```js
<script>
import vanIcon from 'vant-uni-app/lib/Icon'
export default {
  components: { vanIcon }
}
</script>
```

## 代码演示

### 基础用法

`Icon`的`name`属性支持传入图标名称，所有可用的图标名称见右侧示例

```js
<van-icon name="close" />
```

### 提示信息

设置`dot`属性后，会在图标右上角展示一个小红点。设置`info`属性后，会在图标右上角展示相应的徽标

```js
<van-icon name="chat" dot />
<van-icon name="chat" info="9" />
<van-icon name="chat" info="99+" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|:------|:------|:------|:------|:------|
| name | 图片名称 | *string* | - | - |
| dot | 是否显示图标右上角小红点 | *boolean* | false| - |
| info | 图标右上角徽标的美容 | *string | number* | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|:------|:------|:------|
| click | 点击单图标时触发 | event: Event |