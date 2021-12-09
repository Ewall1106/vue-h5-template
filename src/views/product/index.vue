<template>
  <div class="product">
    <nav-bar title="商品列表" />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <div class="banner">
        <image-pic
          src="http://m.360buyimg.com/babel/jfs/t1/106316/25/14939/138006/5e6a3b4dE5609efcf/27de6ed334aa7c9b.jpg!q70.dpg"
          width="100%"
          height="100"
        />
      </div>

      <div class="main">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <product-item
            v-for="(item, idx) in list"
            :key="idx"
            :product-id="item.productId"
            :img="item.img"
            :title="item.title"
            :desc="item.desc"
            :price="item.price"
            :old-price="item.oldPrice"
            :percentage="item.percentage"
            style="margin-bottom: 6px"
          />
        </van-list>
      </div>
    </van-pull-refresh>

    <Skeleton v-if="isSkeletonShow" />
  </div>
</template>

<script>
import { getList } from "@/api/product";
import NavBar from "@/components/NavBar";
import ProductItem from "@/components/ProductItem";
import Skeleton from "./modules/Skeleton";

import variables from "@/styles/variables.scss";

export default {
  name: "Product",
  components: {
    NavBar,
    ProductItem,
    Skeleton,
  },
  data() {
    return {
      list: [],
      pageNo: 0,
      pageSize: 8,
      loading: false,
      finished: false,
      refreshing: false,
      isSkeletonShow: true,
    };
  },
  computed: {
    variables() {
      return variables;
    },
  },
  methods: {
    getProductList() {
      getList({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      }).then((res) => {
        const data = res.entry;
        if (this.refreshing) {
          this.list = data;
          this.refreshing = false;
          this.finished = false;
        } else {
          this.list = [...this.list, ...data];
          if (data.length < this.pageSize) this.finished = true;
        }
        this.loading = false;
        this.isSkeletonShow = false;
      });
    },
    onLoad() {
      if (!this.finished) {
        this.loading = true;
        this.pageNo += 1;
        this.getProductList();
      }
    },
    onRefresh() {
      this.refreshing = true;
      this.pageNo = 1;
      this.getProductList();
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  min-height: 100vh;
  background: #f5f5f5;
}
</style>
