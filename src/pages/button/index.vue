<template>
  <view class="page-container">
    <view class="demo-title">按钮类型</view>
    <view class="demo-row">
      <van-button class="demo-margin-right" type="default">默认按钮</van-button>
      <van-button class="demo-margin-right" type="primary">主要按钮</van-button>
      <van-button class="demo-margin-right" type="info">信息按钮</van-button>
    </view>
    <van-button class="demo-margin-right" type="danger">危险按钮</van-button>
    <van-button class="demo-margin-right" type="warning">警告按钮</van-button>

    <view class="demo-title">朴素按钮</view>
    <van-button class="demo-margin-right" plain type="primary">朴素按钮</van-button>
    <van-button class="demo-margin-right" plain type="info">朴素按钮</van-button>

    <view class="demo-title">细边框</view>
    <van-button class="demo-margin-right" plain hairline type="primary">细边框按钮</van-button>
    <van-button class="demo-margin-right" plain hairline type="info">细边框按钮</van-button>

    <view class="demo-title">禁用状态</view>
    <van-button class="demo-margin-right" disabled type="primary">禁用状态</van-button>
    <van-button class="demo-margin-right" disabled type="info">禁用状态</van-button>

    <view class="demo-title">按钮形状</view>
    <van-button class="demo-margin-right" square type="primary">方形按钮</van-button>
    <van-button class="demo-margin-right" round type="info">圆形按钮</van-button>

    <view class="demo-title">按钮尺寸</view>
    <view class="demo-row">
      <van-button class="demo-margin-right" type="primary" size="large" @click="handleClick">大号按钮</van-button>
    </view>
    <van-button class="demo-margin-right" type="primary" size="normal">普通按钮</van-button>
    <van-button class="demo-margin-right" type="primary" size="small">小型按钮</van-button>
    <van-button class="demo-margin-right" type="primary" size="mini">迷你按钮</van-button>

    <view class="demo-title">页面导航</view>
    <van-button class="demo-margin-right" type="primary" url="/pages/index/index">URL 跳转</van-button>
    <van-button class="demo-margin-right" type="primary" to="/pages/index/index">路由跳转</van-button>

    <view class="demo-title">自定义颜色</view>
    <van-button class="demo-margin-right" color="#7232dd">单色按钮</van-button>
    <van-button class="demo-margin-right" color="#7232dd" plain>单色按钮</van-button>
    <van-button class="demo-margin-right" color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</van-button>
  </view>
</template>

<script>
import vanButton from '@/components/button'
export default {
  components: { vanButton },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  }
}
</script>
<style lang="scss" scoped>
.demo-title {
  font-size: 14px;
  padding-top: 15px;
  margin-bottom: 10px;
  color: rgba(69, 90, 100, 0.6);
}
.demo-row {
  margin-bottom: 10px;
}
.demo-margin-right {
  margin-right: 15px;
}
.page-container {
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 0 30rpx 30rpx 30rpx;
}
</style>
