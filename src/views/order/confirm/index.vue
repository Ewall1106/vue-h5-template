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
import ListItem from './modules/ListItem'

import { getAddressList } from '@/api/user'
import { getOrderList } from '@/api/order'

export default {
  name: 'OrderConfirm',
  components: {
    ListItem
  },
  data() {
    return {
      contact: {
        type: 'edit',
        name: '',
        tel: ''
      }
    }
  },
  mounted() {
    this.getAddress()
  },
  methods: {
    // 获取列表
    getOrderList() {
      getOrderList({

      }).then(res => {

      })
    },
    // 获取地址
    getAddress() {
      getAddressList().then((res) => {
        const { list = [], defaultId = '' } = res.entry
        let address = ''
        if (defaultId) {
          address = list.filter((item) => item.addressId === defaultId)
        } else address = list.filter((item) => item.isDefault === true)
        if (address && address.length) {
          const [{ name, tel, addressId }] = address
          this.contact = {
            type: 'edit',
            addressId,
            name,
            tel: tel + ''
          }
        } else {
          this.contact = { type: 'add' }
        }
      })
    },
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
