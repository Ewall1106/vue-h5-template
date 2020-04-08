<template>
  <div class="order-confirm">
    <nav-bar title="确认订单" />

    <van-contact-card
      :type="contact.type"
      :name="contact.name"
      :tel="contact.tel"
      @click="onContact"
    />
  </div>
</template>

<script>
export default {
  name: 'OrderConfirm',
  data() {
    return {
      contact: {
        type: 'add',
        name: '',
        tel: ''
      }
    }
  },
  methods: {
    onContact() {
      this.$router.push({
        path: '/address'
      })
    }
  }
}
</script>

 <style lang="scss" scoped>
.order-confirm {
}
</style>
