<template>
  <view :class="[title&&'van-switch-cell']" >
    <text style="fontSize:16px">{{title}}</text>
    <view
      role="switch"
      aria-checked="true"
      class="van-switch"
      :class="[switchData&&'van-switch--on',disabled&&'van-switch--disabled']"
      :style="{
          fontSize:size,
          backgroundColor:switchData?activeColor:'#fff',
      }"
      @click="switchChange"
    >
      <view class="van-switch__node"></view>
    </view>
  </view>
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: Boolean,
    disabled: Boolean,
    loading: Boolean,
    size: String,
    activeColor: String,
    title: String
  },
  watch: {
    value: {
      handler (newName, oldName) {
        this.switchData = newName
      },
      immediate: true
    }
  },
  data () {
    return {
      switchData: false
    }
  },
  methods: {
    switchChange () {
      if (this.disabled) {
        return
      }
      this.switchData = !this.switchData
      this.$emit('change', this.switchData)
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';
</style>
