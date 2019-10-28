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
    <van-cell title="单元格" value="内容" icon="location-o" />

    <view class="demo-title">展示箭头</view>
    <van-cell title="单元格" is-link />
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格" is-link arrow-direction="down" value="内容" />

    <view class="demo-title">页面导航</view>
    <van-cell title="URL 跳转" is-link url="/pages/button/index" />
    <van-cell title="路由跳转" is-link to="/pages/icon/index" />

    <view class="demo-title">分组标题</view>
    <van-cell-group title="分组1">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
    <van-cell-group title="分组2">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
  </view>
</template>

<script>
import vanCell from '@/components/cell'
import vanCellGroup from '@/components/cellGroup'
export default {
  components: { vanCell, vanCellGroup }
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
