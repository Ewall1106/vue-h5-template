<template>
  <div class="section">
    <!-- <van-button block @click="onSelectSku">
      <div class="section__item">
        <div class="section__item__left">
          <span class="title">已选</span>
          <span class="content">三体（套装1-3册），1个</span>
        </div>
        <div class="section__item__right">
          <van-icon name="arrow" />
        </div>
      </div>
    </van-button> -->

    <div class="section__line" />
    <van-button block @click="handleAddress">
      <div class="section__item">
        <div class="section__item__left">
          <span class="title">送至</span>
          <span class="content">{{ address || "北京市 东城区" }}</span>
        </div>
        <div class="section__item__right">
          <van-icon name="arrow" />
        </div>
      </div>
    </van-button>

    <div class="section__line" />
    <van-button block>
      <div class="section__item section__item--icon">
        <div class="section__item__left">
          <p v-for="(item, idx) in service" :key="idx" class="icon--wrapper">
            <svg-icon icon-class="good" :width="14" :height="14" />
            <span>{{ item }}</span>
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
export default {
  props: {
    service: {
      type: Array,
      default: () => {
        return [];
      },
    },
    address: { type: String, default: "" },
  },
  methods: {
    onSelectSku() {
      this.$emit("input", true);
    },
    handleAddress() {
      this.$router.push({
        path: "/address",
      });
    },
  },
};
</script>

<style lang="scss">
.section {
  .van-button--default {
    border: none;
    border-radius: 0px;
  }
  .van-button__text {
    width: 100%;
    display: block;
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
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    .section__item__left {
      font-size: $small;
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
      align-items: center;
      .icon--wrapper {
        display: flex;
        color: $gray;
        font-size: $small;
        margin-right: 6px;
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
