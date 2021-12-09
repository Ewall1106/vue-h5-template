<template>
  <div class="category">
    <van-tree-select
      height="calc(100vh - 50px)"
      :items="items"
      :main-active-index.sync="active"
      @click-nav="onNavClick"
    >
      <template #content>
        <div class="main">
          <image-pic width="100%" height="85" fit="fill" :src="banner" />
          <div v-for="(item, index) in cate" :key="index" class="main__item">
            <h3 class="main__item__title">{{ item.title }}</h3>
            <div class="main__item__content">
              <van-grid :column-num="3" :border="false">
                <van-grid-item
                  v-for="(single, idx) in item.content"
                  :key="idx"
                  class="single"
                >
                  <image-pic fit="contain" :src="single.img" />
                  <span>{{ single.name }}</span>
                </van-grid-item>
              </van-grid>
            </div>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { getCateItems, getCateContent } from "@/api/category";

export default {
  name: "Category",
  data() {
    return {
      active: 0,
      items: [],
      cate: [],
      banner: "",
    };
  },
  mounted() {
    this.getCateItems();
    this.getCateContent();
  },
  methods: {
    getCateItems() {
      getCateItems().then((res) => {
        this.items = res.entry;
      });
    },
    getCateContent() {
      getCateContent({
        index: this.active,
      }).then((res) => {
        const { banner, listItem } = res.entry;
        this.banner = banner;
        this.cate = listItem;
      });
    },
    onNavClick() {
      this.getCateContent();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.category {
  .main {
    box-sizing: border-box;
    padding: 10px;
    .main__item {
      .main__item__title {
        color: $black;
        font-size: $small;
        font-weight: bold;
        padding: 16px;
      }
      .main__item__content {
        .single {
          text-align: center;
          color: $black;
          font-size: $mini;
        }
      }
    }
  }
}
</style>
