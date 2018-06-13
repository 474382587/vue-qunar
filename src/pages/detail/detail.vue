<template>
    <div>
      <detail-banner :imageList="imageList"></detail-banner>
    </div>
</template>

<script>
import Banner from './components/banner.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      imageList: []
    }
  },
  components: {
    'detail-banner': Banner
  },
  mounted () {
    axios.get('/vue-qunar/dist/static/mock/gallery.json')
      .then(res => {
        res = res.data
        const data = res.data
        this.imageList = data.galleryImage
      })
  }
}
</script>

<style>

</style>
