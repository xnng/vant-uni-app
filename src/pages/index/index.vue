<template>
  <view>
    <van-button type="default">按钮</van-button>
  </view>
</template>

<script>
import { vanButton } from '@/components'
export default {
  components: { vanButton },
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {},
  methods: {}
}
</script>