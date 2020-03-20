<template>
  <div class="login-container">
    <div class="header">
      <img class="header__logo" src="@/assets/logo.png" alt="logo" />
      <p class="header__title">panda-vue-template</p>
    </div>

    <van-form class="form" @submit="onSubmit">
      <van-field
        v-model="form.phonenum"
        type="number"
        required
        clearable
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{validator:checkPhoneNum, required: true, message:'请填写正确的手机号！'}]"
      />

      <van-field
        v-model="form.password"
        type="number"
        required
        center
        clearable
        name="手机号"
        label="验证码"
        placeholder="请输入短信验证码"
        :rules="[{ required: true, message: '请填写正确的验证码！' }]"
      >
        <van-button
          slot="button"
          size="small"
          plain
          type="info"
          native-type="button"
          @click.stop="form.password = 1234"
        >发送验证码</van-button>
      </van-field>

      <div style="margin: 36px;">
        <van-button
          round
          block
          :loading="loading"
          type="info"
          loading-text="登录中..."
          native-type="submit"
        >提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        phonenum: 123456789,
        password: 1234
      },
      loading: false
    }
  },
  watch: {
    $route: {
      handler(route) {
        console.log('route:', route)
        this.redirect = (route.query && route.query.redirect) || '/'
      },
      immediate: true
    }
  },
  methods: {
    // 校检手机号
    checkPhoneNum(num) {
      if (num === 123456789) return true
      const reg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (reg.test(num)) {
        return true
      }
      return false
    },
    // 提交
    onSubmit() {
      this.loading = true
      this.$store
        .dispatch('user/login', this.form)
        .then(() => {
          this.$notify({
            type: 'success',
            message: '登录成功',
            duration: 2000,
            onOpened: () => {
              location.href = this.redirect
              this.loading = false
            }
          })
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
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
}
</style>
