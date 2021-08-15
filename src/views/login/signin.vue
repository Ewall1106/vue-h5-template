<template>
  <Logo />
  <van-form class="form" @submit="onSubmit">
    <van-field
      v-model="username"
      type="text"
      name="username"
      maxlength="20"
      clearable
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="password"
      maxlength="20"
      clearable
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <!-- <div class="forget">
      <router-link to="/forget" custom v-slot="{ navigate }">
        <span @click="navigate" role="link">忘记密码</span>
      </router-link>
    </div> -->
    <div style="margin: 16px">
      <van-button
        round
        block
        type="primary"
        native-type="submit"
        :loading="loading"
      >
        提交
      </van-button>
      <van-button
        style="margin-top: 10px"
        plain
        round
        block
        type="primary"
        native-type="button"
        to="/signup"
        >注册</van-button
      >
    </div>
  </van-form>
</template>

<script lang="ts">
import Logo from './components/Logo.vue'
import { defineComponent } from 'vue'
import { useSigninEffect } from './hooks/useSigninEffect'

export default defineComponent({
  name: 'Signin',
  components: {
    Logo
  },

  setup() {
    const { username, password, loading, onSubmit } = useSigninEffect()
    return {
      username,
      password,
      loading,
      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
.form {
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
</style>

<style lang="scss">
.van-cell__title {
  flex: none;
}
</style>
