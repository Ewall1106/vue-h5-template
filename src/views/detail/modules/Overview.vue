
<template>
  <div class="overview">
    <h3 class="title">{{ title }}</h3>
    <p class="desc">{{ desc }}</p>

    <div class="price">
      <span class="price__new">¥{{ price | toDecimal }}</span>
      <span class="price__old">¥{{ oldPrice | toDecimal }}</span>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'desc', 'price', 'oldPrice']
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.overview {
  padding: 24px;
  background: #fff;
  .title {
    font-size: $normal;
    color: $black;
    font-weight: bolder;
  }
  .desc {
    font-size: $small;
    color: $gray;
    margin-top: 12px;
    line-height: 36px;
    text-align: justify;
  }
  .price {
    margin-top: 12px;
    .price__new {
      font-size: $normal;
      color: $red;
      font-weight: bolder;
      margin-right: 12px;
    }
    .price__old {
      font-size: $small;
      color: $gray;
      text-decoration: line-through;
    }
  }
}
</style>
