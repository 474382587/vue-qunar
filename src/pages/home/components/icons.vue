<template>
<div class="icons">
  <swiper>
    <swiper-slide v-for="(page, index) in pages" :key="index">
      <div class="icon" v-for="item in page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" alt="item.id">
        </div>
        <p class="icon-desc">{{item.description}}</p>
      </div>
    </swiper-slide>
  </swiper>
  <!-- <div class="icon" v-for="item in iconList" :key="item.id">
    <div class="icon-img">
      <img class="icon-img-content" :src="item.imgUrl" alt="item.id">
    </div>
    <p class="icon-desc">{{item.description}}</p>
  </div> -->
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      swiperOption: '',
      iconList: [
        {
          id: '01',
          imgUrl: 'static/f3dd6c383aeb3b02.png',
          description: 'Tickets'
        },
        {
          id: '02',
          imgUrl: 'static/fdf170ee89594b02.png',
          description: 'Must-go'
        },
        {
          id: '03',
          imgUrl: 'static/13ceb38dcf262f02.png',
          description: 'Spring Break'
        },
        {
          id: '04',
          imgUrl: 'static/9f7b9b2b60c1502.png',
          description: 'Day Trip'
        },
        {
          id: '05',
          imgUrl: 'static/eb88861d78fb9902.png',
          description: 'Garden / Zoo'
        },
        {
          id: '06',
          imgUrl: 'static/9e54a8540fee0102.png',
          description: 'Museum'
        },
        {
          id: '07',
          imgUrl: 'static/c2b659e048b11602.png',
          description: 'Theme park'
        },
        {
          id: '08',
          imgUrl: 'static/cf572be30fc32f02.png',
          description: 'Top-pick'
        },
        {
          id: '09',
          imgUrl: 'static/67df61427c8e1302.png',
          description: 'Concert'
        },
        {
          id: '10',
          imgUrl: 'static/c70f1e85ae4a4f02.png',
          description: 'Natural Scenery'
        },
        {
          id: '11',
          imgUrl: 'static/831d62d2e1c7be02.png',
          description: 'Historical'
        },
        {
          id: '12',
          imgUrl: 'static/cce1231836f10a02.png',
          description: 'Regional'
        },
        {
          id: '13',
          imgUrl: 'static/37560ece9c62b502.png',
          description: 'Cityscape'
        },
        {
          id: '14',
          imgUrl: 'static/8246f27355943202.png',
          description: 'Playground'
        }
      ]
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
  height: 0;
  padding-bottom: 50%;
  padding-top: 0.1rem;
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
    ellispsis()
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
