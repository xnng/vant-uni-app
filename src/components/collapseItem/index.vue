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
  computed: {
    parentAccordion () {
      // #ifndef H5
      return this.$parent.currentOpen
      // #endif

      // #ifdef H5
      // eslint-disable-next-line no-unreachable
      return this.$parent.$parent.currentOpen
      // #endif
    }
  },
  watch: {
    parentAccordion (newVal) {
      if (newVal !== '' && newVal !== this.name) {
        this.isOpen = false
        this.changeContentHeight()
      }
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
    activeCollapse = this.$parent.value
    // #endif

    // #ifdef H5
    activeCollapse = this.$parent.$parent.value
    // #endif

    if (activeCollapse instanceof Array) {
      if (activeCollapse.find(item => item === this.name)) {
        this.isOpen = true
      }
    } else {
      if (activeCollapse === this.name) {
        this.isOpen = true
      }
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

      // toggle accordion
      // #ifndef H5
      if (this.$parent.accordion) {
        this.$parent.switch(this.name)
      }
      // #endif

      // #ifdef H5
      if (this.$parent.$parent.accordion) {
        this.$parent.$parent.switch(this.name)
      }
      // #endif
    }
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
