import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { getVoteActivityInfo, getActivityTime, getVoteRanking } from "@/api/index";
import { Toast } from 'vant'
export default new Vuex.Store({
  state: {
    username: "",
    voteActivityInfo: {
      "username": "",
      "date": "",
      "skip_animei": 0,
      "act1_leftvotetimes": 0,
      "act1_drawed_times": 0,
      "act2_received_prize": 0,
      "act2_A_isget": 0,
      "act2_B_isget": 0,
      "act2_C_isget": 0,
      "act2_D_isget": 0,
      "act3_is_received": 0,
      "act3_prize": 0
    },
    activityTime: [],
    voteRanking: [],
    guessingActivityInfo: {
      matchs: {},
      userInfo: {}
    }
  },
  getters: {
    username({ username }) {
      return username
    },
    voteActivityInfo({ voteActivityInfo }) {
      return voteActivityInfo
    },
    guessingActivityInfo({ guessingActivityInfo }) {
      return guessingActivityInfo
    },
    activityTime({ activityTime }) {
      return activityTime
    },
    voteActivityTime({ activityTime }) {
      return activityTime.find(item => item.id === 1) || {
        start_time: '',
        end_time: '',
        theme1_start_time: '',
        theme1_end_time: '',
        theme3_start_time: '',
        theme3_end_time: '',
      }
    },
    guessingActivityTime({ activityTime }) {
      return activityTime.find(item => item.id === 2) || {
        start_time: '',
        end_time: '',
      }
    },
    doubleActivityTime({ activityTime }) {
      return activityTime.find(item => item.id === 3) || {
        start_time: '',
        end_time: '',
      }
    },
    giftActivityTime({ activityTime }) {
      return activityTime.find(item => item.id === 4) || {
        start_time: '',
        end_time: '',
        theme1_start_time: '',
        theme1_end_time: '',
        theme2_start_time: '',
        theme2_end_time: '',
        theme3_start_time: '',
        theme3_end_time: '',
        theme4_start_time: '',
        theme4_end_time: '',
      }
    },
    voteRanking({ voteRanking }) {
      return voteRanking
    },
  },
  mutations: {
    SET_USERNAME(state, data) {
      state.username = data
    },
    setVoteActivityInfo(state, data) {
      state.voteActivityInfo = data
    },
    setGuessingActivityInfo(state, data) {
      state.guessingActivityInfo = data
    },
    setActivityTime(state, data) {
      state.activityTime = data
    },
    setVoteRanking(state, data) {
      state.voteRanking = data
    },
  },
  actions: {
    getGuessingActivityInfo({ commit }, payload) {
      return new Promise(async (res, rej) => {
        try {
          payload = payload || {}
          // 默认需要loading
          if (!payload.noLoading) {
            Toast.loading()
          }
          const { data, code } = await getGuessingActivityInfo(payload)
          if (!payload.noLoading) {
            Toast.clear()
          }
          if (code === 0) {
            commit('setGuessingActivityInfo', data)
            res(data)
          }
        } catch (e) {
          console.log('异常')
        }
      })

    },
    async getVoteActivityInfo({ commit }) {
      try {
        const { data, code } = await getVoteActivityInfo()
        if (code === 0) {
          commit('setVoteActivityInfo', data)
        }
      } catch (e) {
        // console.log('请先登录')
      }
    },
    getActivityTime({ commit }) {
      getActivityTime()
        .then((res) => {
          const { data, code } = res;
          if (code === 0) {
            commit('setActivityTime', data || {})
          }
        })
    },
    getVoteRanking({ commit }) {
      getVoteRanking()
        .then((res) => {
          const { data, code } = res;
          if (code === 0) {
            data.forEach(item => {
              item.vote = 1
            })
            commit('setVoteRanking', data || [])
          }
        })
    }
  },

})
