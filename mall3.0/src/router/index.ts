import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Home" */ '../views/home/index.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () =>
      import(/* webpackChunkName: "Signin" */ '../views/login/signin.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () =>
      import(/* webpackChunkName: "Signup" */ '../views/login/signup.vue')
  },
  {
    path: '/power',
    name: 'Power',
    component: () =>
      import(/* webpackChunkName: "Signup" */ '../views/power/index.vue')
  }
  // {
  //   path: '/user',
  //   name: 'User',
  //   component: () =>
  //     import(/* webpackChunkName: "user" */ '../views/user/index.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
