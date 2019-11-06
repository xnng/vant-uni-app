<template>
  <view>
    <van-cell-group title="基础用法">
      <van-field v-model="value" placeholder="请输入用户名" />
    </van-cell-group>

    <van-cell-group title="自定义类型" style="margin-top: 20rpx">
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />
    </van-cell-group>
  </view>
</template>

<script>
import vanCellGroup from '@/components/cellGroup'
import vanField from '@/components/field'
export default {
  components: { vanCellGroup, vanField },
  data () {
    return {
      value: '',
      username: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
