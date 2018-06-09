<template>
   <div>
     <home-header></home-header>
     <home-swiper></home-swiper>
     <home-icons></home-icons>
   </div>
</template>

<script>
import Header from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
export default {
  name: 'Home',
  components: {
    'home-header': Header,
    'home-swiper': HomeSwiper,
    'home-icons': HomeIcons
  }
}
</script>

<style>
</style>
