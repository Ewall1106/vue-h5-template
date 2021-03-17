import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Home" */ '../views/home/index.vue'),
    meta: {
      title: '首页',
      showTab: true,
      keepAlive: true
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () =>
      import(/* webpackChunkName: "Signin" */ '../views/login/signin.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () =>
      import(/* webpackChunkName: "Signup" */ '../views/login/signup.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/power',
    name: 'Power',
    component: () =>
      import(/* webpackChunkName: "Power" */ '../views/power/index.vue'),
    meta: {
      title: '扩展功能',
      showTab: true
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () =>
      import(/* webpackChunkName: "User" */ '../views/user/index.vue'),
    meta: {
      title: '个人中心',
      showTab: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
