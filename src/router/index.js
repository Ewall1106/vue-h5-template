import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Classify from '@/view/classify'
import GoodsList from '@/view/goodsList'
import GoodsDetail from '@/view/goodsDetail'
import Cart from '@/view/cart'
import Address from '@/view/address'
import AddressEdit from '@/view/addressEdit'
import Me from '@/view/me'
import Test from '@/view/test'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    path: '/goodsList',
    name: 'GoodsList',
    component: GoodsList
  },
  {
    path: '/goodsDetail',
    name: 'GoodsDetail',
    component: GoodsDetail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/address',
    name: 'Address',
    component: Address
  },
  {
    path: '/addressEdit',
    name: 'AddressEdit',
    component: AddressEdit
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }]
})
