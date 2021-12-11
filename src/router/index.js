import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: () => import("@/views/power"),
    meta: {
      title: "能力",
      showTab: true,
    },
  },
  {
    path: "/power",
    name: "Power",
    component: () => import("@/views/power"),
    meta: {
      title: "能力",
      showTab: true,
    },
  },
  {
    path: "/show",
    name: "Show",
    component: () => import("@/views/show"),
    meta: {
      title: "演示",
      showTab: true,
      keepAlive: true,
    },
  },
  {
    path: "/user",
    name: "User",
    component: () => import("@/views/user"),
    meta: {
      title: "我的",
      showTab: true,
    },
  },
  {
    path: "/signin",
    name: "Login",
    component: () => import("@/views/login/signIn"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/signup",
    name: "SingUp",
    component: () => import("@/views/login/signUp"),
    meta: {
      title: "注册",
    },
  },
  // 基础组件 Demo
  {
    path: "/power/svg-icon",
    component: () => import("@/views/demo/svg-icon"),
    meta: {
      title: "图标组件",
    },
  },
  {
    path: "/power/back-top",
    component: () => import("@/views/demo/back-top"),
    meta: {
      title: "返回顶部",
    },
  },
];

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
