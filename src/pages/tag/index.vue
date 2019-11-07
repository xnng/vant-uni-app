<template>
  <view class="contain">
         <view class="demo-title">基础用法</view>
    <view  class="demo-tag">
      <van-tag>{{tag}}</van-tag>
      <van-tag type="primary">{{tag}}</van-tag>
      <van-tag type="success">{{tag}}</van-tag>
      <van-tag type="danger">{{tag}}</van-tag>
      <van-tag type="warning">{{tag}}</van-tag>
    </view>
   <view class="demo-title">圆角样式</view>
    <view class="demo-tag">
      <van-tag round>{{tag}}</van-tag>
      <van-tag round type="primary">{{tag}}</van-tag>
      <van-tag round type="success">{{tag}}</van-tag>
      <van-tag round type="danger">{{tag}}</van-tag>
      <van-tag round type="warning">{{tag}}</van-tag>
    </view>
   <view class="demo-title">标记样式
</view>
    <view class="demo-tag">
      <van-tag mark>{{tag}}</van-tag>
      <van-tag mark type="primary">{{tag}}</van-tag>
      <van-tag mark type="success">{{tag}}</van-tag>
      <van-tag mark type="danger">{{tag}}</van-tag>
      <van-tag mark type="warning">{{tag}}</van-tag>
    </view>
   <view class="demo-title">空心样式</view>
    <view class="demo-tag">
      <van-tag plain>{{tag}}</van-tag>
      <van-tag plain type="primary">{{tag}}</van-tag>
      <van-tag plain type="success">{{tag}}</van-tag>
      <van-tag plain type="danger">{{tag}}</van-tag>
      <van-tag plain type="warning">{{tag}}</van-tag>
    </view>
   <view class="demo-title">自定义颜色</view>
    <view class="demo-tag">
      <van-tag color="#f2826a">{{tag}}</van-tag>
      <van-tag color="#f2826a" plain>{{tag}}</van-tag>
      <van-tag color="#7232dd">{{tag}}</van-tag>
      <van-tag color="#7232dd" plain>{{tag}}</van-tag>
      <van-tag color="#ffe1e1" text-color="#ad0000">{{tag}}</van-tag>
    </view>
   <view class="demo-title">标签大小</view>
    <view class="demo-tag">
      <van-tag type="success">{{tag}}</van-tag>
      <van-tag type="success" size="medium">{{tag}}</van-tag>
      <van-tag type="success" size="large">{{tag}}</van-tag>
    </view>
 <view class="demo-title">可关闭标签</view>
    <view class="demo-tag">
      <van-tag
        v-if="show.primary"

        closeable
        type="primary"
        @close="close('primary')"
      >{{tag}}</van-tag>
      <van-tag
        v-if="show.success"

        closeable
        type="success"
        @close="close('success')"
      >{{tag}}</van-tag>
    </view>
  </view>
</template>

<script>
import vanTag from '../../components/tag'
export default {
  components: {
    vanTag
  },
  data () {
    return {
      show: {
        primary: true,
        success: true
      },
      plain: '空心样式',
      round: '圆角样式',
      mark: '标记样式',
      closeable: '可关闭标签',
      customColor: '自定义颜色',
      customSize: '标签大小',
      tag: '标签'
    }
  },

  methods: {
    close (tag) {
      console.log(tag)

      this.show[tag] = false
    }
  }
}
</script>

<style lang="scss">
@import '../../components/style/var';
.demo-title {
  font-size: 14px;
padding: 35px 15px 0;
  background-color: #fff;
  color: rgba(69, 90, 100, 0.6);
}
.demo-tag {
  display: flex;
  margin-bottom: 22px;
   div{
     line-height: 35px;
    margin-left: 10px;
    height: 7px;

   }
}
.contain{
  background-color: #fff;
  padding-bottom: 30px;
}
</style>
