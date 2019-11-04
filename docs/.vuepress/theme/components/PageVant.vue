<template>
  <div class="van-container">
    <div class="van-block"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.van-container {
  z-index: 20;
  box-sizing: border-box;
  padding-top: 5rem;
  margin: 0 auto;

  .van-block {
    min-width: 360px;
    height: 640px;
    background-color: #f0f3f6;
  }
}

@media (max-width: $MQMobile) {
  .van-container {
    display: none;
  }
}
</style>
