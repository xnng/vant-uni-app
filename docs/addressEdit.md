# AddressEdit 地址编辑

## 引入

```js
import vanCellGroup from 'vant-uni-app/lib/cellGroup'
import vanField from 'vant-uni-app/lib/field'
import vanCell from 'vant-uni-app/lib/cell'
import vanSwitch from 'vant-uni-app/lib/switch'
import vanButton from 'vant-uni-app/lib/button'
import vanPicker from 'vant-uni-app/lib/picker/w-picker.vue'
export default {
  components: { vanCellGroup, vanField, vanCell, vanSwitch, vanButton, vanPicker }
}
```

## 使用

```js
<template>
  <view>
    <van-cell-group title="基础用法">
      <van-field v-model="name" clearable label="姓名" placeholder="收货人姓名" />
      <van-field v-model="phone" clearable label="电话" placeholder="收货人手机号" />
      <van-field
        v-model="location"
        clearable
        label="地区"
        placeholder="选择省/市/区"
        readonly
        @click="handleClickAddress"
      />
      <van-picker
        mode="region"
        :defaultVal="['浙江省','杭州市','滨江区']"
        :areaCode="['33','3301','330108']"
        :hideArea="false"
        @confirm="onConfirm"
        ref="region"
        themeColor="#f00"
      ></van-picker>

      <van-field v-model="address" clearable label="详细地址" placeholder="街道门牌、楼层房间号等信息" />
      <van-field v-model="name" clearable label="邮政编码" placeholder="邮政编码" />
      <van-cell title="设为默认收货地址" style="height: 50px;">
        <van-switch v-model="isDefaultAddress" size="24px" />
      </van-cell>
    </van-cell-group>

    <view class="van-address-edit__buttons">
      <van-button type="danger" class="van-address-edit__btn" block>保存</van-button>
      <van-button type="default" class="van-address-edit__btn" block>删除</van-button>
    </view>
  </view>
</template>

<script>
import vanCellGroup from '@/components/cellGroup'
import vanField from '@/components/field'
import vanCell from '@/components/cell'
import vanSwitch from '@/components/switch'
import vanButton from '@/components/button'
import vanPicker from '@/components/picker/w-picker.vue'
export default {
  components: { vanCellGroup, vanField, vanCell, vanSwitch, vanButton, vanPicker },
  data () {
    return {
      name: '',
      phone: '',
      location: '',
      address: '',
      isDefaultAddress: false,
      range: ['sss', '222', 'ppp']
    }
  },
  methods: {
    onConfirm (e) {
      this.location = e.result
    },
    handleClickAddress () {
      console.log('click')
      this.$refs.region.show()
    }
  }
}
</script>

<style lang="scss" scoped>
.van-address-edit {
  &__buttons {
    padding: 55rpx 32rpx;
  }
  &__btn {
    margin-top: 10rpx;
  }
}
</style>
```
