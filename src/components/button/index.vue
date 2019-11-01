<template>
  <button
    class="van-button"
    :class="[
      `van-button--${type}`,
      `van-button--${size}`,
      plain ? 'van-button--plain': '',
      hairline ? 'van-button--hairline' : '',
      disabled ? 'van-button--disabled' : '',
      square ? 'van-button--square' : '',
      round ? 'van-button--round' : ''

    ]"
    :style="{ background: customColor.background, color: customColor.color, borderColor: customColor.borderColor }"
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
    }
  },
  data () {
    return {
      customColor: {
        background: '',
        color: '',
        borderColor: ''
      }
    }
  },
  mounted () {
    if (!this.color) return
    this.borderColor = {
      background: this.plain ? 'white' : this.color,
      color: this.plain ? this.color : 'white',
      borderColor: this.color
    }
    if (this.color.indexOf('gradient') !== -1) {
      this.borderColor.border = 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
