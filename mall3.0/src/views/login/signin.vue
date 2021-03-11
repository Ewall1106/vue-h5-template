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
        type="info"
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
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { Notify } from 'vant'
import { signin } from '@/api'

interface FormType {
  username: string
  password: string
}

const useSigninFormEffect = () => {
  const form = reactive<FormType>({
    username: '',
    password: ''
  })

  // this.loading = true
  // this.$store
  //   .dispatch('user/login', this.form)
  //   .then(() => {
  //     this.$notify({
  //       type: 'success',
  //       message: '登录成功',
  //       duration: 2000,
  //       onOpened: () => {
  //         this.loading = false
  //         location.href = this.redirect
  //       }
  //     })
  //   })
  //   .catch(() => {
  //     this.loading = false
  //   })

  // const onSubmit = async (values: FormType) => {
  //   const { status } = await signin({ ...values })
  //   if (status) {
  //     Notify({
  //       type: 'success',
  //       message: '注册成功，请重新登录',
  //       duration: 2000,
  //       onOpened: () => {
  //         router.back()
  //       }
  //     })
  //   }
  // }
  return { ...toRefs(form), onSubmit }
}

export default defineComponent({
  name: 'Signin',
  components: {
    Logo
  },

  setup() {
    const { username, password, loading } = useSigninFormEffect()

    return {
      username,
      password,
      loading
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
