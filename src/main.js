/* eslint-disable new-cap */
import Vue from 'vue'
import { getUrlParams } from '@/common/js/util.js'
import router from './router'
import App from './App.vue'
import './assets/css/reset.css'
import './components/icon/index'
import "swiper/swiper-bundle.css"
import store from './store'
import VueAwesomeSwiper from "vue-awesome-swiper"
import 'common/js/plugin'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueLoginTool from 'vue-login-tool'
Vue.use(vueLoginTool)
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.bus = new Vue()
Vue.prototype.ERR_OK = 200
// 加载VConsole工具
const loadVConsole = async () => {
  const vConsole = (await import('vconsole')).default
  new vConsole()
}
loadVConsole()
export default new Vue({
  el: '#app',
  router,
  store,
  created() {
    const username = getUrlParams().username
    console.log(username)
    if (username) {
      sessionStorage.setItem('username', username)
      store.commit('SET_USERNAME', username)
    }
  },
  render: h => h(App)
})
