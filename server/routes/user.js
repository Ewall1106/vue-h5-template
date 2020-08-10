const router = require('@koa/router')()

router.prefix('/user')

router.get('/info', async(ctx, next) => {
  ctx.status = 200
  ctx.body = {
    code: 200,
    entry: {
      name: 'Ewall&熊猫',
      avatar:
        'https://raw.githubusercontent.com/Ewall1106/panda-vue-template/master/src/assets/logo.png',
      id: '00001'
    }
  }
})

router.post('/login', async(ctx, next) => {
  ctx.status = 200
  ctx.body = {
    code: 200,
    entry: {
      code: 200,
      entry: {
        token: 'mall-token123456'
      }
    }
  }
})

module.exports = router
