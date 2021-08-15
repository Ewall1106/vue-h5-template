<template>
  <van-nav-bar
    title="用户注册"
    left-text="返回"
    left-arrow
    @click-left="$router.back()"
  />
  <van-form class="form" @submit="onSubmit" style="padding: 12px">
    <van-field
      v-model="username"
      type="text"
      required
      name="username"
      clearable
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名!' }]"
    />
    <van-field
      v-model="password"
      type="password"
      required
      name="password"
      clearable
      label="设置密码"
      placeholder="设置密码"
      :rules="[{ required: true, message: '请设置密码!' }]"
    />
    <van-field
      v-model="confirmPassword"
      type="text"
      required
      clearable
      name="confirmPassword"
      label="确认密码"
      placeholder="确认密码"
      :rules="[{ required: true, message: '请再次输入密码确认!' }]"
    />
    <van-field
      v-model="captcha"
      type="text"
      required
      clearable
      name="captcha"
      maxlength="4"
      label="图形验证码"
      placeholder="请输入图形验证码"
      :rules="[{ required: true, message: '请输入正确的图形验证码！' }]"
    >
      <template #button>
        <div style="background: #eee; height: 34px" v-html="captchaSvg" />
      </template>
    </van-field>

    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSignupEffect } from './hooks/useSignupEffect'

export default defineComponent({
  name: 'Signup',
  setup() {
    const {
      username,
      password,
      confirmPassword,
      captchaSvg,
      captcha,
      requestCaptcha,
      onSubmit
    } = useSignupEffect()

    requestCaptcha()

    return {
      onSubmit,
      username,
      password,
      confirmPassword,
      captcha,
      captchaSvg
    }
  }
})
</script>
