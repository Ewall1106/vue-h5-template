<template>
  <div class="login-container">
    <div class="header">
      <img class="header__logo" src="@/assets/logo.png" alt="logo">
      <p class="header__title">Panda-mall</p>
    </div>

    <van-form class="form" validate-trigger="onSubmit" :show-error="false" @submit="onSubmit">
      <van-field
        v-model="form.email"
        type="text"
        required
        clearable
        name="邮箱"
        label="邮箱"
        placeholder="请输入邮箱地址"
        :rules="[{ validator: checkEmail, required: true, message: '请输入正确的邮箱地址!' }]"
      />

      <van-field
        v-model="form.password"
        type="number"
        required
        center
        clearable
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请输入正确的密码！' }]"
      />

      <van-field
        v-model="form.captcha"
        type="number"
        required
        center
        clearable
        name="验证码"
        label="验证码"
        placeholder="图形验证码"
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
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        mailnum: '',
        password: '',
        captcha: '',
        sid: localStorage.getItem('sid') || ''
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
      if (!this.form.sid) {
        this.form.sid = uuidv4()
        localStorage.setItem('sid', this.form.sid)
      }
      getCaptcha({ sid: this.form.sid }).then((res) => {
        this.captchaSvg = res.entry
      })
    },
    // 校检邮箱
    checkEmail(email) {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return reg.test(email)
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
