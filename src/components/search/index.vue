<template>
  <view>
    <view class="van-search" style="background: rgb(255, 255, 255);">
      <view class="van-search__content"
        :class="shape==='round'?' van-search__content--round':' van-search__content--square'"
      >
        <view class="van-cell van-cell--borderless van-field">
          <!-- #ifdef MP-WEIXIN -->

     <input class="weui-input" auto-focus placeholder="将会获取焦点"/>
              <!-- #endif -->
               <!-- #ifndef MP-WEIXIN -->
          <vanCell class="van-cell__value van-cell__value--alone">

            <view class="van-field__body">
                    <vanIcon class="van-icon van-icon-search">
              <!---->
            </vanIcon>

              <input  type="search" placeholder="请输入搜索关键词" class="van-field__control input" />
            </view>
          </vanCell>
 <!-- #endif -->
        </view>

      </view>
   <slot name="action"></slot>
    </view>
  </view>
</template>
<script>
import vanCell from '../cell/index'
import vanIcon from '../icon/index'
export default {
  components: {
    vanIcon, vanCell
  },
  props: {
    value: String,
    label: String,
    rightIcon: String,
    actionText: String,
    showAction: Boolean,
    shape: {
      type: String,
      default: 'square'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    background: {
      type: String,
      default: '#fff'
    },
    leftIcon: {
      type: String,
      default: 'search'
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';
input{
  display: inline-block;

}
.uni-input-form, .uni-input-wrapper{
  margin-top: 33px;
}
.van-field__control div{
  margin-top: 3px;
}
.van-field__control view{
  margin-top: 3px;
}
</style>
