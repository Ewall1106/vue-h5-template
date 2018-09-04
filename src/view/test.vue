<template>
    <div class="test">
        <test-com @childFn="parentFn"></test-com>
        <br/> 子组件传来的值 : {{message}}
    </div>
</template>

<script>
import TestCom from "@/components/testCom";

export default {
  name: "test",
  components: {
    TestCom
  },
  data() {
    return {
      message: ""
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    parentFn(payload) {
      this.message = payload;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.test {
  //background: @bgColor;
}
</style>
