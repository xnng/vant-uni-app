<template>
  <view>
    <view class="demo-title">基础用法</view>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />

    <view class="demo-title">单元格大小</view>
    <van-cell title="单元格" value="内容" size="large" />
    <van-cell title="单元格" value="内容" size="large" label="描述信息" />

    <view class="demo-title">只设置 value</view>
    <van-cell value="内容" />

    <view class="demo-title">展示图标</view>
    <van-cell title="单元格" icon="location-o" />
  </view>
</template>

<script>
import vanCell from '@/components/cell'
export default {
  components: { vanCell }
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
