import loginPage from "../pages/noAuth/login.vue";
import forgetPassword from "../pages/noAuth/forgetPassword.vue";
import registerPage from "../pages/noAuth/register.vue";
export default [
  {
    path: "/login",
    component: loginPage,
    meta: {
      title: "登录",
    },
  },
  {
    path: "/forgetPassword",
    component: forgetPassword,
    meta: {
      title: "忘记密码",
    },
  },
  {
    path: "/register",
    component: registerPage,
    meta: {
      title: "注册",
    },
  },
];
