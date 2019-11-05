import baseUrl from './theme/config/var'

export default ({ Vue, options, router, siteData }) => {
  router.beforeEach((to, from, next) => {
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
    } else {
      next()
    }
  })
}
