<template>
  <div class="card__item">
    <van-checkbox
      v-model="checked"
      icon-size="18px"
      :checked-color="variables.theme"
      style="padding:0 10px 0 16px"
    />
    <van-swipe-cell style="width:100%" :before-close="beforeClose">
      <van-card
        :num="num"
        :tag="tag"
        :price="price/100"
        :desc="desc"
        :title="title"
        :thumb="thumb"
        :origin-price="oldPrice"
        @click="gotoDetail"
      >
        <template #tags>
          <!-- <van-tag
            v-for="(item,idx) in tags"
            :key="idx"
            plain
            type="danger"
            style="margin-right:4px"
          >{{ item }}</van-tag> -->
          <van-tag
            v-for="(attr, idx) in skuAttr"
            :key="idx"
            plain
            color="#999"
            style="margin-right: 2px"
          >{{ attr }}</van-tag>
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
    index: {
      type: Number,
      default: 0
    },
    skuId: {
      type: String,
      default: ''
    },
    thumb: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default() {
        return []
      }
    },
    skuAttr: {
      type: Array,
      default() {
        return []
      }
    },
    oldPrice: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    },
    num: {
      type: Number,
      default: 0
    },
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
    gotoDetail() {
      this.$router.push({
        path: '/detail',
        query: {
        }
      })
    },
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
              this.$emit('handleDelete', this.index, this.skuId)
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
