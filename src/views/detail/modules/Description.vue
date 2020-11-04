<template>
  <div class="description">
    <h3 class="title">产品特色</h3>
    <div class="main">
      <image-pic
        v-for="(item, idx) in details"
        :key="idx"
        width="100%"
        fill="cover"
        :src="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.description {
  background: #fff;
  margin-top: 24px;
  .title {
    color: $black;
    font-size: $small;
    padding: 30px;
  }
  .main {
    padding: 0 24px;
  }
}
</style>>
