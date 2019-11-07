# Field 输入框

### 介绍

表单中的输入框组件

### 引入

``` javascript
import vanField from 'vant-uni-app/lib/field'
export default {
  components: { vanField }
}
```

## 代码演示

### 基础用法

通过`v-model`绑定输入框的值

```html
<van-cell-group>
  <van-field v-model="value" placeholder="请输入用户名" />
</van-cell-group>
```

### 自定义类型

根据`type`属性定义不同类型的输入框

```html
<van-cell-group>
  <van-field
    v-model="username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</van-cell-group>
```

### 禁用输入框

```html
<van-cell-group>
  <van-field
    value="输入框已禁用"
    label="用户名"
    left-icon="contact"
    disabled
  />
</van-cell-group>
```

### 插入按钮

通过 button 插槽可以在输入框尾部插入按钮

```html
<van-cell-group>
  <van-field
    v-model="sms"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
  >
    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
  </van-field>
</van-cell-group>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| label | 输入框左侧文本 | *string* | - | - |
| value | 当前输入的值 | *string \| number* | - | - |
| type | 输入框类型, 可选值为 `tel` `number`<br>`textarea` `password` 等 | *string* | `text` | - |
| placeholder | 占位提示文字 | *string* | - | - |
| disabled | 是否禁用输入框 | *boolean* | `false` | - |
| required | 是否显示表单必填星号 | *boolean* | `false` | - |
| clearable | 是否启用清除控件 | *boolean* | `false` | - |
| left-icon | 左侧图标名称或图片链接，可选值见 Icon 组件 | *string* | - | - |
| right-icon | 右侧图标名称或图片链接，可选值见 Icon 组件 | *string* | - | - |

### Events

除下列事件外，Field 默认支持 Input 标签所有的原生事件

| 事件 | 说明 | 回调参数 |
|------|------|------|
| input | 输入框内容变化时触发 | value: 输入框当前值 |
| focus | 输入框获得焦点时触发 | event: Event |
| blur | 输入框失去焦点时触发 | event: Event |
| clear | 点击清除按钮时触发 | event: Event |
| click-right-icon | 点击右侧图标时触发 | event: Event |

### 方法

通过 ref 可以获取到 Field 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| focus | 获取输入框焦点 | - | - |
| blur | 取消输入框焦点 | - | - |

### Slots

| 名称 | 说明 |
|------|------|
| label | 自定义输入框标签 |
| input | 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效 |
| left-icon | 自定义输入框头部图标 |
| right-icon | 自定义输入框尾部图标 |
| button | 自定义输入框尾部按钮 |