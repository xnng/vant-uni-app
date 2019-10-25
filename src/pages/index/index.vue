<template>
  <view>
    <view class="title">按钮类型</view>
    <van-button class="btn" type="default">默认按钮</van-button>
    <van-button class="btn" type="primary">主要按钮</van-button>
    <van-button class="btn" type="info">信息按钮</van-button>
    <van-button class="btn" type="danger">危险按钮</van-button>
    <van-button class="btn" type="warning">警告按钮</van-button>

    <view class="title">朴素按钮</view>
    <van-button class="btn" plain type="primary">朴素按钮</van-button>
    <van-button class="btn" plain type="info">朴素按钮</van-button>

    <view class="title">细边框</view>
    <van-button class="btn" plain hairline type="primary">细边框按钮</van-button>
    <van-button class="btn" plain hairline type="info">细边框按钮</van-button>

    <view class="title">按钮尺寸</view>
    <van-button class="btn" type="primary" size="large">大号按钮</van-button>
    <van-button class="btn" type="primary" size="normal">普通按钮</van-button>
    <van-button class="btn" type="primary" size="small">小型按钮</van-button>
    <van-button class="btn" type="primary" size="mini">迷你按钮</van-button>
  </view>
</template>

<script>
import vanButton from 'vant-uni-app/lib/button'
export default {
  components: { vanButton }
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 14px;
  padding-top: 15px;
  color: rgba(69, 90, 100, 0.6);
}
.btn {
  margin-top: 10px;
  margin-right: 15px;
}
</style>

<style lang="scss">
page {
  box-sizing: border-box;
  padding: 0 15px;
}
</style>