# Collapse 折叠面板

## 引入

```js
<script>
import vanCollapse from 'vant-uni-app/lib/collapse'
import vanCollapseItem from 'vant-uni-app/lib/collapseItem'
export default {
  components: { vanCollapse, vanCollapseItem }
}
</script>
```


## 代码演示

### 基础用法

通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<van-collapse v-model="activeNames">
  <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
  <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
  <van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item>
</van-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

### 手风琴

通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式

```html
<van-collapse v-model="activeName" accordion>
  <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
  <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
  <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
</van-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前展开面板的 name | 手风琴模式：*string \| number*<br>非手风琴模式：*(string \| number)[]* | - | - |
| accordion | 是否开启手风琴模式 | *boolean* | `false` | - |


### CollapseItem Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 唯一标识符，默认为索引值 | *string \| number* | `index` | - |
| title | 标题栏左侧内容 | *string \| number* | - | - |
| disabled | 是否禁用面板 | *boolean* | `false` | - |