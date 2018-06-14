import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import City from '@/pages/city/city.vue'
import Detail from '@/pages/detail/detail.vue'
// import List from '@/pages/list/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      // dynamic router
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
