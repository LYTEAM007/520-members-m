import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { getActivityTime,getActivity2Data,getActivity3Data } from '@/api'

export default new Vuex.Store({
  state: {
    username: "",
    activityTime: {},
    voteRanking: [],
    guessingActivityInfo: {
      matchs: {},
      userInfo: {}
    },
    activity2Data:{},
    activity3Data:{
      guessed_days:[],
      riddles:[]
    },
  },
  getters: {
    username({ username }) {
      return username
    },
    activityTime({ activityTime }) {
      return activityTime || {
        act1_end_time: "",
        act1_start_time: "",
        act2_end_time: "2023-01-04 00:00:00",
        act2_start_time: "2023-01-03 00:00:00",
        act3_end_time: "2023-01-07 00:00:00",
        act3_start_time: "2023-01-06 00:00:00",
        created_at: "2023-01-03 17:50:21",
        end_time: "2023-01-07 00:00:00",
        id: 1,
        is_open: 1,
        start_time: "2023-01-01 00:00:00",
        updated_at: "2023-01-05 21:18:09"
      }
    },
    activity2Data({ activity2Data }) {
      return activity2Data
    },
    activity3Data({ activity3Data }) {
      return activity3Data
    },
  },
  mutations: {
    SET_USERNAME(state, data) {
      state.username = data
    },
    setActivityTime(state, data) {
      state.activityTime = data
    },
    setActivity2Data(state, data) {
      state.activity2Data = data
    },
    setActivity3Data(state, data) {
      state.activity3Data = data
    },
  },
  actions: {
    async getActivity2Data({ commit }) {
      try {
        const { data, code } = await getActivity2Data()
        if (code === 200) {
          commit('setActivity2Data', data)
        }
      } catch (e) {
        console.log('请先登录')
      }
    },
    async getActivity3Data({ commit }) {
      try {
        const { data, code } = await getActivity3Data()
        if (code === 200) {
          commit('setActivity3Data', data)
        }
      } catch (e) {
        console.log('请先登录')
      }
    },
    getActivityTime({ commit }) {
      getActivityTime()
        .then((res) => {
          const { data, code } = res;
          if (code === 200) {
            commit('setActivityTime', data || {})
          }
        })
    },
  }
})

