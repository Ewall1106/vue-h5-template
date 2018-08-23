<template>
  <div class="goodlist">
    <!-- 头部标题 -->
    <div class="header">
      <span class="iconfont" @click="goBack()">&#xe660;</span>
      <div class="title">{{$route.query.title}}</div>
      <span class="iconfont" @click="goHome()">&#xe64f;</span>
    </div>
    <!-- 筛选工具栏 -->
    <div class="filter">
      <div class="filter_item" :class="currentIdx==0 ? 'on' : ''" @click="filterClick(0)">
        <span>综合排序</span>
      </div>
      <div class="filter_item" :class="currentIdx==1 ? 'on' : ''" @click="filterClick(1)">
        <i class="iconfont">&#xe766;</i>
        <span>销量</span>
      </div>
      <div class="filter_item" :class="currentIdx==2 ? 'on' : ''" @click="filterClick(2)">
        <i class="iconfont">&#xe766;</i>
        <span>价格</span>
      </div>
      <div class="filter_item" :class="currentIdx==3 ? 'on' : ''" @click="filterClick(3)">
        <i class="iconfont">&#xe74a;</i>
        <span>筛选</span>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="goods">
      <div class="goods_item" v-for="(item,index) in [1,2,3,4]" :key="index">
        <goods-item></goods-item>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from "@/components/goodsItem.vue";

export default {
  name: "GoodList",
  components: {
    GoodsItem
  },
  data() {
    return {
      currentIdx: 0
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    // 回退
    goBack() {
      this.$router.go(-1);
    },
    // 回到首页
    goHome() {
      this.$router.push({
        path: "/"
      });
    },
    // 筛选栏点击
    filterClick(idx) {
      this.currentIdx = idx;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.goodlist {
  // 头部标题
  .header {
    box-sizing: border-box;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.24rem;
    background: #fff;
    border-bottom: 1px solid @bgColor;
    .title {
      font-size: @sizeL;
    }
    .iconfont {
      font-size: 20px;
      font-weight: bold;
    }
  }
  // 筛选工具栏
  .filter {
    display: flex;
    flex-direction: row;
    text-align: center;
    border-bottom: 1px solid @bgColor;
    .filter_item {
      flex-grow: 1;
      width: 0.96rem;
      height: 1.013333rem;
      line-height: 1.013333rem;
      font-size: @sizeM;
    }
    .on {
      color: @themeColor;
    }
  }
  // 商品列表
  .goods {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.213333rem 0.133333rem;
    .goods_item {
      margin-bottom: 0.266667rem;
    }
  }
}
</style>
