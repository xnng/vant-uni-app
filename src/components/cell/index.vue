<template>
  <view
    class="van-cell"
    :class="[hasLink &&  'van-cell--clickable',required && 'van-cell--required']"
    @click="handleClick"
  >
    <!-- left-icon -->
    <van-icon class="van-cell__left-icon" v-if="icon" :name="icon" />

    <!-- title -->
    <view
      v-if="!isOnlyHasValue()"
      class="van-cell__title"
      :class="[size === 'large' ? 'van-cell--large': '', titleClass && titleClass]"
    >
      <view>
        <slot v-if="$slots.title" name="title" />
        <block v-else-if="title">{{title}}</block>
      </view>
      <!-- label -->
      <view
        v-if="label || $slots.label"
        class="van-cell__label"
        :class="[size === 'large' ? 'van-cell--large': '', labelClass]"
      >
        <slot v-if="$slots.label" name="label" />
        <block v-else-if="label">{{label}}</block>
      </view>
    </view>

    <!-- value -->
    <view
      class="van-cell__value"
      :class="[isOnlyHasValue() ? 'van-cell--alone': '', valueClass]"
    >
      <slot v-if="$slots.default" name="default" />
      <block v-else-if="value">{{value}}</block>
    </view>
    <!-- right-icon -->
    <view v-if="$slots['right-icon']" class="van-cell__right-icon">
      <slot name="right-icon" />
    </view>
    <van-icon
      class="van-cell__right-icon"
      v-if="hasLink"
      :name="arrowDirection === 'down' ? 'arrow-down': arrowDirection"
    />
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
    valueClass: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
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
    },
    arrowDirection: {
      type: String,
      default: 'arrow'
    },
    url: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    isLink: {
      type: Boolean,
      default: false
    },
    titleClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasLink () {
      return this.isLink
    }
  },
  methods: {
    isOnlyHasValue () {
      if (!this.title && !this.label && !this.$slots.title && !this.$slots.label) {
        return true
      }
    },
    handleClick () {
      this.$emit('click')
      if (this.url) {
        uni.navigateTo({
          url: this.url
        })
      }
      if (this.to) {
        uni.redirectTo({
          url: this.to
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import './index.scss';
__van-cell {
  background-color: red;
}
</style>
