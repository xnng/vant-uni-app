<template>
  <div class="van-grid" >
    <slot  ></slot>
  </div>
</template>
<script>
export default {
  mounted () {
  },
  props: {
    square: Boolean,
    gutter: [Number, String],
    iconSize: [Number, String],
    clickable: Boolean,
    columnNum: {
      type: Number,
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  }

}
</script>
<style lang="scss">
  @import "./index.scss"
</style>
