<template>
  <div class="forget-container">
    <nav-bar title="找回密码">
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
        name="注册邮箱"
        label="注册邮箱"
        placeholder="请输入邮箱地址"
        maxlength="20"
        :rules="[
          {
            validator: checkEmail,
            required: true,
            message: '请输入正确的邮箱地址!',
          },
        ]"
      />

      <van-field
        v-model="form.mailcode"
        type="number"
        required
        center
        clearable
        name="邮箱验证码"
        label="邮箱验证码"
        placeholder="请输入验证码"
        maxlength="4"
        :rules="[{ required: true, message: '请输入正确的邮箱验证码！' }]"
      >
        <van-button
          slot="button"
          size="small"
          plain
          type="info"
          native-type="button"
          @click.stop="getMailCode"
          >发送验证码</van-button
        >
      </van-field>

      <van-field
        v-model="form.password"
        type="password"
        required
        clearable
        name="设置新密码"
        label="设置新密码"
        placeholder="请设置新密码"
        maxlength="20"
        :rules="[{ required: true, message: '请设置密码!' }]"
      />

      <van-field
        v-model="form.confirmPassword"
        type="password"
        required
        clearable
        name="确认新密码"
        label="确认新密码"
        placeholder="请再次输入密码确认"
        maxlength="20"
        :rules="[{ required: true, message: '请再次输入密码确认!' }]"
      />

      <div style="margin: 36px">
        <van-button
          round
          block
          :loading="loading"
          type="info"
          loading-text="登录中..."
          native-type="submit"
          >重置密码</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import variables from "@/styles/variables.scss";
import { reset } from "@/api/user";
import { getMailCode } from "@/api/public";

export default {
  name: "Forget",
  data() {
    return {
      form: {
        email: "",
        password: "",
        confirmPassword: "",
        mailcode: "",
      },
      loading: false,
    };
  },
  computed: {
    variables() {
      return variables;
    },
  },
  methods: {
    // 获取邮箱验证码
    getMailCode() {
      const { email } = this.form;
      if (!email || !this.checkEmail(email)) {
        this.$toast.fail("请先输入正确的邮箱地址");
        return;
      }
      getMailCode({ email: this.form.email }).then((res) => {
        this.$notify({
          type: "success",
          message: "邮箱验证码已发送",
          duration: 2000,
        });
      });
    },
    // 校检邮箱
    checkEmail(email) {
      const reg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(email);
    },
    // 提交
    onSubmit() {
      const { password, confirmPassword } = this.form;
      if (password !== confirmPassword) {
        this.$toast.fail("确认密码与设置的不一致");
        return;
      }
      this.loading = true;
      reset(this.form)
        .then((res) => {
          this.$notify({
            type: "success",
            message: "重置密码成功，请登录",
            duration: 2500,
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
.forget-container {
  .form {
    padding: 24px;
  }
}
</style>
