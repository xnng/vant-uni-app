<template>
  <view>
    <van-cell :required="required" value="" titleClass="van-field__label">
      <view slot="title" v-if="label">{{label}}</view>
      <view slot="right-icon" v-if="rightIcon" class="van-field__right-icon" @click="clickIcon">
        <van-icon name="question-o"></van-icon>
      </view>
      <view class="van-field__body">
        <input class="van-field__control" type="text" :placeholder="placeholder" @input="handleInput" :value="currentValue" @focus="handleFocus" @blur="handleBlur">
        <van-icon v-if="clearable && showClearable" name="clear" class="van-field__clear"></van-icon>
      </view>
    </van-cell>
  </view>
</template>

<script>
import vanCell from '../cell'
import vanIcon from '../icon'
export default {
  components: { vanCell, vanIcon },
  data () {
    return {
      showClearable: false,
      currentValue: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
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
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.currentValue = this.value
  },
  methods: {
    handleInput (e) {
      this.currentValue = e.target.value
      this.$emit('input', e.target.value)
      if (this.currentValue) {
        this.showClearable = true
      } else {
        this.showClearable = false
      }
    },
    clickIcon () {
      this.$emit('click-right-icon')
    },
    handleBlur () {
      this.showClearable = false
    },
    handleFocus () {
      if (this.currentValue) {
        this.showClearable = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
