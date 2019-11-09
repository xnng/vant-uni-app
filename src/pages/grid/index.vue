<template>
  <demo-section>
    <view class="demo-title">基础用法</view>
    <van-grid>
      <van-grid-item v-for="i in 4" :key="i" icon="photo-o" :text="text" />
    </van-grid>

    <view class="demo-title">自定义列数</view>
    <van-grid :column-num="3">
      <van-grid-item v-for="i in 6" :key="i" icon="photo-o" :text="text" />
    </van-grid>
    <view class="demo-title">自定义内容</view>
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <img fit="contain" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item>
               <img fit="contain" src="https://img.yzcdn.cn/vant/apple-2.jpg"  />
      </van-grid-item>
      <van-grid-item>
        <img fit="contain" src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
    </van-grid>

    <view class="demo-title">自定义格子</view>
    <van-grid square>
      <van-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="text" />
    </van-grid>
    <!-- <view class="demo-title">格子间距</view>
    <van-grid :gutter="10">
      <van-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="text" />
    </van-grid> -->
    <!-- <view class="demo-title">页面导航</view> -->
    <!-- <van-grid clickable :column-num="2">
      <van-grid-item icon="home-o" :text="vueRoute" to="/" />
      <van-grid-item icon="search" :text="urlRoute" url="/vant/mobile.html" />
    </van-grid> -->
    <!-- <view class="demo-title">提升信息</view> -->
    <!-- <van-grid :column-num="2">
      <van-grid-item icon="home-o" :text="text" dot />
      <van-grid-item icon="search" :text="text" info="99+" />dsad
    </van-grid> -->
  </demo-section>
</template>

<script>
import vanGrid from '@/components/grid'
import vanGridItem from '@/components/gridItem'
export default {
  components: {
    vanGrid,
    vanGridItem
  },
  data () {
    return {
      return: {
        text: '文字',
        route: '页面导航',
        gutter: '格子间距',
        square: '正方形格子',
        columnNum: '自定义列数',
        customContent: '自定义内容',
        urlRoute: 'URL 跳转',
        vueRoute: '路由跳转',
        showInfo: '提示信息'
      }
    }
  }
}
</script>

<style lang="scss">
.demo-title {
  font-size: 14px;
  padding-left: 16px;
  padding-top: 30px;
  margin-bottom: 10px;
  color: rgba(69, 90, 100, 0.6);
}
img{
  height: 100px;
  width: 100px;
}
</style>
