import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/view/test'
import Title1 from '@/view/Title1'
import Title2 from '@/view/Title2'
import Goods from '@/view/goods'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/test',
      name: 'HelloWorld',
      component: Test,
      children: [{
          path: 'Title1',
          name: 'Title1',
          component: Title1
        },
        {
          path: 'Title2',
          name: 'Title2',
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
