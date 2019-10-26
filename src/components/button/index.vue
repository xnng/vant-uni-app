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
    :style="`color: ${customColor.borderColor}`"
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
  data() {
    return {
      customColor: { background: 'red', color: 'red', borderColor: 'red' },
    }
  },
  methods: {
    // customColor() {
    //   const color = this.color
    //   if (!color) return
    //   const style = {
    //     background: this.plain ? 'white' : color,
    //     color: this.plain ? color : 'white',
    //     borderColor: color
    //   }
    //   if (color.indexOf('gradient') !== -1) {
    //     style.border = 0
    //   }
    //   return style
    // }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
