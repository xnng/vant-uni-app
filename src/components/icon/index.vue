<template>
  <i class="van-icon" :class="[imageIcon?'':`van-icon-${name}`]">
    <view v-if="this.dot" class="dot">
      <view style="position:relative">
        <text class="text">{{info}}</text>
      </view>
    </view>
    <image v-if="imageIcon" fit="contain" :src="name" />
  </i>
</template>
<script>
export default {
  props: {
    name: String, // 图标名称或图片链接
    // dot&info小程序挂了
    dot: Boolean, //  是否显示图标右上角小红点
    info: {
      type: [String, Number],
      default: 1 // 图标右上角徽标的内容
    }
  },
  data () {
    return {
      imageIcon: false
    }
  },
  mounted () {
    this.imageIcon = this.isImage(this.name)
  },
  methods: {
    isImage (name) {
      return name ? name.indexOf('/') !== -1 : false
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';

/* .iComponent {
  text-align: center;
  margin: auto;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  i {
    padding-top: 14px;
    width: 100%;
    height: 100%;
  }
  .dot {
    position: absolute;
    top: 0;
    right: -5px;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: red;
    .text {
      font-size: 16px;
      color: #fff;
      height: 23px;
      line-height: 23px;
      margin: auto;
      display: block;
      text-align: center;
    }
  }
} */
</style>
