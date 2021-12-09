<template>
  <div class="goods-sku">
    <van-sku
      v-model="isShow"
      :sku="skudata"
      :goods="goods"
      :goods-id="goodsId"
      :close-on-click-overlay="true"
      @buy-clicked="onBuy"
      @add-cart="onAddCart"
    />
  </div>
</template>

<script>
import { addCart } from "@/api/cart";

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    goodsId: {
      type: String,
      default: "",
    },
    skudata: {
      type: Object,
      default() {
        return {};
      },
    },
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    isShow: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  methods: {
    onBuy(data) {
      this.$emit("input", false);
      const { selectedNum, selectedSkuComb } = data;
      const { id, productId } = selectedSkuComb;
      this.$store.dispatch("order/setIds", [{ id, productId, selectedNum }]);

      this.$nextTick(() => {
        this.$router.push({
          path: "/order/confirm",
        });
      });
    },
    onAddCart(data) {
      const { id: skuId } = data.selectedSkuComb;
      addCart({
        productId: this.goodsId,
        skuId,
        selectedNum: data.selectedNum,
      }).then((res) => {
        this.$toast.success("添加成功");
        this.$emit("input", false);
        this.$emit("handleCartNum");
      });
    },
  },
};
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
