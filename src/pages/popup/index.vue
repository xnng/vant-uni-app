<template>
  <view>
    <van-cell-group title="基础用法">
      <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    </van-cell-group>
    <van-popup v-model="show">内容</van-popup>

    <van-cell-group title="弹出位置" style="margin-top: 20rpx">
      <van-cell is-link @click="showPopupPosition('top')">顶部弹出</van-cell>
      <van-cell is-link @click="showPopupPosition('bottom')">底部弹出</van-cell>
      <van-cell is-link @click="showPopupPosition('left')">左侧弹出</van-cell>
      <van-cell is-link @click="showPopupPosition('right')">右侧弹出</van-cell>
    </van-cell-group>
    <van-popup v-model="showPosition" :position="position" height="20%" />

    <van-cell-group title="圆角弹窗" style="margin-top: 20rpx">
      <van-cell is-link @click="showPopupRound">圆角弹窗</van-cell>
    </van-cell-group>
    <van-popup v-model="showPositionRound" position="bottom" round height="20%" />

    <van-cell-group title="关闭图标" style="margin-top: 20rpx">
      <van-cell is-link @click="showPopupIcon">关闭图标</van-cell>
      <van-cell is-link @click="showPopupSelfIcon">自定义图标</van-cell>
    </van-cell-group>
    <van-popup v-model="showIcon" closeable position="bottom" height="20%" />
    <van-popup v-model="showSelfIcon" closeable position="bottom" close-icon="close" height="20%" />
  </view>
</template>

<script>
import vanCell from '@/components/cell'
import vanCellGroup from '@/components/cellGroup'
import vanPopup from '@/components/popup'
export default {
  components: { vanCell, vanCellGroup, vanPopup },
  data () {
    return {
      show: false,
      showPosition: false,
      showPositionRound: false,
      showIcon: false,
      showSelfIcon: false,
      position: ''
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    showPopupPosition (val) {
      this.position = val
      this.showPosition = true
    },
    showPopupRound () {
      this.showPositionRound = true
    },
    showPopupIcon () {
      this.showIcon = true
    },
    showPopupSelfIcon () {
      this.showSelfIcon = true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
