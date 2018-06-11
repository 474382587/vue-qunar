<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/header.vue'
import CitySearch from './components/search.vue'
import CityList from './components/list.vue'
import Alphabet from './components/alphabet.vue'
export default {
  name: 'City',
  components: {
    'city-header': CityHeader,
    'city-search': CitySearch,
    'city-list': CityList,
    'city-alphabet': Alphabet
  }
}
</script>

<style lang="stylus" scoped>
</style>
