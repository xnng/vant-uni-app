<template>
  <view class="van-hairline--top-bottom" @click="handleClick">
    <van-cell class="van-collapse-item__title" :title="currentTitle" is-link arrow-direction="down" />
    <view class="van-collapse-item__wrapper" :style="{height: contentHeight}">
      <view class="van-collapse-item__content">
        <slot />
      </view>
    </view>
  </view>
</template>

<script>
import vanCell from '../cell'
export default {
  components: { vanCell },
  props: {
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentName () {
      return this.name
    },
    currentTitle () {
      return this.title
    }
  },
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
