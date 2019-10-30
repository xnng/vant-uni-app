<template>
  <view>
    <view class="van-demo-header">
      <img class="img" src="https://img.yzcdn.cn/vant/logo.png" />
      <text class="title">Vant uni-app</text>
    </view>
    <view class="van-demo-desc">轻量、可靠、适配小程序的 uni-app 组件库</view>

    <van-collapse-item title="基础组件" class="van-collapse-rewrite">
      <van-cell title="Button 按钮" is-link url="/pages/button/index"></van-cell>
      <van-cell title="Cell 单元格" is-link url="/pages/cell/index"></van-cell>
      <van-cell title="Icon 图标" is-link url="/pages/icon/index"></van-cell>
      <van-cell title="Popup 弹出层" is-link></van-cell>
    </van-collapse-item>

    <van-collapse-item title="表单组件" class="van-collapse-rewrite">
      <van-cell title="Checkbox 复选框" is-link url="/pages/checkBox/index"></van-cell>
      <van-cell title="DatetimePicker 时间选择" is-link></van-cell>
      <van-cell title="Field 输入框" is-link></van-cell>
      <van-cell title="Picker 选择器" is-link></van-cell>
      <van-cell title="Radio 单选框" is-link></van-cell>
      <van-cell title="Search 搜素" is-link></van-cell>
      <van-cell title="Stepper 步进器" is-link></van-cell>
      <van-cell title="Switch 开关" is-link></van-cell>
      <van-cell title="SwitchCell 开关单元格" is-link></van-cell>
      <van-cell title="Uploader 文件上传" is-link></van-cell>
    </van-collapse-item>

    <van-collapse-item title="反馈组件" class="van-collapse-rewrite">
      <van-cell title="ActionSheet 上拉菜单" is-link></van-cell>
      <van-cell title="Dialog 弹出框" is-link></van-cell>
      <van-cell title="DropdownMenu 下拉菜单" is-link></van-cell>
      <van-cell title="Loading 加载" is-link></van-cell>
      <van-cell title="Toast 轻提示" is-link></van-cell>
    </van-collapse-item>

    <van-collapse-item title="展示组件" class="van-collapse-rewrite">
      <van-cell title="Collapse 折叠面板" is-link url="/pages/collapse/index"></van-cell>
      <van-cell title="CountDown 倒计时" is-link></van-cell>
      <van-cell title="Pannel 面板" is-link></van-cell>
      <van-cell title="Swipe 轮播" is-link></van-cell>
      <van-cell title="Tag 标记" is-link></van-cell>
    </van-collapse-item>

    <van-collapse-item title="导航组件" class="van-collapse-rewrite">
      <van-cell title="NavBar 导航栏" is-link></van-cell>
      <van-cell title="Pagination 分页" is-link></van-cell>
      <van-cell title="Sidebar 侧边导航" is-link></van-cell>
      <van-cell title="Tab 标签页" is-link></van-cell>
      <van-cell title="TreeSelect 分类选择" is-link></van-cell>
    </van-collapse-item>

    <van-collapse-item title="业务组件" class="van-collapse-rewrite">
      <van-cell title="AddressEdit 地址编辑" is-link></van-cell>
      <van-cell title="AddressList 地址列表" is-link></van-cell>
    </van-collapse-item>
  </view>
</template>

<script>
import vanCollapseItem from '@/components/collapseItem'
import vanCell from '@/components/cell'
export default {
  components: { vanCollapseItem, vanCell },
  methods: {
    testClick () {
      console.log('test')
    }
  }
}
</script>
<style lang="scss">
page {
  padding: 0 30rpx;
  background-color: #f3f3f8;
}
.van-demo-header {
  display: flex;
  box-sizing: border-box;
  padding: 32px 0 16px 16px;
  align-items: center;
  .img {
    width: 36px;
    height: 36px;
  }
  .title {
    font-size: 50rpx;
    font-weight: bold;
    margin-left: 16px;
  }
}
.van-demo-desc {
  padding-left: 16px;
  margin-bottom: 30px;
  color: #7d7e80;
  font-size: 14px;
}
.van-collapse-rewrite {
  display: block;
  margin-bottom: 20rpx;
}
</style>
