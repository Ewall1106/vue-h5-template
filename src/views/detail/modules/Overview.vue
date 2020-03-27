
<template>
  <div class="overview">
    <h3 class="title">中国科幻基石丛书：三体（套装1-3册）</h3>
    <p class="desc">《三体》获第73届世界科幻大会颁发的雨果奖*佳长篇小说奖，银河奖特别奖，刘慈欣被授予2018年度克拉克想象力服务社会奖，亚洲首位雨果奖得主十届银河奖得主。</p>

    <div class="price">
      <span class="price__new">¥1231</span>
      <span class="price__old">¥123123</span>
    </div>
  </div>
</template>

<script>
export default {}
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
