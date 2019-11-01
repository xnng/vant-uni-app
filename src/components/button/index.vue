<template>
  <button
    @click="handleClick"
    class="van-button"
    :class="[
      `van-button--${type}`,
      `van-button--${size}`,
      plain && 'van-button--plain',
      hairline && 'van-button--hairline',
      disabled && 'van-button--disabled',
      square && 'van-button--square',
      round &&'van-button--round'
    ]"
    :style="{
      background: currentBackground,
      color: currentColor,
      borderColor: currentBorderColor
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    plain: {
      type: Boolean,
      default: false
    },
    hairline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentBackground: '',
      currentColor: '',
      currentBorderColor: ''
    }
  },
  mounted () {
    if (!this.color) return

    this.currentBackground = this.plain ? 'white' : this.color
    this.currentColor = this.plain ? this.color : 'white'
    this.currentBorderColor = this.color
    if (this.color.indexOf('gradient') !== -1) {
      this.border = 0
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
      if (this.url) {
        uni.navigateTo({ url: this.url })
      }
      if (this.to) {
        uni.redirectTo({ url: this.to })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
