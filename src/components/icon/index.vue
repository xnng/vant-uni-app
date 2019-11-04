<template>
  <i class="van-icon" :class="[imageIcon?'':`van-icon-${name}`]" @click="closeTag">
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
    },
    closeTag () {
      this.$emit('closeTag', this.name)
    }

  }
}
</script>
<style lang="scss">
@import './index.scss';
.dot {
  position: absolute;
  top: -13px;
  right: -5px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: red;
  .text {
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    height: 23px;
    line-height: 21px;
    margin: auto;
    display: block;
    text-align: center;
  }
}
</style>
