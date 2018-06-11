<template>
    <div class="header">
        Select City
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.header {
    line-height: 0.86rem;
    height: 0.86rem;
    overflow: hidden;
    text-align: center;
    color: #ffffff;
    background-color: $bgColor;
    position: relative;
    font-size: 0.34rem;

    .header-back {
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
