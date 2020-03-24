<template>
  <div class="category">
    <van-tree-select height="calc(100vh - 50px)" :items="items" :main-active-index.sync="active">
      <template #content>
        <div class="main">
          <image-pic
            fit="fill"
            src="http://img11.360buyimg.com/uba/jfs/t1/34018/11/1897/61648/5caac06cE19c3c7e9/e17ee22760977176.jpg"
          />
          <div class="main__item">
            <h3 class="main__item__title">热门推荐</h3>
            <div class="main__item__content">
              <div class="single" v-for="(item,idx) in 10" :key="idx">
                <image-pic
                  width="70"
                  height="70"
                  fit="contain"
                  src="http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg"
                />
                <span>童书</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      active: 0,
      items: [
        { text: '童书' },
        { text: '文学小说' },
        { text: '童书' },
        { text: '文学小说' },
        { text: '童书' },
        { text: '文学小说' },
        { text: '童书' },
        { text: '文学小说' },
        { text: '童书' },
        { text: '文学小说' },
        { text: '童书' },
        { text: '文学小说' },
        { text: '童书' },
        { text: '文学小说' },
        { text: '童书' },
        { text: '文学小说' },
        { text: '童书' },
        { text: '文学小说' },
        { text: '童书' },
        { text: '文学小说' }
      ]
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
      }
      .main__item__content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 14px;
        .single {
          color: $black;
          font-size: $small;
        }
      }
    }
  }
}
</style>
