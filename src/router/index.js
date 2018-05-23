import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from '@/view/goods'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/test',
    name: 'test',
    component: Test,
  }]
})
