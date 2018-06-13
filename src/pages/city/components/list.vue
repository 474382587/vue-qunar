<template>
    <div class="list" ref="wrapper">
        <div @click="onCitySelect">
            <!--Current Location-->
            <div class="area">
                    <div class="title border-topbottom">Current Location</div>
                    <div class="button-list">
                        <div class="button-wrapper">
                            <div class="button">{{this.$store.state.city}}</div>
                        </div>
                    </div>
                </div>
                <!--Popular Location-->
                <div class="area">
                    <div class="title border-topbottom">Most Popular</div>
                    <div class="button-list">
                        <div class="button-wrapper" v-for="item in pop" :key="item.id" @click="onCityClick((item.spell).charAt(0).toUpperCase()+(item.spell).slice(1))">
                            <div class="button">{{(item.spell).charAt(0).toUpperCase()+(item.spell).slice(1)}}</div> <!-- item.name -->
                        </div>
                    </div>
                </div>
                <!--City List-->
                <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
                    <div class="title  border-topbottom">{{key}}</div>
                    <div class="item-list">
                        <div class="item border-topbottom" v-for="innerItem in item" :key="innerItem.id" @click="onCityClick((innerItem.spell).charAt(0).toUpperCase()+(innerItem.spell).slice(1))">{{(innerItem.spell).charAt(0).toUpperCase()+(innerItem.spell).slice(1)}}</div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    pop: Array,
    letter: String
  },
  methods: {
    onCityClick (city) {
      this.$store.dispatch('changeCity', city)
    },
    onCitySelect () {
      this.$router.push({path: '/'})
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      // better scroll function
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
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

.list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
}

.border-bottom {
    &:before {
        background-color: #ccc;
    }
}

.title {
    line-height: 0.54rem;
    background-color: #eeeeee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
}

.button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
        width: 33.33%;
        float: left;

        .button {
            margin: 0.1rem;
            padding: 0.1rem 0;
            border-radius: 0.06rem;
            text-align: center;
            border: 0.02rem solid #ccc;
        }
    }
}

.item-list {
    .item {
        line-height: 0.66rem;
        padding: 0.2rem;
    }
}
</style>
