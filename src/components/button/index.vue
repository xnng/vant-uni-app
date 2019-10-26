<template>
  <button
    class="van-button"
    :class="[
      `van-button--${type}`,
      `van-button--${size}`,
      `${plain ? 'van-button--plain': ''}`,
      `${hairline ? 'van-button--hairline' : ''}`,
      `${disabled ? 'van-button--disabled' : ''}`,
      `${square ? 'van-button--square' : ''}`,
      `${round ? 'van-button--round' : ''}`
    ]"
    <!-- #ifdef H5 -->
    :style="customColor(color)"
    <!-- #endif -->
  >
    <slot />
    <image></image>
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
  methods: {
    customColor (color) {
      if (!color) return
      const style = {
        background: this.plain ? 'white' : color,
        color: this.plain ? color : 'white',
        borderColor: color
      }
      if (color.indexOf('gradient') !== -1) {
        style.border = 0
      }

      return style
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
