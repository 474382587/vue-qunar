import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/state.js'
import actions from './actions/actions.js'
import mutations from './mutations/mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
  // getters: {
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
