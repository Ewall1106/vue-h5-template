import {
  defineComponent,
  withModifiers,
  ref,
  Ref,
  reactive,
  watchEffect
} from 'vue'
import Tabbar from '../Tabbar'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <router-view />
        <Tabbar />
      </div>
    )
  }
})
