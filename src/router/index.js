import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Home',
    // 路由懒加载：https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
    // preload：https://www.jianshu.com/p/bbdcfeee7fbc
    component: () => import(/* webpackPreload: true */ '@/views/home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login')
  },
  {
    path: '/iconfont',
    name: 'IconFont',
    component: () => import('@/views/about/iconfont')
  }
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
