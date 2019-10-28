<template>
  <view>
    <view class="demo-title">基础用法</view>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item>
    </van-collapse>
  </view>
</template>

<script>
import vanCollapse from '@/components/collapse'
export default {
  components: { vanCollapse },
  data () {
    return {
      activeNames: ['1']
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-title {
  font-size: 14px;
  padding-left: 16px;
  padding-top: 15px;
  margin-bottom: 10px;
  color: rgba(69, 90, 100, 0.6);
}
</style>
