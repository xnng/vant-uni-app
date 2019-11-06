# Checkbox 复选框

## 引入

```js
<script>
import vanCheckbox from 'vant-uni-app/lib/checkbox'
import vanCheckboxGroup from 'vant-uni-app/lib/checkboxGroup'
export default {
  components: { vanCheckbox, vanCheckboxGroup }
}
</script>
```

## 代码演示

### 基础用法

通过`v-model`绑定复选框的勾选状态

```js
<van-checkbox v-model="checked">复选框</van-checkbox>
export default {
  data() {
    return {
      checked: true
    };
  }
};
```

### 禁用状态

通过设置`disabled`属性可以禁用复选框

```js
<van-checkbox v-model="checked" disabled>复选框</van-checkbox>
```

### 自定义形状

将`shape`属性设置为`square`，复选框的形状会变成方形

```js
<van-checkbox v-model="checked" shape="square">复选框</van-checkbox>
```

### 自定义颜色

通过`checked-color`属性可以自定义选中状态下的图标颜色

```js
<van-checkbox v-model="checked" checked-color="#07c160">复选框</van-checkbox>
```

### 复选框组

复选框可以与复选框组一起使用，选中值是一个数组，通过`v-model`绑定在`CheckboxGroup`上，数组中的值为选中的复选框的`name`

```js
<van-checkbox-group v-model="result">
  <van-checkbox name="a">复选框 a</van-checkbox>
  <van-checkbox name="b">复选框 b</van-checkbox>
  <van-checkbox name="c">复选框 c</van-checkbox>
</van-checkbox-group>
export default {
  data() {
    return {
      result: ['a', 'b']
    };
  }
};
```

### 设置最大可选数

通过`max`属性可以限制最大可选数

```js
<van-checkbox-group v-model="result" :max="2">
  <van-checkbox name="a">复选框 a</van-checkbox>
  <van-checkbox name="b">复选框 b</van-checkbox>
  <van-checkbox name="c">复选框 c</van-checkbox>
</van-checkbox-group>
```

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|:------|:------|:------|:------|:------|
| name | 标识符 | *any* | - | - |
| shape | 形状，可选值为 `square` | *string* | `round`| - |
| v-model | 是否为选中状态 | *boolean* | `false` | - | - |
| disabled | 是否禁用复选框 | *boolean* | `false` | - | - |
| checked-color | 选中状态颜色 | *string* | `#1989fa` | - | - |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 所有选中项的标识符 | *any[]* | - | - |
| disabled | 是否禁用所有复选框 | *boolean* | `false` | - |
| max | 最大可选数，0 为无限制 | *number* | `0` | - |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |