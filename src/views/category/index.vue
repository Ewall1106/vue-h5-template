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
          <div class="main__item" v-for="(item,index) in cate" :key="index">
            <h3 class="main__item__title">{{item.title}}</h3>
            <div class="main__item__content">
              <div class="single" v-for="(single,idx) in item.content" :key="idx">
                <image-pic width="70" height="70" fit="contain" :src="single.img" />
                <span>{{single.name}}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { getCateItems, getCateContent } from '@/api/category'

export default {
  name: 'Category',
  data() {
    return {
      active: 0,
      items: [],
      cate: [],
      banner: ''
    }
  },
  mounted() {
    this.getCateItems()
    this.getCateContent()
  },
  methods: {
    getCateItems() {
      getCateItems().then(res => {
        this.items = res.entry
      })
    },
    getCateContent() {
      getCateContent({
        index: this.active
      }).then(res => {
        const { banner, listItem } = res.entry
        this.banner = banner
        this.cate = listItem
      })
    },
    onNavClick() {
      this.getCateContent()
    }
  }
}
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 4px;
        .single {
          padding: 8px;
          text-align: center;
          color: $black;
          font-size: $mini;
        }
      }
    }
  }
}
</style>
