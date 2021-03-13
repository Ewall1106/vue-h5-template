<template>
  <Logo />
  <van-form class="form" @submit="onSubmit">
    <van-field
      v-model="username"
      type="text"
      name="username"
      clearable
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="password"
      clearable
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button
        round
        block
        type="primary"
        native-type="submit"
        :loading="loading"
      >
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script lang="ts">
import Logo from './components/Logo.vue'
import { defineComponent, ref, reactive, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'

import { Notify } from 'vant'

import { useStore } from 'vuex'

interface FormType {
  username: string
  password: string
  loading: boolean
}

const useSigninFormEffect = () => {
  const store = useStore()
  const form = reactive<FormType>({
    username: '',
    password: '',
    loading: false
  })
  const onSubmit = (values: FormType) => {
    form.loading = true
    store
      .dispatch('user/SING_IN', values)
      .then(() => {
        Notify({
          type: 'success',
          message: '登录成功',
          duration: 2000,
          onOpened: () => {
            form.loading = false
            // location.href = this.redirect
          }
        })
      })
      .catch(() => {
        form.loading = false
      })
  }
  return { ...toRefs(form), onSubmit }
}

export default defineComponent({
  name: 'Signin',
  components: {
    Logo
  },

  setup() {
    const redirect = ref<string | null>('')
    const route = useRoute()
    const { username, password, loading, onSubmit } = useSigninFormEffect()
    watch(
      route,
      route => {
        console.log('>>>>>>>>', route.query)
      },
      {
        immediate: true
      }
    )
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
</style>
