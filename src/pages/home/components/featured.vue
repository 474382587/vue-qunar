<template>
  <div class="featured">
    <div class="featured-item border"><span class="iconfont">&#xe640;</span>{{currentLocation}}</div>
    <div class="featured-item border"><img class="item-icon" :src="weatherIcon" alt="" v-if="!!weatherIcon">{{weather}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeFeatured',
  data () {
    return {
      currentLocation: 'Detecting...',
      weather: 'Loading Result...',
      weatherIcon: ''
    }
  },
  activated () {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(location => {
        const latlng = {
          lat: location.coords.latitude,
          lng: location.coords.longitude
        }
        this.convertToCityName(latlng)
      })
    } else {
      this.currentLocation = 'Fail to Detect'
      this.weather = 'Unknown'
    }
  },
  methods: {
    convertToCityName (coordinates) {
      // axios
      //   .get('http://www.mapquestapi.com/geocoding/v1/reverse', {
      //     params: {
      //       key: 'agbYq8Qc12YtWPHLCvYv5uJAWDTaHUPQ',
      //       location: coordinates
      //     }
      //   })
      //   .then(res => {
      //     res = res.data.results[0].locations[0].adminArea5
      //     this.currentLocation = res
      //   })
      /*
      // Here is a better one! With Weather!!!
      */
      axios
        .get('http://api.openweathermap.org/data/2.5/weather', {
          params: {
            appid: '215022a8c6b45dcd36b354ca06acc261',
            lat: coordinates.lat,
            lon: coordinates.lng
          }
        })
        .then(res => {
          res = res.data
          this.currentLocation = res.name
          this.weather = res.weather[0].main
          this.weatherIcon = `static/weatherIcons/${res.weather[0].icon}.png`
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.featured {
  display: flex;

  .featured-item {
    flex: 1;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    .iconfont {
      padding-right: 0.1rem;
    }
    .item-icon {
      width .8rem
      padding-right .2rem
    }
  }
}
</style>
