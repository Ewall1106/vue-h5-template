<template>
  <div class="address-list">
    <nav-bar title="我的地址" />

    <van-address-list
      v-model="defaultId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />

     <!-- 商品列表 -->
    <div class="goods">
      <div class="goods--exhibition" v-for="(item, idx) in exhibitionSettlementItemDTOs" :key="idx">
        <h3 class="exhibition__title">
          <svg-icon icon-class="store" :width="15" :height="15"></svg-icon>
          <span class="name">{{item.exhibitionParkName}}</span>
        </h3>
        <div class="goods__item" v-for="(item, idx2) in item.settlementItemDTOs" :key="idx2">
          <img class="goods__item__img" :src="item.headPicture | addCDNImg" />
          <div class="goods__item__main">
            <p class="goods__item__main__desc">{{item.spuName}}</p>
            <p class="goods__item__main__attr">
              <span>{{item.attribute1}}</span>
              <span>{{item.attribute2}}</span>
            </p>
            <!-- <p class="goods__item__main__id">货号：{{item.supplierId}}</p> -->
          </div>
          <div class="goods__item__price">
            <span class="goods__item__price__price">¥{{item.itemPrice | formatAmountFixed2Zero}}</span>
            <span class="goods__item__price__count">x{{item.num}}</span>
          </div>
          <!-- new add: 运费 -->
          <div
            class="goods__item__postage"
            v-if="item.postage>0"
          >运费：¥{{item.postage | formatAmountFixed2Zero}}</div>
        </div>
        <div class="exhibition__amount">
          <span
            class="exhibition__amount__bouns"
            v-if="role > 0"
          >返佣金¥{{item.bonus | formatAmountFixed2Zero}}</span>
          <span>共1件商品 合计：¥{{item.exhibitionTotalPrice | formatAmountFixed2Zero}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'Address',
  components: {
    NavBar
  },
  data() {
    return {
      defaultId: '',
      list: []
    }
  },
  async mounted() {
    this.$toast.loading('加载中...')
    this.list = await this.$store.dispatch('address/getList')
    this.$toast.clear()
  },
  methods: {
    onSelect(item, index) {
      this.$store.dispatch('address/setList', index)
      this.$router.go(-1)
    },
    onAdd() {
      this.$router.push({
        path: '/address/edit'
      })
    },
    onEdit(item, index) {
      this.$toast('编辑地址:' + index)
      this.$router.push({
        path: '/address/edit',
        query: {
          index
        }
      })
    }
  }
}
</script>

<style>
</style>
