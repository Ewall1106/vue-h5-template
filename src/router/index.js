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
      title: '首页',
      showTab: true,
      keepAlive: true
    }
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login'),
    meta: {
      title: '登录'
    }
  },
  // 分类
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category'),
    meta: {
      title: '分类',
      showTab: true
    }
  },
  // 购物车
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart'),
    meta: {
      title: '购物车',
      showTab: true
    }
  },
  // 我的
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user'),
    meta: {
      title: '我的',
      showTab: true
    }
  },
  // 商品列表
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/views/product'),
    meta: {
      title: '商品列表',
      keepAlive: true
    }
  },
  // 商品详情
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/detail'),
    meta: {
      title: '商品详情',
      keepAlive: true
    }
  },
  // 地址管理
  {
    path: '/address',
    name: 'Address',
    component: () => import('@/views/address'),
    meta: {
      title: '地址管理'
    }
  },
  // 地址编辑
  {
    path: '/address/edit',
    name: 'AddressEdit',
    component: () => import('@/views/address/edit'),
    meta: {
      title: '地址编辑'
    }
  },
  // 搜索
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search'),
    meta: {
      title: '搜索'
    }
  },
  // 搜索结果
  {
    path: '/search/list',
    name: 'SearchList',
    component: () => import('@/views/search/list'),
    meta: {
      title: '搜索结果',
      keepAlive: true
    }
  }
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
