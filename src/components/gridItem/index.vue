<template>
  <div class="van-grid-item" :style="{ width: 100/columnNum+'%'}">
    <div class="van-grid-item__content van-grid-item__content--center van-hairline">
      <vanIcon class="van-icon van-icon-photo-o van-grid-item__icon">
        <!---->
      </vanIcon>
      <slot name="a"></slot>
      <span class="van-grid-item__text">文字</span>
    </div>
  </div>
</template>
<script>
import vanIcon from '@/components/icon'
export default {
  components: {
    vanIcon
  },
  props: {
    dot: Boolean,
    text: String,
    icon: String,
    info: [Number, String]
  },
  data () {
    return {
      columnNum: 4
    }
  },
  mounted () {
    this.columnNum = this.$parent.columnNum
    console.log(this.$parent.columnNum)
  }
}
</script>
<style lang="scss">
  @import './index.scss';
  img{
    width: 100%;
    height: 100%;
  }
  image{
    width: 100%;
    height: 100%;

  }
</style>
