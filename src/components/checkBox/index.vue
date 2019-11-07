<template>
  <view class="van-checkbox custom-class">
    <view role="checkbox" aria-checked="true" class="van-checkbox">
      <view
        v-if='!useIconSlot'
        class="van-checkbox__icon"
        :class="[status ? 'van-checkbox__icon--checked' : '', disabled ? 'van-checkbox__icon--disabled' : '','van-checkbox__icon--'+shape]"
        @click="onChange"
      >
        <van-icon
          class="van-checkbox--icon"
          :style="{backgroundColor:status?checkedColor:''}"
          name="success"
        >
          <!---->
        </van-icon>

      </view>
         <view v-if='useIconSlot'  class="van-checkbox--icon"   @click="onChange" :style="{width:iconSize,height:iconSize}">
          <slot name="icon"></slot>
        </view>
      <text
        class="van-checkbox__label"
        :class="disabled?'van-checkbox__label--disabled':''"
        @click="onChange"
      >
        <slot></slot>
      </text>
    </view>
  </view>
</template>
<script>
import vanIcon from '../icon'
export default {
  components: {
    vanIcon
  },
  props: {
    value: [Boolean, Array],
    disabled: Boolean,
    useIconSlot: Boolean,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean,
    name: {
      type: String,
      default: ''
    },
    shape: {
      type: String,
      default: 'round'
    },
    iconSize: {
      type: [String, Number]
    }
  },
  data () {
    return {
      status: false
    }
  },
  watch: {
    status: {
      handler (value) {
        this.status = value
      },
      immediate: true
    }
  },
  mounted () {
    this.status = this.value
  },
  methods: {
    onChange (e) {
      if (this.name) {
        // #ifdef   MP-WEIXIN
        if (this.$parent.switch(this.name)) {
          this.status = !this.status
        }
        // #endif
        // #ifndef   MP-WEIXIN
        if (this.$parent.$parent.switch(this.name)) {
          this.status = !this.status
        }
        // #endif
      }

      if (!this.disabled) {
        this.status = !this.status
        let i = false
        if (this.useIconSlot)i = false
        this.$emit('change', this.status, i)
      }
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';
.slot-icon {
  width: 10px;
  height: 10px;
  background-color: #000;
}
</style>
