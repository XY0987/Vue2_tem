<template>
  <div class="container">
    <div class="background"></div>
    <div class="content">
      <div class="header">忘记密码</div>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="100px"
        class="formBody"
      >
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码:" prop="code">
          <div class="getCodeContainer">
            <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
            <el-button
              class="getCodeBtn"
              :disabled="isDisabled"
              @click="getCode"
              >{{ getCodeTxt }}</el-button
            >
          </div>
        </el-form-item>
        <div class="operations">
          <el-button type="primary" @click="changePassword">修改密码</el-button>
        </div>
        <div class="toreg">
          <el-button type="text" @click="pageJump('/login')">
            已有账号？登录
          </el-button>
          <el-button type="text" @click="pageJump('/register')">
            还没有账号？注册
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "forgetPassword",
  data() {
    return {
      form: {
        email: "",
        password: "",
        code: "",
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "change" },
          {
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "请输入正确邮箱格式",
            trigger: "change",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "change" }],
      },
      timer: null,
      getCodeTxt: "获取验证码",
      isDisabled: false,
      time: 60,
    };
  },
  methods: {
    changePassword() {
      let yn = false;
      this.$refs.form.validate((valid) => {
        yn = valid;
        return valid;
      });
      if (!yn) {
        return;
      }
      const data = {
        userEmail: this.form.email,
        password: this.form.password,
        code: this.form.code,
      };
      console.log(data);
    },
    pageJump(url) {
      this.$router.push(url);
    },
    getCode() {
      this.isDisabled = true;
      this.timer = setInterval(() => {
        this.time--;
        this.getCodeTxt = `${this.time}后获取`;
        if (this.time <= 0) {
          clearInterval(this.timer);
          this.getCodeTxt = "获取验证码";
          this.timer = null;
          this.time = 60;
          this.isDisabled = false;
        }
      }, 1000);
      // 获取验证码
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position:
    left bottom,
    right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url("../../assets/left.svg"), url("../../assets/right.svg");
}

.content {
  width: 500px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
}

.header {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}

.formBody {
  min-width: 400px;

  .getCodeContainer {
    display: flex;

    .getCodeBtn {
      margin-left: 20px;
    }
  }
}

.operations {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.toreg {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
