<template>
  <button
    class="van-button"
    :class="[
      `van-button--${type}`,
      `van-button--${size}`,
      `${plain ? 'van-button--plain': ''}`,
      `${hairline ? 'van-button--hairline' : ''}`
    ]"
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
    }
  },
  methods: {
    getHoverClass(type) {
      if (type === 'default') {
        return 'van-btn-default-hover'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
