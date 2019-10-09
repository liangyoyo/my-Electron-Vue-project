// 这个文件封装与axios相关的所有配置
import axios from 'axios'
// 设置请求发送的基准路径
axios.defaults.baseURL = ''

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 做点什么：通过请求头的方式传递token数据，并且传递时的键必须设置为Authorization
  // 1.获取存储的token
  var token = localStorage.getItem('token')
  if (token) {
  // 2.通过请求头的方式设置token的传递,通过config获取到请求头
    config.headers['Authorization'] = token
  }

  return config
}, function (error) {
  // 对请求错误应该执行什么
  return Promise.reject(error)
})

export default axios
