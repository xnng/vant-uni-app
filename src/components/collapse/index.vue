<template>
  <view class="van-hairline--top-bottom" @click="handleClick">
    <van-cell class="van-collapse-item__title" title="标题1" is-link arrow-direction="down" />
    <view class="van-collapse-item__wrapper" :style="{height: contentHeight}">
      <view class="van-collapse-item__content">
        <p>代码是写出来给人看的，附带能在机器上运行</p>
        <p>代码是写出来给人看的，附带能在机器上运行</p>
        <p>代码是写出来给人看的，附带能在机器上运行</p>
        <p>代码是写出来给人看的，附带能在机器上运行</p>
        <p>代码是写出来给人看的，附带能在机器上运行</p>
        <p>代码是写出来给人看的，附带能在机器上运行</p>
        <p>代码是写出来给人看的，附带能在机器上运行</p>
        <p>代码是写出来给人看的，附带能在机器上运行</p>
      </view>
    </view>
  </view>
</template>

<script>
import vanCell from '../cell'
// import vanIcon from '../icon'
export default {
  components: { vanCell },
  data () {
    return {
      isOpen: false,
      contentHeight: 0
    }
  },
  methods: {
    handleClick () {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        const query = uni.createSelectorQuery().in(this)
        query
          .select('.van-collapse-item__content')
          .boundingClientRect(data => {
            this.contentHeight = `${data.height}px`
          })
          .exec()
      } else {
        this.contentHeight = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
