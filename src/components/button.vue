<template>
  <button :class="`van-btn-${type}`">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
.vant-btn-default {
  width: 100%;
}
</style>
