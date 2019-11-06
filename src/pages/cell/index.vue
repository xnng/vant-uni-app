<template>
  <view class="page-container">
    <view class="demo-title">基础用法</view>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>

    <view class="demo-title">单元格大小</view>
    <view>
      <van-cell title="单元格" value="内容" size="large" />
      <van-cell title="单元格" value="内容" size="large" label="描述信息" />
    </view>

    <view class="demo-title">只设置 value</view>
    <view>
      <van-cell value="内容" />
    </view>

    <view class="demo-title">展示图标</view>
    <view>
      <van-cell title="单元格" value="内容" icon="location-o" />
    </view>

    <view class="demo-title">展示箭头</view>
    <view>
      <van-cell title="单元格" is-link />
      <van-cell title="单元格" is-link value="内容" />
      <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
    </view>

    <view class="demo-title">页面导航</view>
    <view>
      <van-cell title="URL 跳转" is-link url="/pages/button/index" />
      <van-cell title="路由跳转" is-link to="/pages/icon/index" />
    </view>

    <view class="demo-title">分组标题</view>
    <van-cell-group title="分组1">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
    <van-cell-group title="分组2">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>

    <view class="demo-title">使用插槽</view>
    <view>
      <van-cell value="内容" is-link>
        <template slot="title">
          <span class="custom-title">单元格</span>
          <!-- <van-tag type="danger">标签</van-tag> -->
        </template>
      </van-cell>

      <van-cell title="单元格" icon="shop-o">
        <van-icon slot="right-icon" name="search" style="line-height: inherit;" />
      </van-cell>
    </view>
  </view>
</template>

<script>
import vanCell from '@/components/cell'
import vanCellGroup from '@/components/cellGroup'
import vanIcon from '@/components/icon'
export default {
  components: { vanCell, vanCellGroup, vanIcon }
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
.page-container {
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
  box-sizing: border-box;
  padding-bottom: 30rpx;
}
</style>
