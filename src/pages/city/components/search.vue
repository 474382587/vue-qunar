<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" placeholder="Please enter city name..." class="search-input">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item in list" :key="item.id">
                    {{item.spell.charAt(0).toUpperCase() + item.spell.slice(1)}}
                </li>
                <li class="search-item border-bottom" v-if="hasNoData">Result not found.</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timmer: null,
      enterData: false
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length && !this.enterData
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs['search'])
  },
  watch: {
    keyword () {
      this.enterData = true
      if (this.timmer) {
        clearTimeout(this.timmer)
      }
      this.timmer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
        if (!this.keyword) {
          this.list = []
        }
        this.enterData = false
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
.search
    height .72rem
    background-color $bgColor
    padding 0 .1rem
    .search-input
        box-sizing border-box
        width 100%
        height .62rem
        padding 0 .1rem
        line-height .62rem
        text-align center
        border-radius .06rem
        color #666
.search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background-color #eee
    .search-item
        line-height .62rem
        padding-left .2rem
        color #666
        background-color #fff
.border-bottom
    &:before
        background-color #e3e3e3
</style>
