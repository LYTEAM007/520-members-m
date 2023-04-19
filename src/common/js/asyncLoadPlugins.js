import Vue from 'vue'
const mode = process.env.NODE_ENV !== 'production' || 1 // 为测试用例，上线前需删掉
// 加载登录工具
const loadVueLoginTool = async () => {
  const vueLoginTool = (await import('vue-login-tool')).default
  Vue.use(vueLoginTool)
  // 工具加载完毕触发 vueLoginToolLoaded 事件
  Vue.prototype.bus.$emit('vueLoginToolLoaded')
}

// 加载VConsole工具
const loadVConsole = async () => {
  const vConsole = (await import('vconsole')).default
  new vConsole()
}
if (mode) {
  loadVueLoginTool()
  loadVConsole()
}

// 加载swiper
const loadSwiper = async () => {
  const VueAwesomeSwiper = (await import('vue-awesome-swiper')).default
  Vue.use(VueAwesomeSwiper)
  // 工具加载完毕触发 VueAwesomeSwiperLoaded 事件
  Vue.prototype.bus.$emit('VueAwesomeSwiperLoaded')
}
// 异步加载swiper
loadSwiper()
