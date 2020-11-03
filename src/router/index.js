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
  // 注册
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('@/views/auth/regist'),
    meta: {
      title: '注册'
    }
  },
  // 找回密码
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('@/views/auth/forget'),
    meta: {
      title: '找回密码'
    }
  },
  // 分类
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category'),
    meta: {
      title: '分类',
      showTab: true,
      keepAlive: true
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
    component: () => import('@/views/address/list'),
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
      title: '搜索结果'
    }
  },
  // 确认订单
  {
    path: '/order/confirm',
    name: 'OrderConfirm',
    component: () => import('@/views/order/confirm'),
    meta: {
      title: '确认订单'
    }
  },
  // 订单列表
  {
    path: '/order/list',
    name: 'OrderList',
    component: () => import('@/views/order/list'),
    meta: {
      title: '订单列表'
    }
  },
  // 订单支付状态-失败、成功
  {
    path: '/order/status',
    name: 'OrderStatus',
    component: () => import('@/views/order/status'),
    meta: {
      title: '支付状态'
    }
  },
  // 订单详情
  {
    path: '/order/detail',
    name: 'OrderDetail',
    component: () => import('@/views/order/detail'),
    meta: {
      title: '订单详情'
    }
  }
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
