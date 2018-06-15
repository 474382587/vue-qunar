<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont back-icon header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs"  :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            Details
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    onScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60 && top < 140) {
        const opacity = top / 140
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else if (top >= 140) {
        this.opacityStyle = {
          opacity: '1'
        }
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.onScroll)
  },
  // global eventlistener removal
  deactivated () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.8);

  .header-abs-back {
    color: #ffffff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  z-index 2
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  line-height: 0.86rem;
  height: 0.86rem;
  text-align: center;
  color: #ffffff;
  background-color: $bgColor;
  font-size: 0.34rem;

  .header-fixed-back {
    top: 0;
    left: 0;
    position: absolute;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #ffffff;
  }
}
</style>
