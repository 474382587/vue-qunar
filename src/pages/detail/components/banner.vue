<template>
    <div>
        <div class="banner" @click="openGallery">
            <img class="banner-img" :src="bannerData.bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">{{bannerData.sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe600;</span>
                33</div>
            </div>
        </div>
        <common-gallery v-show="displayGallery" :imageList="bannerData.galleryImage" @hide="hideGallery"></common-gallery>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/gallery.vue'
export default {
  name: 'Banner',
  components: {
    'common-gallery': CommonGallery
  },
  props: {
    bannerData: Object
  },
  data () {
    return {
      displayGallery: false
    }
  },
  methods: {
    openGallery () {
      this.displayGallery = true
    },
    hideGallery () {
      this.displayGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .banner-img
        width 100%
    .banner-info
        background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
        position absolute
        left 0
        right  0
        bottom 0
        line-height .6rem
        display flex
        .banner-title
            font-size .32rem
            flex 1
            color #fff
            padding 0 .2rem
        .banner-number
            margin-top .14rem
            padding 0 .4rem
            height .32rem
            line-height .32rem
            border-radius .2rem
            font-size .24rem
            background rgba(0, 0, 0, .8)
            color #fff
            .banner-icon
                font-size .24rem
</style>
