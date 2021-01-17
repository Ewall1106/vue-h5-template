import { App } from 'vue'
import {
  Button,
  List,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Image as VanImage
} from 'vant'

// https://vant-contrib.gitee.io/vant/v3/#/zh-CN
const plugins = [Button, List, Tabbar, TabbarItem, Swipe, SwipeItem, VanImage]

export default {
  install: function(vm: App) {
    plugins.forEach(item => {
      vm.component(item.name, item)
    })
  }
}
