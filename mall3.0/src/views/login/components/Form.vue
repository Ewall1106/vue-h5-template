<template>
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
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

interface FormType {
  username: string
  password: string
}

const useFormEffect = () => {
  const form = reactive<FormType>({
    username: '',
    password: ''
  })
  const onSubmit = (values: FormType) => {
    console.log('submit', values)
  }
  return { ...toRefs(form), onSubmit }
}

export default defineComponent({
  setup() {
    const { onSubmit, username, password } = useFormEffect()

    return {
      onSubmit,
      username,
      password
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
