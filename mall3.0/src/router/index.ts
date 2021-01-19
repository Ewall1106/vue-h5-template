import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/home/index.vue')
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
