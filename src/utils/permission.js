import router from "../router";
import store from "../store";
import { Toast, Notify } from "vant";
import { getToken } from "@/utils/auth";

import { blackList } from "./util";

router.beforeEach(async (to, from, next) => {
  // Set Title
  document.title = to.meta.title || "vue-h5-template";

  const hasToken = getToken();

  if (hasToken) {
    if (to.path === "/signin") {
      next({ path: "/" });
    } else {
      const hasUserInfo = store.getters.uid;
      if (hasUserInfo) {
        next();
      } else {
        try {
          await store.dispatch("user/getInfo");
          next();
        } catch (error) {
          await store.dispatch("user/resetToken");
          Toast.fail(error.message || "出错了");
          next("/signin");
        }
      }
    }
  } else {
    if (blackList.indexOf(to.path) === -1) {
      return next();
    } else {
      Notify({ type: "primary", message: "请先登录后再操作" });
      next("/signin");
    }
  }
});

router.afterEach(() => {
  Toast.clear();
});
