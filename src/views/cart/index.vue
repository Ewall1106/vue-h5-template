<template>
  <div class="cart">
    <Nav />
    <Item />
    <Tabbar />
  </div>
</template>

<script>
import Nav from './modules/Nav'
import Item from './modules/Item'
import Tabbar from './modules/Tabbar'

export default {
  name: 'Cart',
  components: {
    Nav,
    Item,
    Tabbar
  },
  data() {
    return {

    }
  }
}
</script>
