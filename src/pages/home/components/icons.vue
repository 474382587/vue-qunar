<template>
<div class="icons">
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(page, index) in pages" :key="index">
      <div class="icon" v-for="item in page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" alt="item.id">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'

.icons>>> .swiper-container {
  height: 0
  padding-bottom: 55%;
  margin-top: 0.1rem;
  .swiper-pagination{
    top: 92%;
    .swiper-pagination-bullet-active{
      background-color: $bgColor;
    }
  }
}

.icon {
  height: 0;
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  padding-bottom: 25%;

  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.44rem;
    height: 0.44rem;
    color: $darkTextColor;
    text-align: center;
    ellipsis()
  }

  .icon-img {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;

    .icon-img-content {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }
}
</style>
