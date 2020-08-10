<template>
  <div class="comment">
    <div class="title">
      <van-button block>
        <div class="comment__item">
          <div class="comment__item__left">
            <span class="title">评价</span>
            <span class="content">好评率{{ rate }}</span>
          </div>
          <div class="comment__item__right">
            <span class="text">共{{ num }}评论</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </van-button>
      <div class="comment__line" />
    </div>

    <div class="tags">
      <van-tag
        v-for="(item,idx) in tags"
        :key="idx"
        class="tags__item"
        :color="variables.red"
        plain
      >{{ item }}</van-tag>
    </div>

    <div class="main">
      <comment-item
        v-for="(item,idx) in list"
        :key="idx"
        :avatar="item.avatar"
        :name="item.name"
        :time="item.time"
        :score="item.score"
        :desc="item.desc"
        :imgs="item.imgs"
        style="margin-top:12px"
      />
      <div class="main__btn">
        <van-button :color="variables.gray" plain round size="small">查看全部评价</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import CommentItem from '@/components/CommentItem'
import variables from '@/styles/variables.scss'

export default {
  components: {
    CommentItem
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['rate', 'num', 'tags', 'list'],
  computed: {
    variables() {
      return variables
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.comment {
  margin-top: 24px;
  background: #fff;
  .title {
    .comment__item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .comment__item__left {
        font-size: $small;
        .title {
          color: $black;
          margin-right: 16px;
        }
        .content {
          color: $red;
        }
      }
      .comment__item__right {
        display: flex;
        align-items: center;
        color: $gray;
        font-size: $mini;
      }
    }
    .comment__line {
      width: 700px;
      height: 1px;
      background: #f5f5f5;
      margin: 0 auto;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 24px;
    .tags__item {
      margin: 14px 8px 0 0;
    }
  }

  .main {
    padding: 0 24px;
    .main__btn {
      display: flex;
      justify-content: center;
      padding: 24px;
    }
  }
}
</style>
