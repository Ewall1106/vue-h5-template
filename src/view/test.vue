<template>
  <div class="test">
    <router-link to="/testCity">←返回testCity页面</router-link>
    <div>获取vuex中的值：{{this.$store.state.city}}</div>
  </div>
</template>

<script>
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
  computed: {},
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
