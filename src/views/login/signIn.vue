<template>
  <div class="login-container">
    <div class="header">
      <img class="header__logo" src="@/assets/logo.png" alt="logo" />
      <p class="header__title">Vue-H5-Template</p>
    </div>

    <van-form
      class="form"
      validate-trigger="onSubmit"
      :show-error="false"
      @submit="onSubmit"
    >
      <van-field
        v-model="form.username"
        type="text"
        required
        clearable
        name="邮箱"
        label="邮箱"
        placeholder="请输入邮箱地址"
        :rules="[
          {
            required: true,
            message: '请输入正确的邮箱地址!',
          },
        ]"
      />

      <van-field
        v-model="form.password"
        type="password"
        required
        center
        clearable
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请输入正确的密码！' }]"
      />

      <div style="margin: 36px">
        <van-button
          round
          block
          :loading="loading"
          type="info"
          loading-text="登录中..."
          native-type="submit"
          >登录</van-button
        >

        <van-button
          style="margin-top: 10px"
          plain
          round
          block
          type="info"
          native-type="button"
          to="/signup"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        captcha: "",
        isCaptchaShow: false,
        sid: localStorage.getItem("sid") || "",
      },

      loading: false,
      captchaSvg: "",
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      this.$store
        .dispatch("user/signin", this.form)
        .then(() => {
          this.$router.push("/power");
          this.$notify({
            type: "success",
            message: "登录成功",
            duration: 2000,
            onOpened: () => {
              this.loading = false;
            },
          });
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header__logo {
      display: block;
      width: 150px;
      height: 150px;
      padding-top: 80px;
    }
    .header__title {
      font-size: 36px;
      color: #000;
      font-weight: normal;
      padding-top: 30px;
    }
  }

  .form {
    // background: red;
    padding: 24px;
    margin-top: 50px;
  }

  .forget {
    box-sizing: border-box;
    color: #323233b9;
    font-size: 26px;
    text-align: right;
    padding-right: 34px;
    padding-top: 20px;
  }
}
</style>
