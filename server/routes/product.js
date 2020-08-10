const router = require('@koa/router')()

router.prefix('/product')

router.post('/list', async(ctx, next) => {
  const { pageSize, pageNo } = ctx.request.body

  const list = [
    {
      img: 'http://img3m1.ddimg.cn/31/4/20039611-1_b_9.jpg',
      title: '小熊和最好的爸爸（全7册）',
      desc:
        '作者：（荷）阿兰德·丹姆  著，（荷）亚历克斯·沃尔夫  绘，漆仰平，爱桐  译 ',
      price: 1233,
      discount: 322,
      percentage: 70
    },
    {
      img: 'http://img3m2.ddimg.cn/0/27/28473192-1_b_3.jpg',
      title:
        '你当像鸟飞往你的山（比尔·盖茨年度特别推荐，登顶《纽约时报》畅销榜80 周！多一个人读到这个真实故事，就多一个人勇敢做自己！',
      desc: '作者：塔拉·韦斯特弗著，新经典出品',
      price: 1000,
      discount: 888,
      percentage: 40
    },
    {
      img: 'http://img3m0.ddimg.cn/61/3/23444350-1_b_4.jpg',
      title: '神奇校车·桥梁书版（全20',
      desc: '作者：乔安娜柯尔　著 布鲁斯迪根 图　施芳',
      price: 8833,
      discount: 987,
      percentage: 60
    },
    {
      img: 'http://img3m5.ddimg.cn/56/4/23761145-1_b_6.jpg',
      title: '人间失格（日本小说家太宰治的自传体小说，李现推荐）',
      desc: '作者：[意] 伊塔洛·卡尔维诺',
      price: 5343,
      discount: 986,
      percentage: 90
    },
    {
      img: 'http://img3m1.ddimg.cn/66/15/24175371-1_b_108.jpg',
      title: '致命流感',
      desc: '作者：[美] 杰瑞米·布朗',
      price: 5553,
      discount: 986,
      percentage: 30
    },
    {
      img: 'http://img3m6.ddimg.cn/2/6/9239276-1_b_7.jpg',
      title: '去往猴面包树的旅程',
      desc: '作者：[南非] 威尔玛·斯托肯斯特罗姆',
      price: 9976,
      discount: 156,
      percentage: 100
    },
    {
      img: 'http://img3m9.ddimg.cn/25/29/25246609-1_b_1.jpg',
      title: '吃',
      desc: '[英]菲利普·费尔南多-阿梅斯托 ',
      price: 899,
      discount: 566,
      percentage: 10
    },
    {
      img: 'http://img3m1.ddimg.cn/31/4/20039611-1_b_9.jpg',
      title: '小熊和最好的爸爸（全7册）',
      desc:
        '作者：（荷）阿兰德·丹姆  著，（荷）亚历克斯·沃尔夫  绘，漆仰平，爱桐  译 ',
      price: 1233,
      discount: 322,
      percentage: 70
    },
    {
      img: 'http://img3m0.ddimg.cn/61/3/23444350-1_b_4.jpg',
      title: '神奇校车·桥梁书版（全20',
      desc: '作者：乔安娜柯尔　著 布鲁斯迪根 图　施芳',
      price: 8833,
      discount: 987,
      percentage: 60
    },
    {
      img: 'http://img3m5.ddimg.cn/56/4/23761145-1_b_6.jpg',
      title: '人间失格（日本小说家太宰治的自传体小说，李现推荐）',
      desc: '作者：[意] 伊塔洛·卡尔维诺',
      price: 5343,
      discount: 986,
      percentage: 90
    },
    {
      img: 'http://img3m2.ddimg.cn/0/27/28473192-1_b_3.jpg',
      title:
        '你当像鸟飞往你的山（比尔·盖茨年度特别推荐，登顶《纽约时报》畅销榜80 周！多一个人读到这个真实故事，就多一个人勇敢做自己！',
      desc: '作者：塔拉·韦斯特弗著，新经典出品',
      price: 1000,
      discount: 888,
      percentage: 40
    },
    {
      img: 'http://img3m1.ddimg.cn/31/4/20039611-1_b_9.jpg',
      title: '小熊和最好的爸爸（全7册）',
      desc:
        '作者：（荷）阿兰德·丹姆  著，（荷）亚历克斯·沃尔夫  绘，漆仰平，爱桐  译 ',
      price: 1233,
      discount: 322,
      percentage: 70
    },
    {
      img: 'http://img3m0.ddimg.cn/61/3/23444350-1_b_4.jpg',
      title: '神奇校车·桥梁书版（全20',
      desc: '作者：乔安娜柯尔　著 布鲁斯迪根 图　施芳',
      price: 8833,
      discount: 987,
      percentage: 60
    },
    {
      img: 'http://img3m5.ddimg.cn/56/4/23761145-1_b_6.jpg',
      title: '人间失格（日本小说家太宰治的自传体小说，李现推荐）',
      desc: '作者：[意] 伊塔洛·卡尔维诺',
      price: 5343,
      discount: 986,
      percentage: 90
    },
    {
      img: 'http://img3m9.ddimg.cn/25/29/25246609-1_b_1.jpg',
      title: '吃',
      desc: '[英]菲利普·费尔南多-阿梅斯托 ',
      price: 899,
      discount: 566,
      percentage: 10
    },
    {
      img: 'http://img3m1.ddimg.cn/31/4/20039611-1_b_9.jpg',
      title: '小熊和最好的爸爸（全7册）',
      desc:
        '作者：（荷）阿兰德·丹姆  著，（荷）亚历克斯·沃尔夫  绘，漆仰平，爱桐  译 ',
      price: 1233,
      discount: 322,
      percentage: 70
    },
    {
      img: 'http://img3m0.ddimg.cn/61/3/23444350-1_b_4.jpg',
      title: '神奇校车·桥梁书版（全20',
      desc: '作者：乔安娜柯尔　著 布鲁斯迪根 图　施芳',
      price: 8833,
      discount: 987,
      percentage: 60
    },
    {
      img: 'http://img3m1.ddimg.cn/31/4/20039611-1_b_9.jpg',
      title: '小熊和最好的爸爸（全7册）',
      desc:
        '作者：（荷）阿兰德·丹姆  著，（荷）亚历克斯·沃尔夫  绘，漆仰平，爱桐  译 ',
      price: 1233,
      discount: 322,
      percentage: 70
    },
    {
      img: 'http://img3m0.ddimg.cn/61/3/23444350-1_b_4.jpg',
      title: '神奇校车·桥梁书版（全20',
      desc: '作者：乔安娜柯尔　著 布鲁斯迪根 图　施芳',
      price: 8833,
      discount: 987,
      percentage: 60
    },
    {
      img: 'http://img3m5.ddimg.cn/56/4/23761145-1_b_6.jpg',
      title: '人间失格（日本小说家太宰治的自传体小说，李现推荐）',
      desc: '作者：[意] 伊塔洛·卡尔维诺',
      price: 5343,
      discount: 986,
      percentage: 90
    },
    {
      img: 'http://img3m2.ddimg.cn/0/27/28473192-1_b_3.jpg',
      title:
        '你当像鸟飞往你的山（比尔·盖茨年度特别推荐，登顶《纽约时报》畅销榜80 周！多一个人读到这个真实故事，就多一个人勇敢做自己！',
      desc: '作者：塔拉·韦斯特弗著，新经典出品',
      price: 1000,
      discount: 888,
      percentage: 40
    },
    {
      img: 'http://img3m1.ddimg.cn/31/4/20039611-1_b_9.jpg',
      title: '小熊和最好的爸爸（全7册）',
      desc:
        '作者：（荷）阿兰德·丹姆  著，（荷）亚历克斯·沃尔夫  绘，漆仰平，爱桐  译 ',
      price: 1233,
      discount: 322,
      percentage: 70
    },
    {
      img: 'http://img3m0.ddimg.cn/61/3/23444350-1_b_4.jpg',
      title: '神奇校车·桥梁书版（全20',
      desc: '作者：乔安娜柯尔　著 布鲁斯迪根 图　施芳',
      price: 8833,
      discount: 987,
      percentage: 60
    },
    {
      img: 'http://img3m5.ddimg.cn/56/4/23761145-1_b_6.jpg',
      title: '人间失格（日本小说家太宰治的自传体小说，李现推荐）',
      desc: '作者：[意] 伊塔洛·卡尔维诺',
      price: 5343,
      discount: 986,
      percentage: 90
    },
    {
      img: 'http://img3m9.ddimg.cn/25/29/25246609-1_b_1.jpg',
      title: '吃',
      desc: '[英]菲利普·费尔南多-阿梅斯托 ',
      price: 899,
      discount: 566,
      percentage: 10
    },
    {
      img: 'http://img3m1.ddimg.cn/31/4/20039611-1_b_9.jpg',
      title: '小熊和最好的爸爸（全7册）',
      desc:
        '作者：（荷）阿兰德·丹姆  著，（荷）亚历克斯·沃尔夫  绘，漆仰平，爱桐  译 ',
      price: 1233,
      discount: 322,
      percentage: 70
    },
    {
      img: 'http://img3m0.ddimg.cn/61/3/23444350-1_b_4.jpg',
      title: '神奇校车·桥梁书版（全20',
      desc: '作者：乔安娜柯尔　著 布鲁斯迪根 图　施芳',
      price: 8833,
      discount: 987,
      percentage: 60
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
