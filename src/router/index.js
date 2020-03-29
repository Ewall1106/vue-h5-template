import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login')
  },
  // 首页
  {
    path: '*',
    name: 'Home',
    // 路由懒加载：https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
    // preload：https://www.jianshu.com/p/bbdcfeee7fbc
    component: () => import(/* webpackPreload: true */ '@/views/home'),
    meta: {
      showTab: true
    }
  },
  // 分类
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category'),
    meta: {
      showTab: true
    }
  },
  // 购物车
  // 我的

  // 商品列表
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/views/product')
  },
  // 商品详情
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/detail')
  },
  // 地址管理
  {
    path: '/address',
    name: 'Address',
    component: () => import('@/views/address')
  },
  // 地址编辑
  {
    path: '/address/edit',
    name: 'AddressEdit',
    component: () => import('@/views/address/edit')
  }
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
