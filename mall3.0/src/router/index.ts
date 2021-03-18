import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/home/index.vue'),
    meta: {
      title: '首页',
      showTab: true,
      keepAlive: true
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/login/signin.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/login/signup.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/power',
    name: 'Power',
    component: () => import('../views/power/index.vue'),
    meta: {
      title: '扩展功能',
      showTab: true
    }
  },
  {
    path: '/power/svg-icon',
    name: 'SvgIcon',
    component: () => import('../views/power/demo/svgicon.vue'),
    meta: {
      title: '图标组件'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user/index.vue'),
    meta: {
      title: '个人中心',
      showTab: true
    }
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
