<template>
  <view class="van-panel">
    <van-cell value-class="van-panel__header-value" :title="title" :value="status" :label="desc"></van-cell>
    <view class="van-panel__content">
      <slot />
    </view>
    <view v-if="$slots.footer" class="van-panel__footer van-hairline--top">
      <slot name="footer" />
    </view>
  </view>
</template>

<script>
import vanCell from '../cell'

export default {
  components: { vanCell },
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
