import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => (
      <div class="tabbar">
        <van-tabbar>
          <van-tabbar-item to="/" icon="wap-home">
            首页
          </van-tabbar-item>
          <van-tabbar-item to="/category" icon="bars">
            分类
          </van-tabbar-item>
          <van-tabbar-item to="/cart" icon="shopping-cart">
            购物车
          </van-tabbar-item>
          <van-tabbar-item to="/user" icon="manager">
            我的
          </van-tabbar-item>
        </van-tabbar>
      </div>
    )
  }
})
