<template>
  <view>
    <van-cell value="">
      <view slot="label" v-if="label">{{label}}</view>
      <view slot="right-icon" v-if="rightIcon">
        <van-icon name="question-o"></van-icon>
      </view>
      <view class="van-field__body">
        <input class="van-field__control" type="text" :placeholder="placeholder" @input="handleInput">
      </view>
    </van-cell>
  </view>
</template>

<script>
import vanCell from '../cell'
import vanIcon from '../icon'
export default {
  components: { vanCell, vanIcon },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
