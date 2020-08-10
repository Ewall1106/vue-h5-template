const router = require('@koa/router')()

router.prefix('/search')

router.get('/hotlist', async(ctx, next) => {
  ctx.status = 200
  ctx.body = {
    code: 200,
    entry: ['衣服', '手机', '三体书籍三体书籍', '鞋子', '箱包']
  }
})

router.post('/result', async(ctx, next) => {
  const { pageSize, pageNo } = ctx.request.body

  const list = [
    {
      img: 'http://img3m6.ddimg.cn/21/10/24516876-1_b_2.jpg',
      title: '小行星掉在下午',
      desc: '作者：沈大成',
      price: 1000,
      discount: 888
    },
    {
      img: 'http://img3m5.ddimg.cn/31/23/25308985-1_b_8.jpg',
      title: '小行星掉在下午',
      desc: '作者：沈大成',
      price: 1000,
      discount: 888
    },
    {
      img: 'http://img3m1.ddimg.cn/3/23/27866721-1_b_2.jpg',
      title: '事实',
      desc: '作者：沈大成',
      price: 1000,
      discount: 888
    },
    {
      img: 'http://img3m2.ddimg.cn/0/27/28473192-1_b_3.jpg',
      title: '小行星掉在下午',
      desc: '作者：沈大成',
      price: 1000,
      discount: 888
    },
    {
      img: 'http://img3m2.ddimg.cn/0/27/28473192-1_b_3.jpg',
      title: '小行星掉在下午',
      desc: '作者：沈大成',
      price: 1000,
      discount: 888
    },
    {
      img: 'http://img3m5.ddimg.cn/56/4/23761145-1_b_6.jpg',
      title: '我的不朽已然足够',
      desc: '作者：[俄罗斯] 安德烈·塔可夫斯基',
      price: 999,
      discount: 3
    },
    {
      img: 'http://img3m0.ddimg.cn/64/6/23990140-1_b_10.jpg',
      title: '饱食穷民',
      desc: '作者：[日]斋藤茂男',
      price: 1233,
      discount: 987
    },
    {
      img: 'http://img3m6.ddimg.cn/83/20/25138856-1_b_2.jpg',
      title: '马可瓦尔多',
      desc: '作者：[意] 伊塔洛·卡尔维诺',
      price: 5343,
      discount: 986
    },
    {
      img: 'http://img3m9.ddimg.cn/25/29/25246609-1_b_1.jpg',
      title: '致命流感',
      desc: '作者：[美] 杰瑞米·布朗',
      price: 5553,
      discount: 986
    },
    {
      img: 'http://img3m0.ddimg.cn/7/27/25137790-1_b_4.jpg',
      title: '去往猴面包树的旅程',
      desc: '作者：[南非] 威尔玛·斯托肯斯特罗姆',
      price: 9976,
      discount: 156
    },
    {
      img: 'http://img3m3.ddimg.cn/68/20/23271503-1_b_10.jpg',
      title: '赞扬与责备',
      desc: '[英] 特丽·阿普特 / Terri Apter',
      price: 1300,
      discount: 1020
    },
    {
      img: 'http://img3m3.ddimg.cn/40/6/27854383-1_b_91.jpg',
      title: '吃',
      desc: '[英]菲利普·费尔南多-阿梅斯托 ',
      price: 899,
      discount: 566
    },
    {
      img: 'http://img3m2.ddimg.cn/49/27/26912902-1_b_3.jpg',
      title: '我的不朽已然足够',
      desc: '作者：[俄罗斯] 安德烈·塔可夫斯基',
      price: 999,
      discount: 3
    },
    {
      img: 'http://img3m5.ddimg.cn/51/34/26921715-1_b_2.jpg',
      title: '饱食穷民',
      desc: '作者：[日]斋藤茂男',
      price: 1233,
      discount: 987
    },
    {
      img: 'http://img3m5.ddimg.cn/56/4/23761145-1_b_6.jpg',
      title: '我的不朽已然足够',
      desc: '作者：[俄罗斯] 安德烈·塔可夫斯基',
      price: 999,
      discount: 3
    },
    {
      img: 'http://img3m4.ddimg.cn/32/35/23579654-1_b_3.jpg',
      title: '赞扬与责备',
      desc: '[英] 特丽·阿普特 / Terri Apter',
      price: 1300,
      discount: 1020
    },
    {
      img: 'http://img3m5.ddimg.cn/56/4/23761145-1_b_6.jpg',
      title: '我的不朽已然足够',
      desc: '作者：[俄罗斯] 安德烈·塔可夫斯基',
      price: 999,
      discount: 3
    },
    {
      img: 'http://img3m4.ddimg.cn/32/35/23579654-1_b_3.jpg',
      title: '赞扬与责备',
      desc: '[英] 特丽·阿普特 / Terri Apter',
      price: 1300,
      discount: 1020
    }
  ]

  if (!pageSize || !pageNo || pageSize <= 0 || pageNo <= 0) {
    ctx.status = 400
    ctx.body = {
      code: 400,
      message: '参数错误'
    }
  } else {
    ctx.status = 200
    ctx.body = {
      code: 200,
      entry: list.slice(
        Number((pageNo - 1) * pageSize),
        (pageNo - 1) * pageSize + pageSize
      )
    }
  }
})

module.exports = router
