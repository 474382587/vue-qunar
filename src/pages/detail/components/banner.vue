<template>
    <div class="banner">
        <img class="banner-img" src="static/4003f9dd7bebf61eccbf64046e26d487.water.jpg_600x330_a80ff353.jpg" alt="">
        <div class="banner-info">
            <div class="banner-title">LA Disneyland</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe600;</span>
            33</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Banner'
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
