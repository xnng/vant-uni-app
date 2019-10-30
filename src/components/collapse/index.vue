<template>
  <view>
    <slot></slot>
  </view>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Array],
      default: ''
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentOpen: ''
    }
  },
  methods: {
    switch (name) {
      this.currentOpen = name
    }
  }
}
</script>
