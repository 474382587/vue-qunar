<template>
    <div>
        <city-header></city-header>
    </div>
</template>

<script>
import CityHeader from './components/header.vue'
export default {
  name: 'City',
  components: {
    'city-header': CityHeader
  }
}
</script>

<style lang="stylus" scoped>
</style>
