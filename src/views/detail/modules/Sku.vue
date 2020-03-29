<template>
  <div class="goods-sku">
    <van-sku
      v-model="isSkuShow"
      :sku="sku"
      :goods="goods"
      :close-on-click-overlay="true"
      @buy-clicked="onBuy"
      @add-cart="onAddCart"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSkuShow: true,
      sku: {
        // 定义类别
        tree: [
          {
            k: '系列',
            v: [
              {
                id: '1001',
                name: '三体1：地球往事',
                imgUrl: 'http://img3m4.ddimg.cn/32/35/23579654-1_e_3.jpg',
                previewImgUrl: 'http://img3m4.ddimg.cn/32/35/23579654-1_e_3.jpg'
              },
              {
                id: '1002',
                name: '三体艺术插画集',
                imgUrl:
                  'http://m.360buyimg.com/mobilecms/s843x843_jfs/t1/61801/33/670/234001/5cee2008Ea77b2f13/c193d2370dab7ff2.jpg',
                previewImgUrl:
                  'http://m.360buyimg.com/mobilecms/s843x843_jfs/t1/61801/33/670/234001/5cee2008Ea77b2f13/c193d2370dab7ff2.jpg'
              },
              {
                id: '1003',
                name: '三体2：黑暗森林',
                imgUrl:
                  'http://m.360buyimg.com/mobilecms/s843x843_jfs/t5953/39/822101194/248686/1d0b6b5e/592bf161N3c12cc3a.jpg',
                previewImgUrl:
                  'http://m.360buyimg.com/mobilecms/s843x843_jfs/t5953/39/822101194/248686/1d0b6b5e/592bf161N3c12cc3a.jpg'
              },
              {
                id: '1004',
                name: '三体（纪念版）（套装共3册）',
                imgUrl:
                  'http://m.360buyimg.com/mobilecms/s843x843_jfs/t7084/309/1723776720/329560/b5511e85/598d1fe1N95cad7bc.jpg',
                previewImgUrl:
                  'http://m.360buyimg.com/mobilecms/s843x843_jfs/t7084/309/1723776720/329560/b5511e85/598d1fe1N95cad7bc.jpg'
              },
              {
                id: '1005',
                name: '三体2.黑暗森林（典藏版）',
                imgUrl:
                  'http://m.360buyimg.com/mobilecms/s843x843_jfs/t4288/65/1458919872/394831/25fb907b/58c213a5N4bf8e476.jpg',
                previewImgUrl:
                  'http://m.360buyimg.com/mobilecms/s843x843_jfs/t4288/65/1458919872/394831/25fb907b/58c213a5N4bf8e476.jpg'
              }
            ],
            k_s: 's1'
          }
        ],

        // 定义sku
        list: [
          {
            id: 1,
            s1: '1001',
            price: 999,
            stock_num: 100
          },
          {
            id: 2,
            s1: '1002',
            price: 1999,
            stock_num: 123
          },
          {
            id: 3,
            s1: '1003',
            price: 1239,
            stock_num: 2
          },
          {
            id: 4,
            s1: '1004',
            price: 342,
            stock_num: 1
          },
          {
            id: 5,
            s1: '1005',
            price: 999,
            stock_num: 12
          }
        ],

        price: '9.90',
        stock_num: 227,
        collection_id: 2261,
        none_sku: false,
        messages: [],
        hide_stock: false
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: 'http://img3m4.ddimg.cn/32/35/23579654-1_e_3.jpg'
      }
    }
  },
  methods: {
    onBuy() {
      console.log('buy')
    },
    onAddCart() {
      this.$toast.success('添加成功')
      this.isSkuShow = false
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/variables.scss";

// reset vant style
.goods-sku {
  .van-sku-messages {
    padding: 0;
  }
  .van-button--danger {
      background: $red;
  }
}
</style>
