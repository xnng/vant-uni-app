<template>
  <view>
    <slot></slot>
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
    this.$on('result', name => {})
  },
  methods: {
    switch (name) {
      if (this.arr.includes(name)) {
        let index = this.arr.indexOf(name)
        if (index > -1) {
          this.arr.splice(index, 1)
        }
      } else {
        if (this.max > 0 && this.max === this.arr.length) {
          this.$emit('change', this.arr)
          return true
        }
        this.arr.push(name)
      }
      this.$emit('change', this.arr)
    }
  }
}
</script>
