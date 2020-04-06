<template>
  <div class="search-words">
    <!-- history -->
    <div class="history" v-if="searchKey.length > 0">
      <h3 class="history__title">
        <p class="history__title__left">
          <van-icon name="underway-o" size="16" />
          <span class="text">最近搜索</span>
        </p>
        <p class="history__title__right" @click="onDelete">
          <van-icon name="delete" size="16" />
        </p>
      </h3>
      <div class="history__main">
        <p
          class="history__main__item"
          v-for="(item,idx) in searchKey"
          :key="idx"
          @click="onSearch(item)"
        >{{item}}</p>
      </div>
    </div>
    <!-- hot -->
    <div class="hot" v-if="true">
      <h3 class="hot__title">
        <div class="hot__title__left">
          <van-icon name="fire-o" size="16" />
          <span class="text">热门搜索</span>
        </div>
      </h3>
      <div class="hot__main">
        <p
          class="hot__main__item"
          v-for="(item,idx) in hotList"
          :key="idx"
          @click="onSearch(item)"
        >{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['hotList'],
  computed: {
    ...mapGetters(['searchKey'])
  },
  methods: {
    onDelete() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '确定清空所有搜索记录吗？'
        })
        .then(() => {
          this.$store.dispatch('search/delKey')
        })
        .catch(() => {})
    },
    onSearch(value) {
      this.$store.dispatch('search/setKey', value)
      this.$router.push({
        path: '/search/list',
        query: {
          key: value,
          t: +new Date()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.search-words {
  .history,
  .hot {
    .history__title,
    .hot__title {
      padding: 24px;
      display: flex;
      justify-content: space-between;
      font-size: $small;
      .history__title__left,
      .hot__title__left {
        display: flex;
        align-items: center;
        .text {
          margin-left: 8px;
        }
      }
    }
    .history__main,
    .hot__main {
      display: flex;
      flex-wrap: wrap;
      padding: 0 0 0 24px;
      .history__main__item,
      .hot__main__item {
        font-size: $mini;
        background: #f5f5f5;
        padding: 8px 12px;
        color: $gray;
        border-radius: 6px;
        margin: 0 24px 24px 0;
      }
    }
  }
}
</style>
