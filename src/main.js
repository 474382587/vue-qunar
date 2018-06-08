// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Vue awsome swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

// 300ms 点击延迟 / 300ms click latency
import fastClick from 'fastclick'
// reset your CSS style for all browser
import 'styles/reset.css'
// solution for CSS 1px different on high resolution screen cellphones
import 'styles/border.css'
// get iconfont
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper /* { default global options } */)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
