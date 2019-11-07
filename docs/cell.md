# Cell 单元格

## 引入

```js
<script>
import vanCell from 'vant-uni-app/lib/cell'
import vanCellGroup from 'vant-uni-app/lib/cellGroup'
export default {
  components: { vanCell, vanCellGroup }
}
</script>
```

## 代码演示

### 基础用法

`Cell`可以单独使用，也可以与`CellGroup`搭配使用。`CellGroup`可以为`Cell`提供上下外边框

```js
<van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
```

### 单元格大小

通过`size`属性可以控制单元格的大小

```js
<van-cell title="单元格" value="内容" size="large" />
<van-cell title="单元格" value="内容" size="large" label="描述信息" />
```

### 展示图标

通过`icon`属性在标题左侧展示图标

```js
<van-cell title="单元格" icon="location-o" />
```

### 只设置 value

只设置`value`时，内容会靠左对齐

### 展示箭头

设置`is-link`属性后会在单元格右侧显示箭头，并且可以通过`arrow-direction`属性控制箭头方向

```js
<van-cell title="单元格" is-link />
<van-cell title="单元格" is-link value="内容" />
<van-cell title="单元格" is-link arrow-direction="down" value="内容" />
```

### 页面导航

可以通过`url`属性进行 URL 跳转，或通过`to`属性进行路由跳转

```js
<van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
<van-cell title="路由跳转" is-link to="index" />
```

### 分组标题

通过`CellGroup`的`title`属性可以指定分组标题

```js
<van-cell-group title="分组1">
  <van-cell title="单元格" value="内容" />
</van-cell-group>
<van-cell-group title="分组2">
  <van-cell title="单元格" value="内容" />
</van-cell-group>
```

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容

```js
<van-cell value="内容" is-link>
  <!-- 使用 title 插槽来自定义标题 -->
  <template slot="title">
    <span class="custom-title">单元格</span>
  </template>
</van-cell>

<van-cell title="单元格" icon="shop-o">
  <!-- 使用 right-icon 插槽来自定义右侧图标 -->
  <van-icon
    slot="right-icon"
    name="search"
    style="line-height: inherit;"
  />
</van-cell>
```

## API

### CellGroup Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|:------|:------|:------|:------|:------|
| title | 分组标题 | *string* | - | - |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|:------|:------|:------|:------|:------|
| icon | 左侧图标名称或图片链接，可选值见 Icon 组件 | *string* | - | - |
| title | 左侧标题 | *string | number* | - | - |
| value | 右侧内容 | *string | number* | - | - |
| label | 标题下方的描述信息 | *string* | - | - |
| size | 单元格大小，可选值为`large` | *string* | - | - |
| url | 点击后跳转的链接地址，同 uni.navigateTo | *string* | - | - |
| to | 点击后跳转的链接地址，同 uni.redirectTo | *string* | - | - |
| is-link | 左侧标题额外类名 | *string* | - | - |
| required | 是否显示表单必填星号 | *boolean* | false | - |
| title-class| 是否展示右侧箭头并开启点击反馈 | *string* | - | - |

### Cell Events

| 事件名 | 说明 | 回调参数 |
|:------|:------|:------|
| click | 点击单元格时触发 | event: Event |

### Cell Slots

| 名称 | 说明 |
|:------|:------|
| default | 自定义右侧内容 |
| title | 自定义左侧标题 |
| label | 自定义标题下方描述 |
| icon | 自定义左侧图标 |
| right-cion | 自定义右侧按钮，默认为 `arrow` |