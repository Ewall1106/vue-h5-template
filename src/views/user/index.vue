<template>
  <div class="user">
    <Info />
    <Order />
    <Tools />
  </div>
</template>

<script>
import Info from './modules/Info'
import Order from './modules/Order'
import Tools from './modules/Tools'

export default {
  name: 'User',
  components: {
    Info,
    Order,
    Tools
  }
}
</script>
