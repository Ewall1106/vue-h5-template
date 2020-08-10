<template>
  <div class="order-confirm">
    <nav-bar title="确认订单" />

    <van-contact-card
      :type="contact.type"
      :name="contact.name"
      :tel="contact.tel"
      @click="onContact"
    />

    <div class="list">
      <list-item />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ListItem from './modules/ListItem'

export default {
  name: 'OrderConfirm',
  components: {
    ListItem
  },
  data() {
    return {
      contact: {
        type: 'add',
        name: '',
        tel: ''
      }
    }
  },
  computed: {
    ...mapGetters(['selectedAddress'])
  },
  mounted() {

  },
  activated() {
    // 对于使用了keep-alive的组件
    // 使用activated这个生命周期钩子刷新地址
    if (this.selectedAddress.id) {
      const { name, tel } = this.selectedAddress
      this.contact.type = 'edit'
      this.contact.name = name
      this.contact.tel = tel
    } else {
      this.contact.type = 'add'
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
  min-height: 100vh;
  background: #f5f5f5;
}
</style>
