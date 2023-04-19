<template>
  <div class="menu">
    <div v-for="item in list" :key="item.title">
      <router-link v-if="item.is_open" :to="{ path: item.path }" class="item">
        <p class="badge-arrow"></p>
        <div class="text">
          <h3>{{ item.title }}</h3>
          <!-- <p>活动时间 {{ getTime(item) }}</p> -->
        </div>
      </router-link>
      <a
        v-else
        href="javascript:;"
        :to="{ path: item.path }"
        class="item"
        :class="{ waiting: !item.is_open }"
        @click="clickMenu(item)"
      >
        <p class="badge-arrow"></p>
        <div class="text">
          <h3>{{ item.title }}</h3>
          <p class="tt" v-if="!item.is_open">敬请期待！</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Toast } from 'vant'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'voteActivityTime',
      'guessingActivityTime',
      'doubleActivityTime',
      'giftActivityTime',
    ]),
    list() {
      return [
        {
          path: '/vote',
          title: '奔赴卡塔尔',
          start_time: this.voteActivityTime.start_time,
          end_time: this.voteActivityTime.end_time,
          is_open: this.voteActivityTime.is_open === 1,
        },
        {
          path: '/guessing',
          title: '世界杯竞猜',
          start_time: this.guessingActivityTime.start_time,
          end_time: this.guessingActivityTime.end_time,
          is_open: this.guessingActivityTime.is_open === 1,
        },
        {
          path: '/gift',
          title: '世界杯礼遇挚献',
          start_time: this.giftActivityTime.start_time,
          end_time: this.giftActivityTime.end_time,
          is_open: this.giftActivityTime.is_open === 1,
        },
        {
          path: '/doulbeEggs',
          title: '双旦福利来袭',
          start_time: this.doubleActivityTime.start_time,
          end_time: this.doubleActivityTime.end_time,
          is_open: this.doubleActivityTime.is_open === 1,
        },
      ]
    },
  },
  methods: {
    getTime(item) {
      const { start_time, end_time } = item
      return `${this.removeTime(start_time)}至${this.removeTime(end_time)}`
    },
    removeTime(timeStr) {
      if (timeStr) {
        timeStr = timeStr.split(' ')[0]
      }
      return timeStr
    },
    clickMenu(item) {
      Toast({
        message: '暂未开放，敬请期待',
      })
    },
  },
}
</script>
<style lang="stylus" src="./v-menu.styl" scoped></style>
