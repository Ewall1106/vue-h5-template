<template>
  <div class="cart">
    <nav-bar title="购物车">
      <van-icon name="search" :color="variables.black" size="20" />
    </nav-bar>

    <div class="card__item" v-for="(item,idx) in 6" :key="idx">
      <p>sss</p>
      <van-swipe-cell style="width:100%">
        <van-card
          num="2"
          tag="标签"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          origin-price="10.00"
        />
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>

    <van-submit-bar :price="3050" button-text="提交订单">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
    div.submit
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

import variables from '@/styles/variables.scss'

export default {
  name: 'Cart',
  components: {
    NavBar
  },
  data() {
    return {
      checked: true
    }
  },
  computed: {
    variables() {
      return variables
    }
  }
}
</script>

<style lang="scss">
// reset vant style
.cart {
  .van-submit-bar {
    // bottom: 50px;
  }
}
</style>

<style lang="scss" scoped>
.cart {
  background: #fff;
  .goods-card {
    margin: 0;
  }

  .delete-button {
    height: 100%;
  }

  .card__item {
    display: flex;
    flex-direction: row;
    margin-bottom: 14px;
  }
}
</style>
