<template>
  <view class="van-cell">
    <!-- title -->
    <view
      v-if="!isOnlyHasValue()"
      class="van-cell__title"
      :class="`${size === 'large' ? 'van-cell--large': '' }`"
    >
      <view>
        <van-icon class="van__left-icon" v-if="icon" :name="icon" />
        <slot v-if="$slots.title" name="title" />
        <block v-else-if="title">{{title}}</block>
      </view>
      <!-- label -->
      <view
        v-if="label || $slots.label"
        class="van-cell__label"
        :class="`${size === 'large' ? 'van-cell--large': '' }`"
      >
        <slot v-if="$slots.label" name="label" />
        <block v-else-if="label">{{label}}</block>
      </view>
    </view>

    <!-- value -->
    <view class="van-cell__value" :class="`${isOnlyHasValue() ? 'van-cell--alone': '' }`">
      <slot v-if="$slots.default" name="default" />
      <block v-else-if="value">{{value}}</block>
    </view>
  </view>
</template>

<script>
import vanIcon from '../icon'
export default {
  components: { vanIcon },
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    isOnlyHasValue () {
      if (!this.title && !this.label && !this.$slots.title && !this.$slots.label) {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/var.scss';
.van-cell {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: $cell-vertical-padding $cell-horizontal-padding;
  overflow: hidden;
  color: $cell-text-color;
  font-size: $cell-font-size;
  line-height: $cell-line-height;
  background-color: $cell-background-color;

  &:not(:last-child)::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: $padding-md;
    border-bottom: 1px solid $cell-border-color;
    transform: scaleY(0.5);
  }

  &--alone {
    color: $text-color !important;
    text-align: left !important;
  }

  &__title,
  &__value {
    flex: 1;
  }

  &__value {
    position: relative;
    overflow: hidden;
    color: $cell-value-color;
    text-align: right;
    vertical-align: middle;
  }

  &__label {
    margin-top: $cell-label-margin-top;
    color: $cell-label-color;
    font-size: $cell-label-font-size;
    line-height: $cell-label-line-height;
  }

  &--large {
    &.van-cell__title {
      font-size: $cell-large-title-font-size;
    }

    &.van-cell__label {
      font-size: $cell-large-label-font-size;
    }
  }

  &__left-icon,
  &__right-icon {
    min-width: 20rpx;
    height: $cell-line-height;
    font-size: $cell-icon-size;
    line-height: $cell-line-height;
  }

  &__left-icon {
    margin-right: 5px;
  }

  &__right-icon {
    margin-left: 5px;
    color: $cell-right-icon-color;
  }
}
</style>
