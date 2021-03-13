import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { Notify } from 'vant'

import { useCurrentRoute } from './useCurrentRoute'

export interface FormType {
  username: string
  password: string
  loading: boolean
}

export const useSigninFormEffect = () => {
  const store = useStore()
  const { redirect } = useCurrentRoute()
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
            location.href = redirect
          }
        })
      })
      .catch(() => {
        form.loading = false
      })
  }
  return { ...toRefs(form), onSubmit }
}
