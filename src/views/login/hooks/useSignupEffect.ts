import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { signup, getCaptcha } from '@/api'
import { v4 as uuidv4 } from 'uuid'
import { Notify } from 'vant'

export interface FormType {
  username: string
  password: string
  confirmPassword: string
  captcha: string
  captchaSvg: HTMLOrSVGElement | null
}

export const useSignupEffect = () => {
  const router = useRouter()

  const form = reactive<FormType>({
    username: '',
    password: '',
    confirmPassword: '',
    captcha: '',
    captchaSvg: null
  })

  const requestCaptcha = async () => {
    const { data } = await getCaptcha({ id: uuidv4() })
    form.captchaSvg = data
  }

  const onSubmit = async (values: FormType) => {
    const { status } = await signup({ ...values })
    if (status) {
      Notify({
        type: 'success',
        message: '注册成功，请重新登录',
        duration: 2000,
        onOpened: () => {
          router.back()
        }
      })
    }
  }
  return { ...toRefs(form), requestCaptcha, onSubmit }
}
