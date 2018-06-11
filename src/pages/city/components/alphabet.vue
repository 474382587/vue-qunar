<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
    </ul>
</template>

<script>
export default {
  name: 'Alphabet'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
.list
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    display flex
    flex-direction column
    justify-content center
    .item
        line-height .4rem
        text-align center
        color $bgColor
</style>
