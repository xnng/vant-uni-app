<template>
  <view>
    <view class="van-demo-header">
      <img class="img" src="https://img.yzcdn.cn/vant/logo.png" />
      <text class="title">Vant uni-app</text>
    </view>
    <view class="van-demo-desc">轻量、可靠的 uni-app 组件库</view>

    <van-collapse-item
      v-for="collapse of menuList"
      :key="collapse.title"
      :title="collapse.title"
      class="van-collapse-rewrite"
    >
      <van-cell
        v-for="cell of collapse.children"
        :key="cell.url"
        :title="cell.title"
        is-link
        :url="cell.url"
      ></van-cell>
    </van-collapse-item>
  </view>
</template>

<script>
import vanCollapseItem from '@/components/collapseItem'
import vanCell from '@/components/cell'
export default {
  components: { vanCollapseItem, vanCell },
  data () {
    return {
      menuList: [
        {
          title: '基础组件',
          children: [
            { title: 'Button 按钮', url: '/pages/button/index' },
            { title: 'Cell 单元格', url: '/pages/cell/index' },
            { title: 'Icon 图标', url: '/pages/icon/index' },
            { title: 'Popup 弹出层', url: '/pages/popup/index' }
          ]
        },
        {
          title: '表单组件',
          children: [
            { title: 'Checkbox 复选框', url: '/pages/checkBox/index' },
            { title: 'Search 搜索', url: '/pages/search/index' },
            { title: 'Switch 开关', url: '/pages/switch/index' },
            { title: 'Field 输入框', url: '/pages/field/index' }
          ]
        },
        {
          title: '展示组件',
          children: [
            { title: 'Collapse 折叠面板', url: '/pages/collapse/index' },
            { title: 'Panel 面板', url: '/pages/panel/index' },
            { title: 'Tag 标记', url: '/pages/tag/index' }
          ]
        },
        {
          title: '业务组件',
          children: [{ title: 'Card 商品卡片', url: '/pages/card/index' }]
        }
      ]
    }
  }
}
</script>
<style lang="scss">
page {
  padding: 0 30rpx;
  background-color: #ffffff;
}
.van-demo-header {
  display: flex;
  box-sizing: border-box;
  padding: 50rpx 0 22rpx 32rpx;
  align-items: center;
  .img {
    width: 72rpx;
    height: 72rpx;
  }
  .title {
    font-size: 50rpx;
    margin-left: 32rpx;
  }
}
.van-demo-desc {
  padding-left: 32rpx;
  margin-bottom: 60rpx;
  color: #7d7e80;
  font-size: 28rpx;
}
.van-collapse-rewrite {
  display: block;
  margin-bottom: 40rpx;
}
</style>
