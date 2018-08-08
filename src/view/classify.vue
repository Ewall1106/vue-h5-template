<template>
  <div class="classify">
    <!-- 顶部栏 -->
    <div class="topNav">
      <span class="iconfont">&#xe660;</span>
      <div class="title">分类</div>
      <span class="iconfont">&#xe64f;</span>
    </div>
    <!-- 主体 -->
    <div class="main">
      <!-- 主体左侧 -->
      <div class="mainLeft"></div>
      <!-- 主体右侧 -->
      <div class="mainRight"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "classify",
  components: {},
  data() {
    return {
      msg: "Hello World!"
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.classify {
  background: @bgColor;
  // 顶部栏
  .topNav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.133333rem 0.24rem;
    .title {
      font-size: @sizeL;
    }
    .iconfont {
      font-size: 20px;
      font-weight: bold;
    }
  }
  // 主体
  .main {
  }
  // 主体左侧
  .mainLeft {
  }
  // 主体右侧
  .mainRight {
  }
}
</style>
