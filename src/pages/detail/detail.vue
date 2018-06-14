<template>
    <div>
      <detail-banner :imageList="imageList"></detail-banner>
      <detail-header :imageList="imageList"></detail-header>
      <div class="content">Dummy Data</div>
    </div>
</template>

<script>
import Banner from './components/banner.vue'
import DetailHeader from './components/header.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      imageList: []
    }
  },
  components: {
    'detail-banner': Banner,
    'detail-header': DetailHeader
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

<style lang="stylus" scoped>
.content
  height 50rem
</style>
