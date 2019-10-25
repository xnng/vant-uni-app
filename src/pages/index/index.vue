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
  </view>
</template>

<script>
import { vanButton } from '@/components'
export default {
  components: { vanButton },
  data() {
    return {
      title: 'Hello'
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 14px;
  padding: 25px 15px 5px 15px;
  color: rgba(69, 90, 100, 0.6);
}
.btn {
  width: 88px;
  margin-top: 10px;
  margin-left: 15px;
}
</style>

<style lang="scss">
</style>