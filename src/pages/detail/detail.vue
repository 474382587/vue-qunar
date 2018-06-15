<template>
    <div>
      <detail-banner :imageList="imageList"></detail-banner>
      <detail-header :imageList="imageList"></detail-header>
      <div class="content">
        <detail-list :list="list"></detail-list>
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
      imageList: [],
      list: [
        {
          title: 'Adult',
          children: [
            {
              title: 'Adult Ticket Rate1',
              children: [
                {
                  title: 'Adult Ticket Rate11'
                },
                {
                  title: 'Adult Ticket Rate12'
                }
              ]
            },
            {
              title: 'Adult Ticket Rate2'
            },
            {
              title: 'Adult Ticket Rate3'
            }
          ]
        },
        {
          title: 'Child'
        },
        {
          title: 'Senior'
        },
        {
          title: 'Special'
        }
      ]
    }
  },
  components: {
    'detail-banner': Banner,
    'detail-header': DetailHeader,
    'detail-list': DetailList
  },
  mounted () {
    axios.get('/vue-qunar/dist/static/mock/gallery.json').then(res => {
      res = res.data
      const data = res.data
      this.imageList = data.galleryImage
    })
  }
}
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
