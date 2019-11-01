<template>
  <view>
    <view class="demo-title">基础用法</view>
    <van-checkbox v-model="checked1"  @change="change">复选框</van-checkbox>
    <view class="demo-title">禁用状态</view>
    <van-checkbox v-model="checked" disabled>复选框</van-checkbox>
    <van-checkbox v-model="checked1" disabled>复选框</van-checkbox>
    <view class="demo-title">自定义形状</view>
    <van-checkbox :value="checked" shape="square"  @change="change">自定义形状</van-checkbox>
    <view class="demo-title">自定义颜色</view>
    <van-checkbox :value="checked" checked-color="rgb(7, 193, 96)"  @change="change">自定义颜色</van-checkbox>
    <view class="demo-title">自定义图标</view>
    <van-checkbox use-icon-slot :value="checked2" iconSize="20px" @change="change">
      自定义图标
      <image @change="change" slot="icon" :src="checked2 ? activeIcon : inactiveIcon " />
    </van-checkbox>

    <view class="demo-title">复选框组</view>
    <van-checkbox-group v-model="result" @change="change">
      <van-checkbox name="a">复选框 a</van-checkbox>
      <van-checkbox name="b">复选框 b</van-checkbox>
      <van-checkbox name="c">复选框 c</van-checkbox>
    </van-checkbox-group>
    <view class="demo-title">设置最大可选数</view>
    <van-checkbox-group v-model="result" :max='2' @change="change">
      <van-checkbox name="aa">复选框 aa</van-checkbox>
      <van-checkbox name="bb">复选框 bb</van-checkbox>
      <van-checkbox name="cc">复选框 cc</van-checkbox>
    </van-checkbox-group>
  </view>
</template>
<script>
import vanCheckbox from '@/components/checkBox'
import vanCheckboxGroup from '@/components/checkBoxGroup'

export default {
  components: {
    vanCheckbox,
    vanCheckboxGroup
  },
  data () {
    return {
      checked: false,
      checked1: true,
      checked2: true,
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
      result: [],
      result1: []
    }
  },
  methods: {
    change (e) {
      console.log(e)
      this.checked2 = e
    }
  }
}
</script>
<style lang="scss">
view{
  padding-left: 15px
}
.demo-title {
  font-size: 14px;
  padding-top: 15px;
  margin-bottom: 10px;
  color: rgba(69, 90, 100, 0.6);
}
image {
  width: 100%;
  height: 100%;
}
</style>
