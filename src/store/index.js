import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 导出vuex,创建一个仓库store
export default new Vuex.Store({
    state: {
        city: '杭州'
    },
    actions: {
        changeCity(ctx, city) {
            ctx.commit('changeCity', city)
        }
    },
    mutations: {
        changeCity(state, city) {
            state.city = city;
        }
    }
})