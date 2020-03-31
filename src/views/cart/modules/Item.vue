<template>
  <div class="card__item">
    <van-checkbox
      icon-size="18px"
      :checked-color="variables.theme"
      v-model="checked"
      style="padding:0 10px 0 16px"
    ></van-checkbox>
    <van-swipe-cell style="width:100%" :before-close="beforeClose">
      <van-card
        :num="num"
        :tag="tag"
        :price="price"
        :desc="desc"
        :title="title"
        :thumb="thumb"
        :origin-price="originPrice"
      >
        <template #tags>
          <van-tag
            plain
            type="danger"
            v-for="(item,idx) in tags"
            :key="idx"
            style="margin-right:4px"
          >{{item}}</van-tag>
        </template>
      </van-card>
      <template #right>
        <van-button square text="删除" type="danger" style="height:100%" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  model: {
    prop: 'isChecked'
  },
  props: {
    index: Number,
    thumb: String,
    title: String,
    desc: String,
    tag: String,
    tags: Array,
    originPrice: Number,
    price: Number,
    num: Number,
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    variables() {
      return variables
    },
    checked: {
      get() {
        return this.isChecked
      },
      set(val) {
        this.$emit('input', { val, idx: this.index })
      }
    }
  },
  methods: {
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) {
      switch (position) {
        case 'cell':
        case 'outside':
          instance.close()
          break
        case 'right':
          this.$dialog
            .confirm({
              message: '确定删除吗？'
            })
            .then(() => {
              this.$emit('handleDelete', this.index)
              instance.close()
            })
            .catch(() => {
              instance.close()
            })
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card__item {
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
}
</style>
