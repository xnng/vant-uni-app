<template>
  <view class="root">
    <view class="demo-title">基础用法</view>
    <van-checkbox v-model="checked1"  @change="change">复选框</van-checkbox>
    <view class="demo-title">禁用状态</view>
    <van-checkbox v-model="checked2" disabled>复选框</van-checkbox>
    <van-checkbox v-model="checked3" disabled>复选框</van-checkbox>
    <view class="demo-title">自定义形状</view>
    <van-checkbox :value="checked4" shape="square"  @change="change">自定义形状</van-checkbox>
    <view class="demo-title">自定义颜色</view>
    <van-checkbox :value="checked5" checked-color="rgb(7, 193, 96)"  @change="change">自定义颜色</van-checkbox>
    <!-- <view class="demo-title">自定义图标</view>
    <van-checkbox use-icon-slot :value="checked2" iconSize="20px" @change="change">
      自定义图标
      <image @change="change" slot="icon" :src="checked2 ? activeIcon : inactiveIcon " />
    </van-checkbox> -->

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
   <!-- <van-checkbox-group v-model="result3">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in list"
            clickable
            :key="index"
            :title="item"
          >
            <template #right-icon>
              <van-checkbox ref="checkboxes" :name="item" v-model="checked1" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group> -->
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
      list: [
        '复选框a',
        '复选框b',
        '复选框c'
      ],
      checked: false,
      checked1: true,
      checked2: false,
      checked3: true,
      checked4: true,
      checked5: true,
      checked6: true,
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
      result: [],
      result1: [],
      result3: []
    }
  },
  methods: {
    change (e, name) {
      console.log(e)
      // console.log(name, i)

      // if (name) this.checked2 = e
    }

  }
}
</script>
<style lang="scss">

.root{
  padding-left:15px
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

van-checkbox{
  font-size: 14px;
}
.van-checkbox{
  font-size: 14px;
  margin: 5px;
}
</style>
