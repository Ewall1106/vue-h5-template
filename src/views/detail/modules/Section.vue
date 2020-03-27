<template>
  <div class="section">
    <van-button block>
      <div class="section__item">
        <div class="section__item__left">
          <span class="title">已选</span>
          <span class="content">三体（套装1-3册），1个</span>
        </div>
        <div class="section__item__right">
          <van-icon name="arrow" />
        </div>
      </div>
    </van-button>

    <div class="section__line"></div>
    <van-button block>
      <div class="section__item">
        <div class="section__item__left">
          <span class="title">送至</span>
          <span class="content">北京市 东城区</span>
        </div>
        <div class="section__item__right">
          <van-icon name="arrow" />
        </div>
      </div>
    </van-button>

    <div class="section__line"></div>
    <van-button block>
      <div class="section__item section__item--icon">
        <div class="section__item__left">
          <p class="icon--wrapper" v-for="(item,idx) in ['panda自营','panda发货','七天无理由退款']" :key="idx">
            <svg-icon icon-class="good" :width="18" :height="18" />
            <span>{{item}}</span>
          </p>
        </div>
        <div class="section__item__right">
          <van-icon name="arrow" />
        </div>
      </div>
    </van-button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.section {
  .van-button--default {
    border: none;
    border-radius: 0px;
  }
}
</style>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.section {
  //  width:700px;
  //  margin: 0 auto;
  // border-radius: 6px;
  margin-top: 24px;
  background: #fff;
  .section__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .section__item__left {
      .title {
        color: $gray;
        margin-right: 16px;
      }
      .content {
        color: $black;
      }
    }
    .section__item__right {
      color: $gray;
    }
  }
  .section__item--icon {
    .section__item__left {
      display: flex;
      .icon--wrapper {
        display: flex;
        align-items: center;
        color: $gray;
        font-size: $small;
        margin-right: 14px;
        span {
          margin-left: 6px;
        }
      }
    }
  }
  .section__line {
    width: 700px;
    height: 1px;
    background: #f5f5f5;
    margin: 0 auto;
  }
}
</style>
