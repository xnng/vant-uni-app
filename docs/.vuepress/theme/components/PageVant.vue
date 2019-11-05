<template>
  <div class="van-container">
    <div class="van-block">
      <iframe id="preview-iframe" :src="baseUrl" frameborder="0" style="height: 640px;width:360px"></iframe>
    </div>
  </div>
</template>

<script>
import baseUrl from '../config/var'
export default {
  data() {
    return {
      baseUrl: baseUrl
    }
  },
  computed: {
    currentRouter() {
      return this.$route.path
    }
  },
  watch: {
    currentRouter: {
      handler(val) {
        this.$nextTick(() => {
          const iframe = document.getElementById('preview-iframe')
          const data = {
            type: 'togglePage',
            url: val
          }
          iframe.contentWindow.postMessage(JSON.stringify(data), '*')
          iframe.onload = () => {
            iframe.contentWindow.postMessage(JSON.stringify(data), '*')
          }
        })
      },
      immediate: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.van-container {
  z-index: 20;
  box-sizing: border-box;
  padding-top: 89px;
  margin: 0 auto;

  .van-block {
    min-width: 360px;
    height: 640px;
    box-shadow: 0 0 9px 5px #eee;
  }
}

@media (max-width: $MQMobile) {
  .van-container {
    display: none;
  }
}
</style>
