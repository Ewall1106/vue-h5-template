<template>
  <div class="signup">
    <nav-bar title="用户注册">
      <van-icon :color="variables.black" size="18" />
    </nav-bar>

    <van-form
      class="form"
      validate-trigger="onSubmit"
      :show-error="false"
      @submit="onSubmit"
    >
      <van-field
        v-model="form.email"
        type="text"
        required
        clearable
        name="注册名"
        label="注册名"
        placeholder="请输入用户名"
        :rules="[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]"
      />

      <van-field
        v-model="form.password"
        type="password"
        required
        clearable
        name="设置密码"
        label="设置密码"
        placeholder="请设置密码"
        :rules="[{ required: true, message: '请设置密码!' }]"
      />

      <van-field
        v-model="form.confirmPwd"
        type="password"
        required
        clearable
        name="确认密码"
        label="确认密码"
        placeholder="请再次输入密码确认"
        :rules="[{ required: true, message: '请再次输入密码确认!' }]"
      />

      <van-field
        v-model="form.captcha"
        type="text"
        required
        center
        clearable
        name="图形验证码"
        maxlength="4"
        label="图形验证码"
        placeholder="请输入图形验证码"
        :rules="[{ required: true, message: '请输入正确的图形验证码!' }]"
      >
        <template #button>
          <div
            style="background: #eee; height: 34px; width: 100px"
            @click="getCaptcha"
            v-html="captchaSvg"
          />
        </template>
      </van-field>

      <div style="margin: 36px">
        <van-button
          round
          block
          :loading="loading"
          type="info"
          loading-text="登录中..."
          native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import variables from "@/styles/variables.scss";
import { getCaptcha } from "@/api/public";
import { signup } from "@/api/user";

export default {
  name: "Regist",
  data() {
    return {
      form: {
        password: "",
        confirmPwd: "",
        captcha: "",
      },
      loading: false,
      captchaSvg: "",
    };
  },
  computed: {
    variables() {
      return variables;
    },
  },
  mounted() {
    // this.getCaptcha();
  },
  methods: {
    // 获取图形验证码
    getCaptcha() {
      getCaptcha({ sid: this.form.sid }).then((res) => {
        this.captchaSvg = res.entry;
      });
    },
    // 提交
    onSubmit() {
      const { password, confirmPwd } = this.form;
      if (password !== confirmPwd) {
        this.$toast.fail("确认密码与设置的不一致");
        return;
      }
      this.loading = true;
      signup(this.form)
        .then(() => {
          this.$notify({
            type: "success",
            message: "注册成功，请登录",
            duration: 2000,
            onOpened: () => {
              this.$router.back();
            },
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 24px;
}
</style>
