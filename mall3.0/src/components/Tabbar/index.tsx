import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => (
      <div class="tabbar">
        <van-tabbar route fixed placeholder border>
          <van-tabbar-item replace to="/" icon="wap-home">
            演示
          </van-tabbar-item>
          <van-tabbar-item replace to="/power" icon="bars">
            扩展
          </van-tabbar-item>
          <van-tabbar-item replace to="/user" icon="manager">
            我的
          </van-tabbar-item>
        </van-tabbar>
      </div>
    )
  }
})
