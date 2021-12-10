<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <div class="home">
      <Swiper :banner="banner" />
      <Category :cate-list="cateList" />
      <Goods
        v-model="loading"
        :goods-list="list"
        :is-finished="finished"
        @onReachBottom="onReachBottom"
      />
      <back-top />
      <Skeleton v-if="isSkeletonShow" />
    </div>
  </van-pull-refresh>
</template>

<script>
import { getBanner, getCategory, getList } from "@/api/home";
import Swiper from "./components/Swiper";
import Category from "./components/Category";
import Goods from "./components/Goods";
import Skeleton from "./components/Skeleton";

export default {
  name: "Home",
  components: {
    Swiper,
    Category,
    Goods,
    Skeleton,
  },
  data() {
    return {
      banner: [],
      cateList: [],
      sessionList: [],
      list: [],
      pageNo: 0,
      pageSize: 4,
      loading: false,
      finished: false,
      refreshing: false,
      isSkeletonShow: true,
    };
  },
  mounted() {
    Promise.all([this.getBanner(), this.getCategory()]).then(() => {
      this.isSkeletonShow = false;
    });
  },
  methods: {
    // ---- request --- //
    getBanner() {
      return new Promise((resolve) => {
        getBanner().then((res) => {
          this.banner = res.data;
          resolve();
        });
      });
    },
    getCategory() {
      return new Promise((resolve) => {
        getCategory().then((res) => {
          const data = res.data;
          this.cateList = data;
          resolve();
        });
      });
    },
    getGoodsList() {
      getList({
        pageSize: this.pageSize,
        pageNo: this.pageNo,
      }).then((res) => {
        const data = res.data;
        if (this.refreshing) {
          this.list = data;
          this.refreshing = false;
          this.finished = false;
        } else {
          this.list = [...this.list, ...data];
          if (data.length < this.pageSize) this.finished = true;
        }
        this.loading = false;
      });
    },
    // ---- actions --- //
    onReachBottom() {
      if (!this.finished) {
        this.loading = true;
        this.pageNo += 1;
        this.getGoodsList();
      }
    },
    onRefresh() {
      if (!this.loading) {
        this.refreshing = true;
        this.pageNo = 1;
        this.getBanner();
        this.getCategory();
        this.getGoodsList();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #f5f5f5;
  min-height: 100vh;
  .logo {
    display: block;
    width: 200px;
    margin: 0 auto;
    padding-top: 40px;
  }
  .menu__right {
    width: 50px;
  }
}
</style>
