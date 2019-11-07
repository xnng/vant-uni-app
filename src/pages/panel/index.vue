<template>
  <view>
    <van-cell-group title="基础用法">
      <van-panel title="标题" desc="描述信息" status="状态">
        <div class="value">内容</div>
      </van-panel>
    </van-cell-group>

    <van-cell-group title="高级用法" style="margin-top: 20rpx">
      <van-panel title="标题" desc="描述信息" status="状态">
        <div class="value">内容</div>
        <view slot="footer" class="demo-panel__footer">
          <van-button size="small">按钮</van-button>
          <van-button size="small" type="danger">按钮</van-button>
        </view>
      </van-panel>
    </van-cell-group>
  </view>
</template>

<script>
import vanCellGroup from '@/components/cellGroup'
import vanPanel from '@/components/panel'
import vanButton from '@/components/button'
export default {
  components: { vanPanel, vanCellGroup, vanButton }
}
</script>

<style lang="scss" scoped>
.value {
  font-size: 16px;
}
</style>
