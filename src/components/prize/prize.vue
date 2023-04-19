<template>
  <div class="itemListWrapper">
    <div class="itemListBox" v-if="prizeList.length">
      <swiper :options="swiperOption" class="itemList">
        <swiper-slide
          v-for="(item, index) in prizeList"
          :key="index"
          class="item"
        >
          <div class="imgBox">
            <img :src="item.url" alt />
          </div>
          <div class="title">
            <p class="no-wrap">{{ item.name }}</p>
            <div class="num">
              <span>已派发：{{ item.num }} </span>
              <span v-if="item.name === '彩金'"> 元</span>
              <span v-else> 件</span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- <div class="prev swiper-button-prev"></div> -->
      <!-- <div class="next swiper-button-next"></div> -->
    </div>
  </div>
</template>

<script>
import { prizelist } from '@/api'
export default {
  props: {},
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        spaceBetween: 15,
        loop: true,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
        },
      },
      prizeList: [],
      // IS_STATIC_ENV,
    }
  },
  computed: {},
  created() {
    this.getPrizeList()
  },
  mounted() {},
  methods: {
    async getPrizeList() {
      const { code, data } = await prizelist({
        page: 1,
        size: 100,
      })
      if (code === 0) {
        this.prizeList = data
      }
    },
    // 数据初始化
    async _initialData() {
      let prizeList = []
      let giftList = {}
      // 获取奖品列表
      let res = await prizesInfo()
      if (this.ERR_OK === res.code) {
        prizeList = res.result.prizesInfo
      }
      // 获取派发件数
      let res2 = await queryGift()
      if (this.ERR_OK === res2.code) {
        giftList = res2.result
      }
      // 添加假数据
      if (prizeList.length) {
        prizeList = prizeList.map((item) => {
          item.totalNum = giftList[item.actKey]
          return item
        })
      }
      this.prizeList = prizeList
    },
    //静态打包初始化
    _staticInitialData() {
      let data = require('./data.js')
      data = data.result.prizesInfo
      data = data.filter((item) => item.actKey)
      this.prizeList = data
    },
  },
  components: {},
}
</script>

<style lang="stylus" scoped>
@import './prize.styl'
</style>
