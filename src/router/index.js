import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '*',
    name: 'Home',
    // 路由懒加载：https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
    // webpackPreload：https://www.jianshu.com/p/bbdcfeee7fbc
    component: () => import(/* webpackPreload: true */ '@/views/home'),
    meta: {
      showTab: true,
      keepAlive: true
    }
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login')
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
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart')
  },
  // 我的
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user'),
    meta: {
      showTab: true
    }
  },
  // 商品列表
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/views/product'),
    meta: {
      keepAlive: true
    }
  },
  // 商品详情
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/detail'),
    meta: {
      keepAlive: true
    }
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
