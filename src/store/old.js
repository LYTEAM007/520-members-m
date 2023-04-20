import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    username: ""
  },
  getters: {
    username({ username }) {
      return username
    }
  },
  mutations: {
    SET_USERNAME(state, data) {
      state.username = data
    }
  },
  actions: {
  
  }

})
