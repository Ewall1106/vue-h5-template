<template>
  <div class="test">
    <router-link to="/testCity">←返回testCity页面</router-link>
    <!-- <div>获取vuex中的值：{{this.$store.state.city}}</div> -->
    <!-- <div>获取vuex中的值：{{this.city}}</div> -->

    <!-- Getter -->
    <!-- <div>获取vuex中的值：{{this.$store.getters.currentCity}}</div> -->
    <div>获取vuex中的值：{{this.currentCity}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "test",
  components: {},
  data() {
    return {
      message: "hello world"
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {
    // 使用mapState辅助函数帮助我们生成计算属性
    // 将this.city映射为this.$store.state.city
    // ...mapState(["city"])

    ...mapGetters(["currentCity"])
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.test {
  font-size: 16px;
  padding: 5px;
  div {
    padding-top: 20px;
    margin-top: 5px;
    border-top: 1px dotted #000;
  }
}
</style>
