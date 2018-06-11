<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                    <div class="title border-topbottom">Current Location</div>
                    <div class="button-list">
                        <div class="button-wrapper"><div class="button">Vancouver</div></div>
                        <div class="button-wrapper"><div class="button">Burnaby</div></div>
                        <div class="button-wrapper"><div class="button">Richmond</div></div>
                    </div>
                </div>
                <div class="area">
                    <div class="title border-topbottom">Most Popular</div>
                    <div class="button-list">
                        <div class="button-wrapper"><div class="button">Toronto</div></div>
                        <div class="button-wrapper"><div class="button">Calgary</div></div>
                        <div class="button-wrapper"><div class="button">Vancouver</div></div>
                    </div>
                </div>
                <div class="area">
                    <div class="title  border-topbottom">A</div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                </div>
                <div class="area">
                    <div class="title  border-topbottom">A</div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                </div>
                <div class="area">
                    <div class="title  border-topbottom">A</div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                    <div class="item-list">
                        <div class="item border-topbottom">Abbotsford</div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.border-topbottom {
    &:before {
        border-color: #ccc;
    }

    &:after {
        border-color: #ccc;
    }
}
.list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
.border-bottom
    &:before
        background-color #ccc
.title {
    line-height: 0.54rem;
    background-color: #eeeeee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
}
.button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrapper
        width 33.33%
        float left
        .button
            margin .1rem
            padding .1rem 0
            border-radius .06rem
            text-align center
            border .02rem solid #ccc
.item-list
    .item
        line-height .66rem
        padding .2rem
</style>
