<template>
  <div class="addressEdit">
    <!-- 导航栏 -->
    <div class="topNav">
      <span class="iconfont" @click="goBack()">&#xe660;</span>
      <div class="title">地址编辑</div>
    </div>
    <!-- 编辑主体 -->
    <div class="content">
      <van-address-edit 
        :area-list="areaList" 
        show-postal show-delete 
        show-set-default 
        @save="onSave" 
        @delete="onDelete" />
    </div>
  </div>
</template>

<script>
import areaList from "@/assets/js/area";

export default {
  name: "addressEdit",
  components: {},
  data() {
    return {
      areaList
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
    // 保存
    onSave() {
      Toast("save");
    },
    // 删除
    onDelete() {
      Toast("delete");
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.addressEdit {
  // 导航栏
  .topNav {
    position: relative;
    box-sizing: border-box;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 0.24rem;
    background: #fff;
    border-bottom: 1px solid @bgColor;
    line-height: 45px;
    .title {
      font-size: @sizeL;
    }
    .iconfont {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 20px;
      font-weight: bold;
      margin-left: 0.24rem;
    }
  }
}
</style>
