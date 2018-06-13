<template>
   <div>
     <home-header></home-header>
     <home-swiper :swiperList="swiperList"></home-swiper>
     <home-icons :iconList="iconList"></home-icons>
     <home-recommend :recommendList="recommendList"></home-recommend>
     <home-weekend></home-weekend>
   </div>
</template>

<script>
import axios from 'axios'
import Header from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
export default {
  name: 'Home',
  components: {
    'home-recommend': HomeRecommend,
    'home-header': Header,
    'home-swiper': HomeSwiper,
    'home-icons': HomeIcons,
    'home-weekend': HomeWeekend
  },
  mounted () {
    this.getHomeInfo()
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/vue-qunar/dist/static/mock/index.json')
        .then(this.handleGetHomeInfoSucc)
    },
    handleGetHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
      }
    },
    getHomeInfoSuccess (res) {
      console.log(res)
    }
  }
}
</script>

<style>
</style>
