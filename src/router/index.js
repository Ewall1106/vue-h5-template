import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 首页
  {
    path: "*",
    name: "Home",
    // 路由懒加载：https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
    // webpackPreload：https://www.jianshu.com/p/bbdcfeee7fbc
    component: () => import(/* webpackPreload: true */ "@/views/home"),
    meta: {
      title: "首页",
      showTab: true,
      keepAlive: true,
    },
  },
  // 登录
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/auth/login"),
    meta: {
      title: "登录",
    },
  },
  // 注册
  {
    path: "/registration",
    name: "Registration",
    component: () => import("@/views/auth/regist"),
    meta: {
      title: "注册",
    },
  },
  // 找回密码
  {
    path: "/forget",
    name: "Forget",
    component: () => import("@/views/auth/forget"),
    meta: {
      title: "找回密码",
    },
  },

  // 我的
  {
    path: "/user",
    name: "User",
    component: () => import("@/views/user"),
    meta: {
      title: "我的",
      showTab: true,
    },
  },
];

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
