import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: () => import("@/views/home"),
    meta: {
      title: "能力",
      showTab: true,
    },
  },
  {
    path: "/home",
    name: "Power",
    component: () => import("@/views/home"),
    meta: {
      title: "能力",
      showTab: true,
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
];

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
