import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

export const useCurrentRoute = () => {
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
