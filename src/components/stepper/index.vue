<template>
  <div>
    <div class="van-stepper">
      <button
        class="van-stepper__minus"
        :class="{'van-stepper__minus--disabled':unmin}"
        @click="changeNum(0)"
         :style="{width:buttonSize}"
      ></button>
      <input
        type="number"
        role="spinbutton"
        class="van-stepper__input"
         v-model = myValue
        :disabled=disabled
        :style="{width:inputWidth}"
      />
      <button
        class="van-stepper__plus"
        :class="{'van-stepper__plus--disabled':unmax}"
        @click="changeNum(1)"
         :style="{width:buttonSize}"
      ></button>

    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'myValues',
    event: 'change'
  },
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    disableInput: Boolean,
    decimalLength: Number,
    myValues: Number,
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: Infinity
    },
    step: {
      type: [Number, String],
      default: 1
    },
    defaultValue: {
      type: [Number, String],
      default: 1
    },
    showPlus: {
      type: Boolean,
      default: true
    },
    showMinus: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      myValue: 0,
      unmax: false,
      unmin: false
    }
  },
  mounted () {
    this.myValue = this.myValues
    if (this.disabled) {
      this.unmin = true
      this.unmax = true
      return
    }
    if (this.decimalLength) {
      this.myValue = Number(this.myValue).toFixed(this.decimalLength)
    }
    this.beyond(this.myValue)
  },
  watch: {

    myValue (n) {
      if (this.decimalLength) {
        this.myValue = Number(this.myValue).toFixed(this.decimalLength)
      }
      if (this.disabled) {
        return
      } else {
        this.unmin = false
        this.unmax = false
      }
      this.beyond(n)
    }
  },
  methods: {
    changeNum (val) {
      if (this.disabled) {
        return
      }
      if (val === 0) {
        if (this.myValue <= this.min) {
          return
        }
        this.myValue = Number(this.myValue) - Number(this.step)
      } else if (val === 1) {
        if (this.myValue >= this.max) {
          return
        }
        this.myValue = Number(this.myValue) + Number(this.step)
      }
      this.$emit('change', this.myValue)
    },
    beyond (n) {
      if (n <= this.min) {
        this.myValue = this.min
        this.unmin = true
      } else if (n >= this.max) {
        this.myValue = this.max
        this.unmax = true
      }
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';
</style>
