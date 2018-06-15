<template>
   <div>
     <home-header></home-header>
     <home-swiper :swiperList="swiperList"></home-swiper>
     <home-icons :iconList="iconList"></home-icons>
     <home-featured></home-featured>
     <home-popular :popularList="popularList"></home-popular>
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
import HomeFeatured from './components/featured'
import HomePopular from './components/popular'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    'home-recommend': HomeRecommend,
    'home-header': Header,
    'home-swiper': HomeSwiper,
    'home-icons': HomeIcons,
    'home-weekend': HomeWeekend,
    'home-featured': HomeFeatured,
    'home-popular': HomePopular
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.city !== this.lastCity) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      popularList: [],
      lastCity: ''
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/vue-qunar/dist/static/mock/index.json?city=' + this.city)
        .then(this.handleGetHomeInfoSucc)
    },
    handleGetHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.popularList = data.popularList
        console.log(this.popularList)
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
