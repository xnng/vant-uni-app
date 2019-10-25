<template>
  <button
    class="van-btn"
    :class="[`van-btn-${type}`,`van-btn-size-${size}`,`${plain ? 'van-btn-plain': ''}`]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getHoverClass(type) {
      if (type === 'default') {
        return 'van-btn-default-hover'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './common.scss';
.van-btn {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: $button-default-height;
  margin: 0;
  padding: 0;
  font-size: $button-default-font-size;
  line-height: $button-default-line-height;
  text-align: center;
  border-radius: $button-border-radius;
  transition: opacity $animation-duration-fast;

  /* reset defalut style */
  &:after {
    border: 0;
    border-radius: 0;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    border: inherit;
    border-color: $black;
    border-radius: inherit; 
    opacity: 0;
    content: ' ';
  }

  &:active::before {
    opacity: 0.1;
  }

  /* &--default {
    color: $button-default-color;
    background-color: $button-default-background-color;
    border: $button-border-width solid $button-default-border-color;
  } */
}

/* 颜色 */
.van-btn-default {
  color: #323233;
  background-color: #fff;
  border: 1px solid #ebedf0;
}
.van-btn-default-hover {
  background-color: #e6e6e6;
}
.van-btn-primary {
  color: #fff;
  background-color: #07c160;
  border: 1px solid #07c160;
}
.van-btn-primary-hover {
  background-color: #06ae57;
  border: 1px solid #06ae57;
}
.van-btn-info {
  color: #fff;
  background-color: #1989fa;
  border: 1px solid #1989fa;
}
.van-btn-info-hover {
  background-color: #177ce1;
  border: 1px solid #177ce1;
}
.van-btn-warning {
  color: #fff;
  background-color: #ff976a;
  border: 1px solid #ff976a;
}
.van-btn-warning-hover {
  background-color: #e68860;
  border: 1px solid #e68860;
}
.van-btn-danger {
  color: #fff;
  background-color: #ee0a24;
  border: 1px solid #ee0a24;
}
.van-btn-danger-hover {
  background-color: #d70920;
  border: 1px solid #d70920;
}
/* 大小 */
.van-btn-size-normal {
  height: 44px;
  line-height: 42px;
  font-size: 14px;
}
.van-btn-plain {
  background-color: #ffffff;
}
</style>
