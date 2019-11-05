const env = process.env.NODE_ENV

let baseUrl
if(env === 'development') {
  baseUrl = 'http://localhost:8090'
}else {
  baseUrl = 'https://vant.xnngs.cn/h5/index.html'
}

export default baseUrl