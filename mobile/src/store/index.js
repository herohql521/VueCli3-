/*
 * @Author: heql
 * @Begin: 2020-04-04 
 * @Update: 2020-04-04
 * @Update log: 更新日志
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store