
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
        name="邮箱"
        label="邮箱"
        placeholder="请输入邮箱地址"
        :rules="[{validator: checkEmail, required: true, message: '请输入正确的邮箱地址!'}]"
      />

      <van-field
        v-model="form.code"
        type="number"
        required
        center
        clearable
        name="验证码"
        label="验证码"
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

export default {
  name: 'Regist',
  data() {
    return {
      form: {
        email: '',
        code: '',
        captcha: ''
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
      let sid = localStorage.getItem('sid') || ''
      if (!sid) {
        sid = uuidv4()
        localStorage.setItem('sid', sid)
      }
      getCaptcha({
        sid
      }).then((res) => {
        this.captchaSvg = res.entry
      })
    },
    // 获取邮箱验证码
    getMailCode() {
      const { email } = this.form
      if (!email || !this.checkEmail(email)) {
        this.$toast.fail('请先输入正确的邮箱地址')
      }
      getMailCode().then(res => {
        console.log(res)
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
.form {
  padding: 24px;
}
</style>
