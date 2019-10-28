<template>
<view class="van-cell-group">
  <view class="van-cell-group__title" v-if="title">{{title}}</view>
  <slot />
</view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/var';

.van-cell-group {
  background-color: $cell-group-background-color;

  &__title {
    padding: $cell-group-title-padding;
    color: $cell-group-title-color;
    font-size: $cell-group-title-font-size;
    line-height: $cell-group-title-line-height;
  }
}
</style>
