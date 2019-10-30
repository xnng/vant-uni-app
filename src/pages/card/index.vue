
<template>
  <view>
    <view class="demo-title">基础用法</view>
    <view>

      <van-card num="2" price="2.00" :desc="desc" :title="title" :thumb="imageURL" />
    </view>
<view class="demo-title">营销信息</view>
    <view>
      <van-card
        num="2"
        price="2.00"
        origin-price="10.00"
        :tag="tag"
        :desc="desc"
        :title="title"
        :thumb="imageURL"
      />
    </view>
<view class="demo-title">自定义内容</view>
    <view>
      <van-card num="2" price="2.00" :desc="desc" :title="title" :thumb="imageURL">
        <template #tags>
          <div style="display:flex">
            <van-tag plain type="danger" style="margin-right: 5px">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
        </template>

          <div class=" van-card__footer">
            <van-button round size="mini">{{ button}}</van-button>
            <van-button round size="mini">{{ button}}</van-button>
          </div>
      </van-card>
    </view>
  </view>
</template>

<script>
import vanCard from '@/components/card'
import vanButton from '@/components/button'
import vanTag from '@/components/tag'

export default {
  components: {
    vanTag,
    vanCard,
    vanButton
  },
  data () {
    return {
      imageURL: 'https://img.yzcdn.cn/vant/t-thirt.jpg',
      title: '商品名称',
      desc: '描述信息',
      discountInfo: '营销信息',
      customContent: '自定义内容',
      button: '按钮',
      tag: '标签'
    }
  }
}
</script>
<style lang="scss">
.demo-title {
  font-size: 14px;
padding: 35px 15px 15px;
  margin-bottom: 10px;
  background-color: #fff;
  color: rgba(69, 90, 100, 0.6);
}
.van-card__footer {
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  text-align: right;
}
</style>
