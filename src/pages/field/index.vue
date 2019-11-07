<template>
  <view>
    <van-cell-group title="基础用法">
      <van-field v-model="value" placeholder="请输入用户名" />
    </van-cell-group>

    <van-cell-group title="自定义类型" style="margin-top: 20rpx">
      <van-field
        class="demo-field"
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="handleRightIcon"
      />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>

    <van-cell-group title="禁用输入框" style="margin-top: 20rpx">
      <van-field value="输入框已禁用" label="用户名" left-icon="contact" disabled />
    </van-cell-group>

    <van-cell-group title="插入按钮" style="margin-top: 20rpx">
      <van-field v-model="sms" clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
  </view>
</template>

<script>
import vanCellGroup from '@/components/cellGroup'
import vanField from '@/components/field'
import vanButton from '@/components/button'
export default {
  components: { vanCellGroup, vanField, vanButton },
  data () {
    return {
      value: '',
      username: '',
      password: '',
      sms: '',
      message: ''
    }
  },
  methods: {
    handleRightIcon () {
      uni.showToast({
        title: 'question',
        duration: 2000,
        icon: 'none'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
