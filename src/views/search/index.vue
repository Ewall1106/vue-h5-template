<template>
  <div class="search">
    <nav-bar v-model="value" @handleSearch="handleSearch" />
    <search-words :hot-list="hotList" />
  </div>
</template>

<script>
import { getHotList } from "@/api/search";
import NavBar from "./modules/NavBar";
import SearchWords from "./modules/Words";

export default {
  name: "Search",
  components: {
    NavBar,
    SearchWords,
  },
  data() {
    return {
      value: "",
      hotList: [],
    };
  },
  mounted() {
    this.getHot();
  },
  methods: {
    getHot() {
      getHotList().then((res) => {
        this.hotList = res.entry;
      });
    },
    handleSearch(key) {
      this.$router.push({
        path: "/search/list",
        query: {
          key,
        },
      });
    },
  },
};
</script>
