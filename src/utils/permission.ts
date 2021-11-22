import router from '@/router'
import store from '@/store'
import { Toast, Notify } from 'vant'
import { getToken, blackList } from './auth'

router.beforeEach(async (to: any, from, next) => {
  // 设置标题
  document.title = to.meta.title || 'Vue-H5-Template'

  // 根据token判断用户是否登录
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/signin') {
      // 如果已经登录了，而去的又是login页就重定向到首页
      next({ path: '/' })
    } else {
      const hasUserInfo = store.state.user.userInfo.uid
      if (hasUserInfo) {
        next()
      } else {
        // 如果用户刷新了浏览器，那么需要重新请求基本信息塞到vuex中进行状态管理
        try {
          await store.dispatch('user/getInfo')
          next()
        } catch (error: any) {
          // 清空token重新去登录
          await store.dispatch('user/signOut')
          Toast.fail(error.message || '出错了')
          next(`/login?redirect=${encodeURI(location.href)}`)
        }
      }
    }
  } else {
    if (blackList.indexOf(to.path) === -1) {
      // 白名单没有token也直接放行
      next()
    } else {
      Notify({ type: 'primary', message: '请先登录后再操作' })
      next(`/signin?redirect=${to.fullPath}`)
    }
  }
})
