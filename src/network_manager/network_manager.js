
import axios from 'axios'

import 'mint-ui/lib/style.css'

import { Indicator } from 'mint-ui'

// axios.defaults.baseURL = '/api/'
// axios.defaults.timeout = 5000
axios.defaults.headers['Content-Type'] = 'application/json'

const networkinstance1 = axios.create({   //创建axios实例,用于封装不同的网络请求
  baseURL: '/api/',
  timeout: 5000
})

//请求拦截器,可以对参数信息进行配置,也可以判断url的是否包含token,也可以展现刷新视图
networkinstance1.interceptors.request.use(config => {
  console.log(config)
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return config
},err => {

})

//响应栏拦截器,给我们的响应加上某些必要的东西
networkinstance1.interceptors.response.use(res => {
  console.log(res)
  Indicator.close()
},err => {

})


// 获取首页主图列表数据
function get_theme_list(page) {
  let param = new URLSearchParams()
  param.append("page_size","5")
  param.append("page",page.toString())
  return networkinstance1({
    url: 'get_theme_list',
    method: 'POST',
    data: param
  })
}


export default {
    get_theme_list
}
