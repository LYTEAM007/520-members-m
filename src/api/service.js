import axios from 'axios'
import { isApp } from 'dev-utils-pkg'
import { getUsernameByPlatform } from '@/common/js/util.js'
import store from '../store/old'
// 处理请求数据
// axios.defaults.transformRequest = [function (data) {
//     return qs.stringify(data)
// }]

// 添加请求拦截器
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL_API
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么

  config.headers.Authorization = store.state.username || sessionStorage.username || getUsernameByPlatform()
  config.headers.Action = (isApp() || !!window.xcjsmanager || window.location.href.includes('isFromApp')) ? 'h5' : 'web'
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做点什么

  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export const service = (type, url, data) => {
  const reqData = {
    method: type,
    url,
    timeout: 0,
    headers: {}
  }
  if (data) {
    if (type === 'get') {
      reqData.params = data
    } else {
      reqData.data = data
    }
  }
  return axios(reqData).then((res) => {
    return res.data
  }).catch(function (error) {
    return error
  })
}
