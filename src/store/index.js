import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// 导出vuex,创建一个仓库store
export default new Vuex.Store({
    state,
    actions,
    mutations
})