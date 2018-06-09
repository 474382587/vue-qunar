<template>
<div class="icons">
  <div class="icon" v-for="item in iconList" :key="item.id">
    <div class="icon-img">
      <img class="icon-img-content" :src="item.imgUrl" alt="item.id">
    </div>
    <p class="icon-desc">{{item.description}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      iconList: [
        {
          id: '01',
          imgUrl: 'static/f3dd6c383aeb3b02.png',
          description: 'something'
        },
        {
          id: '02',
          imgUrl: 'static/fdf170ee89594b02.png',
          description: 'something'
        },
        {
          id: '03',
          imgUrl: 'static/9f7b9b2b60c1502.png',
          description: 'something'
        },
        {
          id: '04',
          imgUrl: 'static/9f7b9b2b60c1502.png',
          description: 'something'
        },
        {
          id: '05',
          imgUrl: 'static/eb88861d78fb9902.png',
          description: 'something'
        },
        {
          id: '06',
          imgUrl: 'static/9e54a8540fee0102.png',
          description: 'something'
        },
        {
          id: '07',
          imgUrl: 'static/c2b659e048b11602.png',
          description: 'something'
        },
        {
          id: '08',
          imgUrl: 'static/cf572be30fc32f02.png',
          description: 'something'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl';

.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  padding-top .1rem
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
}
</style>
