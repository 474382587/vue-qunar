<template>
   <div>
     <home-header></home-header>
     <home-swiper></home-swiper>
   </div>
</template>

<script>
import Header from './components/header'
import HomeSwiper from './components/swiper'
export default {
  name: 'Home',
  components: {
    'home-header': Header,
    'home-swiper': HomeSwiper
  }
}
</script>

<style>
</style>
