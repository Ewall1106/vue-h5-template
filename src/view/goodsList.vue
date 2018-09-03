<template>
  <div class="goodsList">
    <div class="fix_top">
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
    </div>
    <!-- 商品列表 -->
    <div class="goods">
      <div class="goods_item" v-for="(item,index) in list" :key="index" @click="gotoDetail()">
        <goods-item :img="item.goodsImg" :desc="item.desc" :price="item.price" :discount="item.discount"></goods-item>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GoodsItem from "@/components/goodsItem.vue";

export default {
  name: "GoodList",
  components: {
    GoodsItem
  },
  data() {
    return {
      // 工具栏索引
      currentIdx: 0,
      // 商品列表
      list: ""
    };
  },
  created() {},
  mounted() {
    this.getGoodsList();
  },
  watch: {},
  computed: {},
  methods: {
    // 获取商品列表数据
    getGoodsList() {
      axios.get("/api/goodsList.json").then(res => {
        if (res.data.code == 200) {
          this.list = res.data.goodslist;
        }
        console.log("商品列表数据：", res);
      });
    },
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
    },
    // 点击商品块
    gotoDetail() {
      this.$router.push({
        path: "/goodsDetail"
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.goodsList {
  .fix_top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
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
    background: #fff;
    .filter_item {
      flex-grow: 1;
      width: 0.96rem;
      height: 38px;
      line-height: 38px;
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
    margin-top: 83px;
    .goods_item {
      margin-bottom: 0.266667rem;
    }
  }
}
</style>
