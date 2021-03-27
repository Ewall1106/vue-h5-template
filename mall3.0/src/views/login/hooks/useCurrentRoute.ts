import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

export const useCurrentRoute = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const redirect = ref<any>('')
  const route = useRoute()
  watch(
    route,
    route => {
      redirect.value = route.query.redirect || '/'
    },
    {
      immediate: true
    }
  )
  return { redirect }
}
