<template>
<div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="img in swiperList" :key="img.id"><img class="swiper-img" :src="img.imgUrl" :alt="img.id" ></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 5000
        // ,
        // swiperList: [
        //   {
        //     id: '0001',
        //     imgUrl:
        //       'static/4847ea66072c7b02.jpg_750x200_c32457fb.jpg'
        //   },
        //   {
        //     id: '0002',
        //     imgUrl:
        //       'static/0a2e0bd8eb0c0802.png_750x200_0a34d4a8.png'
        //   },
        //   {
        //     id: '0003',
        //     imgUrl:
        //       'static/6332699c44387902.jpg_750x200_b7afa4f8.jpg'
        //   },
        //   {
        //     id: '0004',
        //     imgUrl:
        //       'static/f63bd04dd5319602.jpg_750x200_6ba8e0ca.jpg'
        //   }
        // ]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #ffffff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.66%;
  background-color: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
