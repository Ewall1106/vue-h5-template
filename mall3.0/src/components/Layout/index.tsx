import {
  defineComponent,
  withModifiers,
  ref,
  Ref,
  reactive,
  watchEffect
} from 'vue'
import Tabbar from '../Tabbar'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()

    return () => (
      <div>
        <router-view />
        {route.meta.showTab && <Tabbar />}
      </div>
    )
  }
})
