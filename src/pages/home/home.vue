<template>
   <div>
     <home-header></home-header>
     <home-swiper></home-swiper>
     <home-icons></home-icons>
     <home-recommend></home-recommend>
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
    // this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      console.log(res)
    }
  }
}
</script>

<style>
</style>
