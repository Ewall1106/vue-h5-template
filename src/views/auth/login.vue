<template>
  <div class="login-container">
    <div class="header">
      <img class="header__logo" src="@/assets/logo.png" alt="logo">
      <p class="header__title">Panda-mall</p>
    </div>

    <van-form class="form" validate-trigger="onSubmit" :show-error="false" @submit="onSubmit">
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
        label="邮箱验证码"
        placeholder="请输入短信验证码"
        :rules="[{ required: true, message: '请输入正确的短信验证码！' }]"
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

      <van-field
        v-model="form.captcha"
        type="number"
        required
        center
        clearable
        name="手机号"
        label="图形验证码"
        placeholder="请输入图形验证码"
        :rules="[{ required: true, message: '请输入正确的图形验证码！' }]"
      >
        <template #button>
          <div style="background: #eee;height:34px" @click="getCaptcha" v-html="captchaSvg" />
        </template>
      </van-field>

      <div style="margin: 36px;">
        <van-button
          round
          block
          :loading="loading"
          type="info"
          loading-text="登录中..."
          native-type="submit"
        >登录</van-button>

        <van-button style="margin-top:10px" plain round block type="info" native-type="button" to="/registration">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { getCaptcha } from '@/api/public'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        phonenum: '',
        password: '',
        captcha: ''
      },
      loading: false,
      captchaSvg: ''
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
  mounted() {
    this.getCaptcha()
  },
  methods: {
    // 获取图形验证码
    getCaptcha() {
      getCaptcha().then((res) => {
        this.captchaSvg = res.entry
      })
    },
    // 校检手机号
    checkPhoneNum(num) {
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
