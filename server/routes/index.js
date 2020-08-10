const router = require('@koa/router')()

router.prefix('/home')

router.get('/banner', async(ctx, next) => {
  ctx.status = 200
  ctx.body = {
    code: 200,
    entry: [
      'https://m.360buyimg.com/babel/s750x300_jfs/t1/104517/14/15980/188439/5e7311fcE32a88066/4461e1fb99fc7cf6.jpg',
      'https://m.360buyimg.com/babel/s750x300_jfs/t1/91722/36/15702/155940/5e743902E12329b15/bf74028004890c45.jpg',
      'https://m.360buyimg.com/babel/s750x300_jfs/t1/101273/30/14675/149408/5e698fd3E34e671d0/20f810d02067d342.jpg'
    ]
  }
})

router.get('/category', async(ctx, next) => {
  ctx.status = 200
  ctx.body = {
    code: 200,
    entry: [
      {
        id: '01',
        icon:
          'https://s10.mogucdn.com/mlcdn/c45406/191025_5289fkljd9d0g8i3752e1425h5k5j_150x150.gif_640x640.v1cAC.40.webp',
        name: '新人福利'
      },
      {
        id: '02',
        icon:
          'https://s10.mogucdn.com/mlcdn/c45406/191021_341k4a24f2g43k2f831a3308lfb3e_135x135.jpg_640x640.v1cAC.40.webp',
        name: '畅销榜单'
      },
      {
        id: '03',
        icon:
          'https://s10.mogucdn.com/mlcdn/c45406/191021_38g134a547jibek9a9f1hk63gedea_135x135.jpg_640x640.v1cAC.40.webp',
        name: '新书'
      },
      {
        id: '04',
        icon:
          'https://s10.mogucdn.com/mlcdn/c45406/191021_56ka8de0g03elfj24025lci3ibh7b_135x135.jpg_640x640.v1cAC.40.webp',
        name: '金典书籍'
      },
      {
        id: '05',
        icon:
          'https://s10.mogucdn.com/mlcdn/c45406/190627_453h1450k9j52k5fl1l1d33c40j5a_150x150.jpg_640x640.v1cAC.40.webp',
        name: '儿童书籍'
      },
      {
        id: '06',
        icon:
          'https://s10.mogucdn.com/mlcdn/c45406/191021_20j30i86a39alg8kbefki4fldj28h_135x135.jpg_640x640.v1cAC.40.webp',
        name: '少儿书'
      },
      {
        id: '07',
        icon:
          'https://s10.mogucdn.com/mlcdn/c45406/191021_50egdgihl52bcglijgabbdhjcd5k2_135x135.jpg_640x640.v1cAC.40.webp',
        name: '漫画'
      },
      {
        id: '08',
        icon:
          'https://s10.mogucdn.com/mlcdn/c45406/190906_6h3kl9bba59if8g0b81h22d2dhdhg_135x135.jpg_640x640.v1cAC.40.webp',
        name: '小人书'
      },
      {
        id: '09',
        icon:
          'https://s10.mogucdn.com/mlcdn/c45406/191021_1e2023151ge45f970eadhgck5ib91_135x135.jpg_640x640.v1cAC.40.webp',
        name: '少儿书'
      },
      {
        id: '10',
        icon:
          'https://s10.mogucdn.com/mlcdn/c45406/191021_50egdgihl52bcglijgabbdhjcd5k2_135x135.jpg_640x640.v1cAC.40.webp',
        name: '漫画'
      },
      {
        id: '11',
        icon:
          'https://s10.mogucdn.com/mlcdn/c45406/191021_50egdgihl52bcglijgabbdhjcd5k2_135x135.jpg_640x640.v1cAC.40.webp',
        name: '小人书'
      },
      {
        id: '12',
        icon:
          'https://s10.mogucdn.com/mlcdn/c45406/191021_50egdgihl52bcglijgabbdhjcd5k2_135x135.jpg_640x640.v1cAC.40.webp',
        name: '金典'
      }
    ]
  }
})

router.get('/session', async(ctx, next) => {
  ctx.status = 200
  ctx.body = {
    code: 200,
    entry: [
      {
        img:
          'https://m.360buyimg.com/babel/s750x300_jfs/t1/96501/1/14812/180805/5e69f6e2E65623863/c40c27c4ec520eef.jpg',
        title: '头号爆品、新书特卖专场',
        tagnum: 1000,
        discount: 3,
        time: new Date().getTime() + 10000000
      },
      {
        img:
          'https://m.360buyimg.com/babel/s1125x450_jfs/t1/98771/1/15620/172104/5e733babEe579fad9/d7d5e51a1f2975e8.jpg',
        title: '321阅读日、热门专场',
        tagnum: 9999,
        discount: 8,
        time: new Date().getTime()
      },
      {
        img:
          'https://m.360buyimg.com/babel/s1125x450_jfs/t1/85360/22/15634/120107/5e733524E4883f099/c8c92ebd6112a76e.jpg',
        title: '电影学院，电影书籍专场特卖',
        tagnum: 666,
        discount: 5,
        time: 100000
      }
    ]
  }
})

router.post('/list', async(ctx, next) => {
  const { pageNum, pageSize } = ctx.request.body

  const list = [
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
    }
  ]

  if (!pageNum || !pageSize || pageNum <= 0 || pageSize <= 0) {
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
        Number((pageNum - 1) * pageSize),
        (pageNum - 1) * pageSize + pageSize
      )
    }
  }
})

module.exports = router
