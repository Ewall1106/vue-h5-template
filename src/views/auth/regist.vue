
<template>
  <div class="registration">
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
        name="注册邮箱"
        label="注册邮箱"
        placeholder="请输入邮箱地址"
        :rules="[
          {
            validator: checkEmail,
            required: true,
            message: '请输入正确的邮箱地址!',
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
        v-model="form.confirmPassword"
        type="password"
        required
        clearable
        name="确认密码"
        label="确认密码"
        placeholder="请再次输入密码确认"
        :rules="[{ required: true, message: '请再次输入密码确认!' }]"
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
        :rules="[{ required: true, message: '请输入正确的邮箱验证码！' }]"
      >
        <van-button
          slot="button"
          size="small"
          plain
          type="info"
          native-type="button"
          @click.stop="getMailCode"
        >发送验证码</van-button>
      </van-field>

      <van-field
        v-model="form.captcha"
        type="text"
        required
        center
        clearable
        name="手机号"
        maxlength="4"
        label="图形验证码"
        placeholder="请输入图形验证码"
        :rules="[{ required: true, message: '请输入正确的图形验证码！' }]"
      >
        <template #button>
          <div
            style="background: #eee; height: 34px"
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
        >注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'
import { v4 as uuidv4 } from 'uuid'
import { getCaptcha, getMailCode } from '@/api/public'
import { registry } from '@/api/user'

export default {
  name: 'Regist',
  data() {
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: '',
        mailcode: '',
        captcha: '',
        sid: localStorage.getItem('sid') || ''
      },
      loading: false,
      captchaSvg: ''
    }
  },
  computed: {
    variables() {
      return variables
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
    // 获取邮箱验证码
    getMailCode() {
      const { email } = this.form
      if (!email || !this.checkEmail(email)) {
        this.$toast.fail('请先输入正确的邮箱地址')
        return
      }
      this.$toast.loading({
        duration: 0,
        message: '加载中...',
        forbidClick: true
      })
      getMailCode({ email: this.form.email }).then((res) => {
        this.$toast.clear()
        this.$notify({
          type: 'success',
          message: '邮箱验证码已发送',
          duration: 2000
        })
      })
    },
    // 校检邮箱
    checkEmail(email) {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return reg.test(email)
    },
    // 提交
    onSubmit() {
      const { password, confirmPassword } = this.form
      if (password !== confirmPassword) {
        this.$toast.fail('确认密码与设置的不一致')
        return
      }
      this.loading = true
      registry(this.form)
        .then((res) => {
          this.$notify({
            type: 'success',
            message: '注册成功，请登录',
            duration: 2000,
            onOpened: () => {
              this.$router.back()
            }
          })
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  padding: 24px;
}
</style>
