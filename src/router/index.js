import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/view/test'
import Title1 from '@/view/title1'
import Title2 from '@/view/title2'
import Goods from '@/view/goods'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '/',
    components: {
      default: Goods,
      title1: Title1,
      title2: Title2
    }
  }]
})
