<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :pop="popularCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="onLetterChange"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/header.vue'
import CitySearch from './components/search.vue'
import CityList from './components/list.vue'
import Alphabet from './components/alphabet.vue'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    'city-header': CityHeader,
    'city-search': CitySearch,
    'city-list': CityList,
    'city-alphabet': Alphabet
  },
  data () {
    return {
      cities: {},
      popularCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/vue-qunar/dist/static/mock/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.popularCities = data.hotCities
      }
    },
    onLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
