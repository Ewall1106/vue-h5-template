<template>
  <div class="search-list">
    <nav-bar v-model="value" @handleSearch="handleSearch" />
    <filter-bar />

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
      @load="onReachBottom"
    >
      <div class="main">
        <goods-item
          v-for="(item, idx) in list"
          :key="idx"
          :img="item.img"
          :title="item.title"
          :desc="item.desc"
          :price="item.price"
          :discount="item.discount"
        />
      </div>
    </van-list>
  </div>
</template>

<script>
import { getSearchList } from "@/api/search";
import NavBar from "./modules/NavBar";
import FilterBar from "./modules/FilterBar";
import GoodsItem from "@/components/GoodsItem";

export default {
  name: "SearchList",
  components: {
    NavBar,
    FilterBar,
    GoodsItem,
  },
  data() {
    return {
      value: "",
      list: [],
      pageSize: 8,
      pageNo: 1,
      loading: false,
      finished: false,
      isSkeletonShow: true,
    };
  },
  mounted() {
    this.$toast.loading({
      message: "加载中...",
      forbidClick: true,
      overlay: true,
      duration: 0,
    });
    const { key } = this.$route.query;
    this.value = key;
    this.getList();
  },
  methods: {
    onReachBottom() {
      this.pageNo += 1;
      this.getList();
    },
    getList() {
      getSearchList({
        pageSize: this.pageSize,
        pageNo: this.pageNo,
      }).then((res) => {
        const data = res.entry;
        this.list = [...this.list, ...data];
        this.loading = false;
        if (data.length < this.pageNo && this.list.length > 0) {
          this.finished = true;
        }
        this.$toast.clear();
      });
    },
    handleSearch(key) {
      this.$router.replace({
        path: "/search/list",
        query: {
          key,
          t: +new Date(),
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.search-list {
  .main {
    background: #fff;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
