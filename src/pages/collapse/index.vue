<template>
  <view>
    <view class="demo-title">基础用法</view>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="标题1" name="1">代码是写出来给人看的，附带能在机器上运行</van-collapse-item>
      <van-collapse-item title="标题2" name="2">代码是写出来给人看的，附带能在机器上运行</van-collapse-item>
      <van-collapse-item title="标题3" name="3" disabled>代码是写出来给人看的，附带能在机器上运行</van-collapse-item>
    </van-collapse>
  </view>
</template>

<script>
import vanCollapseItem from '@/components/collapseItem'
import vanCollapse from '@/components/collapse'
export default {
  components: { vanCollapseItem, vanCollapse },
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
