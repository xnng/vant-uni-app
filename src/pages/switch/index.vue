<template>
  <view class="root">
        <view class="demo-title">基础用法</view>
    <view class="cell">
      <van-cell-group>
        <van-switch v-model="checked" @change="change" title="标题" />
      </van-cell-group>
    </view>
        <view class="demo-title">禁用状态</view>

    <view class="cell">
      <van-cell-group>
        <van-switch v-model="checked1" @change="change" disabled title="标题" />
      </van-cell-group>
    </view>
        <view class="demo-title">自定义大小</view>

    <view class="cell">
      <van-cell-group>
        <van-switch v-model="checked2" @change="change" size="18px" title="标题" />
      </van-cell-group>
    </view>
        <view class="demo-title">自定义颜色</view>
    <view class="cell">
      <van-cell-group>
        <van-switch v-model="checked3" @change="change" active-color="#07c160" title="标题" />
      </van-cell-group>
    </view>
          <view class="demo-title">无标题单用</view>
    <view class="cell cell-only">
        <van-switch v-model="checked" @change="change" />
        <van-switch v-model="checked1" @change="change" disabled  />
        <van-switch v-model="checked2" @change="change"  size="18px"/>
        <van-switch v-model="checked3" @change="change"   active-color="#07c160"/>
    </view>
  </view>
</template>
<script>
import vanCellGroup from '../../components/cellGroup'
import vanSwitch from '../../components/switch'
export default {
  components: {
    vanCellGroup,
    vanSwitch
  },
  data () {
    return {
      checked: true,
      checked1: true,
      checked2: true,
      checked3: true
    }
  },
  methods: {
    change (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss">

  .cell{
    margin: 20px 0;
    background: #fff;
  }
  .demo-title {
  font-size: 14px;
  padding-top: 15px;
   padding-left:15px;
  margin-bottom: 10px;
  color: rgba(69, 90, 100, 0.6);
}
.cell-only{
  display: flex;
  justify-content: space-between;
  padding:10px;
      height: 30px;
    line-height: 30px;
}
</style>
