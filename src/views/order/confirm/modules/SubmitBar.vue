<template>
  <div>
    <van-submit-bar
      :loading="loading"
      :price="amount"
      button-text="确认订单"
      class="submit-bar"
      @submit="onSubmit"
    />
    <div class="submit-bar-placeholder" style="width: 100%; height: 50px" />
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'

export default {
  props: {
    amount: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    variables() {
      return variables
    }
  },
  methods: {
    onSubmit() {
      this.$emit('handleSubmit')
    }
  }
}
</script>

<style scoped>
.submit-bar {
  box-shadow: 0px -2px 10px 0px rgba(0, 0, 0, 0.08);
}
</style>
