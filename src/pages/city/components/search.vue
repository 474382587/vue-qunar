<template>
    <div class="search">
        <input type="text" placeholder="Please enter city name..." class="search-input">
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>
