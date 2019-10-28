<template>
  <view class="root">
    <view class="demo-title">标记样式</view>
    <view class="demo-row">
      <view class="box-view">
        <vanIcon :name="baseIcon[0]" dot info="9"></vanIcon>
        {{baseIcon[0]}}
      </view>
    </view>
    <view class="demo-title">基础样式</view>
    <view class="demo-row">
      <view class="box-view" v-for="(item,index) in baseIcon" v-bind:key="index">
        <vanIcon :name="baseIcon[index]"></vanIcon>
        <text>{{item}}</text>
      </view>
    </view>
       <view class="demo-title">线框风格</view>
    <view class="demo-row">
      <view class="box-view" v-for="(item,index) in outline" v-bind:key="index">
        <vanIcon :name="outline[index]"></vanIcon>
        <text>{{item}}</text>
      </view>
    </view>
       <view class="demo-title">填充样式</view>
    <view class="demo-row">
      <view class="box-view" v-for="(item,index) in filled" v-bind:key="index">
        <vanIcon :name="filled[index]"></vanIcon>
        <text>{{item}}</text>
      </view>
    </view>
  </view>
</template>
<script>
import vanIcon from '../../components/icon/index.vue'
export default {
  components: {
    vanIcon
  },
  data () {
    return {
      baseIcon: ['success', 'plus', 'cross', 'fail', 'arrow', 'arrow-left', 'arrow-up', 'arrow-down'],
      outline: [
        // has corresponding filled icon
        'location-o',
        'like-o',
        'star-o',
        'phone-o',
        'setting-o',
        'fire-o',
        'coupon-o',
        'cart-o',
        'shopping-cart-o',
        'cart-circle-o',
        'friends-o',
        'comment-o',
        'gem-o',
        'gift-o',
        'point-gift-o',
        'send-gift-o',
        'service-o',
        'bag-o',
        'todo-list-o',
        'balance-list-o',
        'close',
        'clock-o',
        'question-o',
        'passed',
        'add-o',
        'gold-coin-o',
        'info-o',
        'play-circle-o',
        'pause-circle-o',
        'stop-circle-o',
        'warning-o',
        'phone-circle-o',
        'music-o',
        'smile-o',
        'thumb-circle-o',
        'comment-circle-o',
        'browsing-history-o',
        'underway-o',
        'more-o',
        'video-o',
        'shop-o',
        'shop-collect-o',
        'chat-o',
        'smile-comment-o',
        'vip-card-o',
        'award-o',
        'diamond-o',
        'volume-o',
        'cluster-o',
        'wap-home-o',
        'photo-o',
        'gift-card-o',
        'expand-o',
        'medel-o',
        'good-job-o',
        'manager-o',
        'label-o',
        'bookmark-o',
        'bill-o',
        'hot-o',
        'hot-sale-o',
        'new-o',
        'new-arrival-o',
        'goods-collect-o',
        'eye-o',
        // without corresponding filled icon
        'balance-o',
        'refund-o',
        'birthday-cake-o',
        'user-o',
        'orders-o',
        'tv-o',
        'envelop-o',
        'flag-o',
        'flower-o',
        'filter-o',
        'bar-chart-o',
        'chart-trending-o',
        'brush-o',
        'bullhorn-o',
        'hotel-o',
        'cashier-o',
        'newspaper-o',
        'warn-o',
        'notes-o',
        'calender-o',
        'bulb-o',
        'user-circle-o',
        'desktop-o',
        'apps-o',
        'home-o',
        'share',
        'search',
        'points',
        'edit',
        'delete',
        'qr',
        'qr-invalid',
        'closed-eye',
        'down',
        'scan',
        'free-postage',
        'certificate',
        'logistics',
        'contact',
        'cash-back-record',
        'after-sale',
        'exchange',
        'upgrade',
        'ellipsis',
        'circle',
        'description',
        'records',
        'sign',
        'completed',
        'failure',
        'ecard-pay',
        'peer-pay',
        'balance-pay',
        'credit-pay',
        'debit-pay',
        'cash-on-deliver',
        'other-pay',
        'tosend',
        'pending-payment',
        'paid',
        'aim',
        'discount',
        'idcard',
        'replay',
        'shrink'
      ],
      filled: [
        // has corresponding outline icon
        'location',
        'like',
        'star',
        'phone',
        'setting',
        'fire',
        'coupon',
        'cart',
        'shopping-cart',
        'cart-circle',
        'friends',
        'comment',
        'gem',
        'gift',
        'point-gift',
        'send-gift',
        'service',
        'bag',
        'todo-list',
        'balance-list',
        'clear',
        'clock',
        'question',
        'checked',
        'add',
        'gold-coin',
        'info',
        'play-circle',
        'pause-circle',
        'stop-circle',
        'warning',
        'phone-circle',
        'music',
        'smile',
        'thumb-circle',
        'comment-circle',
        'browsing-history',
        'underway',
        'more',
        'video',
        'shop',
        'shop-collect',
        'chat',
        'smile-comment',
        'vip-card',
        'award',
        'diamond',
        'volume',
        'cluster',
        'wap-home',
        'photo',
        'gift-card',
        'expand',
        'medel',
        'good-job',
        'manager',
        'label',
        'bookmark',
        'bill',
        'hot',
        'hot-sale',
        'new',
        'new-arrival',
        'goods-collect',
        'eye',
        // without corresponding outline icon
        'alipay',
        'wechat',
        'photograph',
        'youzan-shield',
        'umbrella-circle',
        'bell',
        'printer',
        'map-marked',
        'card',
        'add-square',
        'live',
        'lock',
        'audio',
        'graphic',
        'column',
        'invition',
        'play',
        'pause',
        'stop',
        'weapp-nav',
        'ascending',
        'descending',
        'bars',
        'wap-nav'
      ]
    }
  }
}
</script>
<style lang="scss">
.demo-title {
  font-size: 14px;
  padding-top: 15px;
  margin-bottom: 10px;
  color: rgba(69, 90, 100, 0.6);
}
.root {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  .demo-row {
    display: flex;
    flex-wrap: wrap;
    .box-view {
          width: 58px;
    text-align: center;
      margin: 10px;
      border-color: #fff;
      display: flex;
    flex-direction: column;
    }
  }
}
</style>
