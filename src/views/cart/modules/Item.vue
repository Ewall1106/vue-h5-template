<template>
  <div class="card__item">
    <van-checkbox
      v-model="checked"
      icon-size="18px"
      :checked-color="variables.theme"
      style="padding: 0 10px 0 16px"
    />
    <van-swipe-cell style="width: 100%" :before-close="beforeClose">
      <van-card
        :num="info.num"
        :tag="info.tag"
        :price="info.price | toDecimal"
        :desc="info.desc"
        :title="info.title"
        :thumb="info.img"
        :origin-price="info.oldPrice | toDecimal"
        @click="gotoDetail"
      >
        <template #tags>
          <van-tag
            v-for="(attr, idx) in info.skuAttr"
            :key="idx"
            plain
            color="#999"
            style="margin-right: 2px"
            >{{ attr }}</van-tag
          >
        </template>
      </van-card>
      <template #right>
        <van-button square text="删除" type="danger" style="height: 100%" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import variables from "@/styles/variables.scss";

export default {
  model: {
    prop: "isChecked",
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
    info: {
      type: Object,
      default: () => {
        return {};
      },
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    variables() {
      return variables;
    },
    checked: {
      get() {
        return this.isChecked;
      },
      set(val) {
        this.$emit("input", { val, idx: this.index });
      },
    },
  },
  methods: {
    gotoDetail() {
      this.$router.push({
        path: "/detail",
        query: {
          productId: this.info.productId,
        },
      });
    },
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) {
      switch (position) {
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          this.$dialog
            .confirm({
              message: "确定删除吗？",
            })
            .then(() => {
              this.$emit("handleDelete", this.index, this.info.skuId);
              instance.close();
            })
            .catch(() => {
              instance.close();
            });
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card__item {
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
}
</style>
