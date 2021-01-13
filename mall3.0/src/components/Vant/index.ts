import { App } from 'vue'
import { Button, List, Tabbar, TabbarItem } from 'vant'

// https://vant-contrib.gitee.io/vant/v3/#/zh-CN
const plugins = [Button, List, Tabbar, TabbarItem]

export default {
  install: function(vm: App) {
    plugins.forEach(item => {
      vm.component(item.name, item)
    })
  }
}
