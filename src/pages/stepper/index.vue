<template>
  <div>
    <van-cell center :title="basicUsage">
      <van-stepper style="float:right" v-model="stepper1" />
    </van-cell>

    <van-cell center :title="step">
      <van-stepper  style="float:right" v-model="stepper2" step="2" />
    </van-cell>

    <van-cell center :title="range">
      <van-stepper  style="float:right" v-model="stepper3"  :min="5" :max="8" />
    </van-cell>

    <van-cell center :title="disabled">
      <van-stepper  style="float:right" v-model="stepper5" disabled />
    </van-cell>

    <van-cell center :title="decimalLength">
      <van-stepper  style="float:right" v-model="stepper8" :decimal-length="1" step="0.2" />
    </van-cell>

    <van-cell center :title="customSize">
      <van-stepper  style="float:right" v-model="stepper7" button-size="32px" input-width="40px" />
    </van-cell>
  </div>
</template>

<script>
import vanStepper from '@/components/stepper'
import vanCell from '@/components/cell'

export default {
  components: {
    vanStepper,
    vanCell
  },
  data () {
    return {
      basicUsage: '基础用法',
      step: '步长设置',
      range: '限制输入范围',
      asyncChange: '异步变更',
      customSize: '自定义大小',
      decimalLength: '固定小数位数',
      disabled: '不可使用',
      stepper1: 1,
      stepper2: 1,
      stepper3: 1,
      stepper4: 1,
      stepper5: 1,
      stepper6: 1,
      stepper7: 1,
      stepper8: 1
    }
  },

  methods: {
    onChange (value) {
      this.$toast.loading({ forbidClick: true })

      setTimeout(() => {
        this.stepper6 = value
        this.$toast.clear()
      }, 500)
    }
  }
}
</script>
