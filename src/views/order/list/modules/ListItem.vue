<template>
  <div class="list-item">
    <van-cell
      title="订单号"
      :value="orderId"
      title-class="title__left"
      value-class="title__right"
    />
    <van-card
      v-for="item in itemList.list"
      :key="item.skuId"
      :num="item.selectedNum"
      :price="item.price"
      :desc="item.title"
      :title="item.title"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag
          v-for="(attr, idx) in item.skuAttr"
          :key="idx"
          plain
          color="#999"
          style="margin-right: 2px"
        >{{ attr }}</van-tag>
      </template>
    </van-card>
    <!-- <div class="btn">
      <van-button round plain color="#8e8e8e" size="mini">取消订单</van-button>
      <van-button round plain color="#ee0a24" size="mini">商品分享</van-button>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    orderId: {
      type: String,
      default: ''
    },
    itemList: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  .title__left {
    font-size: 16px;
  }
  .title__right {
    font-size: 8px;
  }
  .btn {
    padding: 0 20px 20px 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
