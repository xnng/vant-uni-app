<template>
  <view>
    <view class="demo-title">基础用法</view>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <view class="demo-title">控制圆角</view>
  <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
      </van-search>
    </form>
    <view class="demo-title">添加搜索</view>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
      >
        <div class="search" slot="action" @click="onSearch">搜索</div>
      </van-search>
    </form>
    <view class="demo-title">添加取消</view>
      <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
      >
        <div class="search" slot="action" @click="onCancel">取消</div>
      </van-search>
    </form>
  </view>
</template>
<script>
import vanSearch from '../../components/search'
export default {
  components: {
    vanSearch
  }
}
</script>
<style lang="scss">
  .demo-title {
  font-size: 14px;
  padding-top: 15px;
  padding-left: 15px;
  margin-bottom: 10px;
  color: rgba(69, 90, 100, 0.6);
}

.search {
  margin-left: 10px;
  font-size: 15px;
}
.uni-input-form, .uni-input-wrapper{
  margin-top: 33px;
}
.van-field__control{
  margin-top: 33px;
}
</style>
