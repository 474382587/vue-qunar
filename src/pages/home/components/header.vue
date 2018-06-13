<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-down">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!--scope ensure this style is only applied at this .vue file -lang states the css syntax-->
<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  background: $bgColor;
  display: flex;
  line-height: 0.86rem;
  color: #fff;
  .header-left
    .back-icon
      text-align: center;
      font-size: .4rem;
    width: .64rem;
    float: left;
  .header-input
    padding-left: .2rem;
    flex: 1;
    margin-top: .12rem;
    height: .64rem;
    line-height: .64rem;
    margin-left: .2rem
    background: #fff;
    border-radius: .1rem;
    color: #ccc;
  .header-right
    .arrow-down
      font-size: .24rem;
      margin-left: -.04rem;
    // width: 1.64rem;
    padding: 0 .2rem
    float: right;
    text-align: center;
    color #fff
</style>
