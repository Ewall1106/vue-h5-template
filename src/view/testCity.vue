<template>
  <div class="testCity">
    <router-link to="/test">←返回test页面</router-link>
    <div class="content">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>杭州</option>
        <option>广州</option>
        <option>长沙</option>
      </select>
      <span class="btn" @click="click(selected)">提交</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestCity",
  components: {},
  data() {
    return {
      selected: ""
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    click(city) {
      this.$store.dispatch("changeCity", city);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.testCity {
  font-size: 16px;
  padding: 5px;
  .content {
    padding-top: 20px;
    margin-top: 5px;
    border-top: 1px dotted #000;
    .btn {
      color: #fff;
      font-size: 14px;
      padding: 5px 20px;
      background-color: #de3d96;
      border-radius: 25px;
    }
  }
}
</style>
