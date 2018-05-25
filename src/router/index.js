import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/view/test'
import Title1 from '@/view/title1'
import Title2 from '@/view/title2'
import Goods from '@/view/goods'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/test',
      name: 'test',
      component: Test,
      children: [{
          path: 'title1',
          name: 'title1',
          component: Title1
        },
        {
          path: 'title2',
          name: 'title2',
          component: Title2
        }
      ]
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    }
  ]
})
