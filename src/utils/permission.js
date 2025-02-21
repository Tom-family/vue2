import router from "../router";
import store from "../store";

const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  const token = store.state.user.token;
  document.title = to.meta.title ? to.meta.title : "你好啊";
  if (token) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next({ path: "/login" });
    }
  }
});

router.afterEach(() => {});
