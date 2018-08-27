<template>
  <div class="testCom">
    <input type="text" v-model="message" />
    <button @click="click">Send</button>
  </div>
</template>

<script>
export default {
  name: "testCom",
  data() {
    return {
      message: "我是来自子组件的消息"
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    click() {
      this.$emit("childFn", this.message);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.testCom {
  //background: @bgColor;
  input {
    border: 1px solid black;
  }
  // button {
  //   width: 200px;
  //   height: 100px;
  // }
}
</style>
