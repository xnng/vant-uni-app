<template>
  <view>
    <slot ></slot>
  </view>
</template>
<script>
export default {
  props: {
    max: [Number, String],
    disabled: Boolean,
    iconSize: [Number, String],
    checkedColor: String,
    value: {
      type: Array,
      default: () => []
    },
    child: String
  },
  data () {
    return {
      arr: []
    }
  },
  mounted () {
    uni.$on('result', (name) => {
      if (this.arr.includes(name)) {
        this.arr.pop(name)
      } else {
        (
          this.arr.push(name)
        )
      }
      console.log(this.arr)
      uni.$emit('change', this.arr)
    })
  }

}
</script>
