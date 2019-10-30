<template>
  <view>
    <view class="van-card">
      <view class="van-card__header">
        <a class="van-card__thumb">
          <view class="van-image" style="width: 100%; height: 100%;">
               <van-tag class="van-tag" v-if="tag" mark type="danger">{{tag}}</van-tag>
            <image
              :src="thumb"
              class="van-image__img"
              style="object-fit: contain;"
            />

          </view>
        </a>
        <view class="van-card__content">
          <view class="van-card__title van-multi-ellipsis--l2">{{title}}</view>
          <view class="van-card__desc van-ellipsis">{{desc}}</view>
          <slot name="tags"></slot>
          <view class="van-card__bottom">
            <view class="van-card__price">¥ {{price}}</view>
            <view v-if="originPrice" class="van-card__origin-price">{{originPrice}}</view>
            <view class="van-card__num">x {{num}}</view>
          </view>
        </view>
      </view>
       <slot></slot>
    </view>
  </view>
</template>
<script>
import vanTag from '../../components/tag/index'
export default {
  components: {
    vanTag
  },
  props: {
    tag: String,
    desc: String,
    thumb: String,
    title: String,
    centered: Boolean,
    lazyLoad: Boolean,
    thumbLink: String,
    num: [Number, String],
    price: [Number, String],
    originPrice: [Number, String],
    currency: {
      type: String,
      default: '¥'
    }
  }
}
</script>
<style lang="scss">
  @import './index.scss';
  .van-image{
    position: relative;
  }
  .van-tag{
    position: absolute;
    z-index: 99;
    left:-10px;
  }
</style>
