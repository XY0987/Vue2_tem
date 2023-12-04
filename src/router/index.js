import VueRouter from "vue-router";
// 创建一个路由器
const router = new VueRouter({
  routes: [],
});
//路由守卫
let allUserPages = [];
router.beforeEach((to, from, next) => {});
// 添加标题
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});
export default router;
