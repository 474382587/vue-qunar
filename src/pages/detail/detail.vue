<template>
    <div>
      <detail-banner :bannerData="bannerData"></detail-banner>
      <detail-header></detail-header>
      <div class="content">
        <detail-list :list="categoryList"></detail-list>
      </div>
    </div>
</template>

<script>
import Banner from './components/banner.vue'
import DetailHeader from './components/header.vue'
import DetailList from './components/list.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      bannerData: {},
      categoryList: []
    }
  },
  components: {
    'detail-banner': Banner,
    'detail-header': DetailHeader,
    'detail-list': DetailList
  },
  mounted () {
    axios.get('/vue-qunar/dist/static/mock/detail.json', {
      params: {
        id: this.$route.params.id
      }
    }).then(res => {
      res = res.data
      const data = res.data
      this.bannerData = {
        bannerImg: data.bannerImg,
        sightName: data.sightName,
        galleryImage: data.galleryImage
      }
      this.categoryList = data.categoryList
    })
  }
}
</script>

<style lang="stylus" scoped>
.content {
  height: 20rem;
}
</style>
