# Search 搜索

## 引入

```js
<script>
import vanSearch from 'vant-uni-app/lib/search'
export default {
  components: { vanSearch }
}
</script>
```

## 代码演示

### 基础用法

v-model 用于控制搜索框中的文字，background 可以自定义搜索框外部背景色

```html
<van-search placeholder="请输入搜索关键词" v-model="value" />
```

### 事件监听

Search 组件提供了`search`和`cancel`事件，`search`事件在点击键盘上的搜索/回车按钮后触发，`cancel`事件在点击搜索框右侧取消按钮时触发

```html
<form action="/">
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
```

### 自定义按钮

使用`action`插槽可以自定义右侧按钮的内容。使用插槽后，cancel 事件将不再触发

```html
<van-search
  v-model="value"
  placeholder="请输入搜索关键词"
  show-action
  shape="round"
  @search="onSearch"
>
  <div slot="action" @click="onSearch">搜索</div>
</van-search>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| shape | 搜索框形状，可选值为 `round` | *string* | `square` | - |
| placeholder | 占位提示文字 | *string* | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| search | 确定搜索时触发 | value: 输入框当前值 |
| cancel | 点击取消按钮时触发 | - |

### Slots

| 名称 | 说明 |
|------|------|
| action | 自定义搜索框右侧按钮，设置`show-action`属性后展示 |