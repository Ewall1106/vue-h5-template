<template>
  <div class="home-title">
    <span class="line" />
    <span class="text">{{ name }}</span>
    <span class="line" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.home-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 26px;
  .line {
    display: inline-block;
    width: 40px;
    height: 2px;
    background: #999;
  }
  .text {
    font-size: $small;
    color: $black;
    padding: 0 20px;
  }
}
</style>
