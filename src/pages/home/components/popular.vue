<template>
  <div class="popular">
    <div class="title"><div><img class="popular-title-icon" src="static/popularIcon.png" alt="">Trending This Week</div><router-link class="popular-title-link" to="/">More Places</router-link></div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in popularList" :key="item.id">
        <router-link :to="'/detail/' + item.id">
          <img class="topIcon" :src="'static/top' + item.id + '.png'" alt="" v-if="item.id < 4">
          <img class="swiper-img" :src="item.imgUrl" :alt="item.id" >
          <div class="description">
            <p class="name">{{item.title}}</p>
            <p class="price">$<span>{{item.price}}</span></p>
          </div>
        </router-link>
      </swiper-slide>
      <!-- <swiper-slide><img class="swiper-img" src="" alt="" >sdad</swiper-slide> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomePopular',
  props: {
    popularList: Array
  },
  data () {
    return {
      swiperOptions: {
        slidesPerView: 3.5
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/variables.styl'
.popular >>> .swiper-wrapper
  padding .1rem .2rem
.popular >>> .swiper-slide
  margin-right .06rem
  width 2rem
.popular
  .title
    display flex
    justify-content space-between
    margin-left .08rem
    font-size .32rem
    height .96rem
    line-height .96rem
    .popular-title-link
      font-size .28rem
      color #666
      margin-right .2rem
    .popular-title-icon
      width .3rem
      padding 0 .1rem .1rem
  .topIcon
    position absolute
    width .84rem
    height .4rem
    top -.08rem
    left 0.08rem
    border-radius .04rem
    overflow hidden
  .description
    margin .1rem 0
    text-align center
    .name
      line-height .36rem
      height .36rem
      font-size .24rem
      ellipsis()
      width 1.9rem
      margin 0 auto
      color #666
    .price
      line-height .36rem
      height .36rem
      font-size .24rem
      ellipsis()
      width 1.9rem
      margin 0 auto
      color #666
      span
        color #ff8300
.swiper-img
  margin 0 auto
  display block
  width 2rem
</style>
