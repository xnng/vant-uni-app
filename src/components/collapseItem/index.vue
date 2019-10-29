<template>
  <view class="van-hairline--top-bottom" @click="handleClick">
    <view
      class="van-collapse-item__title"
      :class="disabled ? 'van-collapse-item__title--disabled': ''"
    >
      <van-cell :title="title" is-link arrow-direction="down" />
    </view>
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOpen: false,
      contentHeight: 51
    }
  },
  mounted () {
    let activeCollapse
    // #ifndef H5
    activeCollapse = this.$parent.$parent.activeNames
    // #endif
    // #ifdef H5
    activeCollapse = this.$parent.$parent.value
    // #endif
    if (activeCollapse.find(item => item === this.name)) {
      this.isOpen = true
    }
    this.changeContentHeight()
  },
  methods: {
    changeContentHeight () {
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
    },
    handleClick () {
      if (this.disabled) return
      this.isOpen = !this.isOpen
      this.changeContentHeight()
    }
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
