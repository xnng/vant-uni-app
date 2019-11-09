<template>
  <view>
    <van-cell :required="required" value titleClass="van-field__label" :icon="leftIcon && leftIcon">
      <view slot="title" v-if="label">{{label}}</view>
      <view slot="right-icon" v-if="rightIcon" class="van-field__right-icon" @click="clickIcon">
        <van-icon name="question-o"></van-icon>
      </view>
      <view class="van-field__body">
        <input
          class="van-field__control"
          :disabled="disabled || readonly"
          :class="[disabled && 'van-field__control--disabled']"
          :type="type ? type : 'text'"
          :placeholder="placeholder"
          @input="handleInput"
          :value="currentValue"
          @focus="handleFocus"
          @blur="handleBlur"
          @click="handleClickInput"
        />
        <van-icon
          v-if="clearable && showClearable"
          name="clear"
          class="van-field__clear"
          @click="clickClearIcon"
        ></van-icon>
        <view class="van-field__button">
          <slot name="button" />
        </view>
      </view>
    </van-cell>
  </view>
</template>

<script>
import vanCell from '../cell'
import vanIcon from '../icon'
export default {
  components: { vanCell, vanIcon },
  data() {
    return {
      showClearable: false,
      currentValue: ''
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: ''
    },
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
  watch: {
    value() {
      this.currentValue = this.value
    }
  },
  mounted() {
    this.currentValue = this.value
  },
  methods: {
    handleInput(e) {
      this.currentValue = e.target.value
      this.$emit('input', e.target.value)
      if (this.currentValue) {
        this.showClearable = true
      } else {
        this.showClearable = false
      }
    },
    clickIcon() {
      this.$emit('click-right-icon')
    },
    handleClickInput(e) {
      e.preventDefault()
      this.$emit('click')
    },
    handleBlur() {
      setTimeout(() => {
        this.showClearable = false
      }, 500)
      this.$emit('blur')
    },
    clickClearIcon() {
      this.currentValue = ''
      this.$emit('input', '')
    },
    handleFocus() {
      this.$emit('focus')
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
