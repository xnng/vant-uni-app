<template>
  <div class="van-container">
    <div class="van-block">
      <iframe
        id="preview-iframe"
        :src="baseUrl"
        frameborder="0"
        style="height: 640px;width:360px;border-radius: 6px"
      ></iframe>
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
  mounted() {
    window.addEventListener(
      'message',
      e => {
        if (typeof e.data === 'string' && JSON.parse(e.data).type === 'togglePage') {
          this.togglePage(JSON.parse(e.data).url)
        }
      },
      false
    )
  },
  beforeMount() {
    this.$nextTick(() => {
      const isPC = () => {
        var userAgentInfo = navigator.userAgent
        var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
        var flag = true
        for (var v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false
            break
          }
        }
        return flag
      }
      if (!isPC()) {
        window.location.href = baseUrl
      }
    })
  },
  methods: {
    togglePage(url) {
      let doman = window.location.href

      if (this.$route.path === url) return

      if (url === '/') {
        this.$router.push({ path: '/' })
        return
      }
      const currentUrl = url.match(/pages(\S*)\/index/)[1]
      const targetRoute = `${currentUrl}.html`

      if (this.$route.path === targetRoute) return
      this.$router.push({ path: `${currentUrl}.html` })
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
  min-width: 400px;
  position: relative;

  .van-block {
    width: 360px;
    border-radius: 6px;
    position: fixed;
    top: 89px;
    right: 30px;
    height: 640px;
    box-shadow: 0 0 9px 4px #eee;
  }
}

@media (max-width: 1265px) {
  .van-block {
    right: auto;
    left: 860px;
  }
}

@media (max-width: $MQMobile) {
  .van-container {
    display: none;
  }
}
</style>
