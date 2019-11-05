<script>
export default {
  // #ifdef H5
  computed: {
    currentRouter () {
      return this.$route.path
    }
  },
  watch: {
    currentRouter: {
      handler (val) {
        this.$nextTick(() => {
          const data = {
            type: 'togglePage',
            url: val
          }
          window.parent.postMessage(JSON.stringify(data), '*')
        })
      },
      immediate: false
    }
  }
  // #endif
}
</script>

<style lang="scss">
@import './components/style/common.scss';
@import './pages/style/common.scss';
</style>
