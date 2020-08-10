const router = require('@koa/router')()

router.prefix('/cart')

router.get('/list', async(ctx, next) => {
  ctx.status = 200
  ctx.body = {
    code: 200,
    entry: [
      {
        thumb:
          'http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1705/189/702227414/177982/cc8c12f0/55dab54dN5271c377.jpg',
        title: '三体：全三册 刘慈欣代表作，亚洲首部“雨果奖”获奖作品！',
        desc: '三体（套装1-3册）、刘慈欣',
        tag: '火爆',
        tags: ['满50减20', 'hot'],
        price: 999,
        originPrice: 1999,
        num: 2
      },
      {
        thumb:
          'http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/90120/7/4704/139666/5de89639E42275016/326ea6515d8cf588.jpg',
        title:
          '俞军产品方法论 ：“贴吧之父”俞军作品，程维 张博 张一鸣 刘建国推荐',
        desc: '俞军、俞军产品方法论',
        tag: '',
        tags: ['满100减20'],
        price: 399,
        originPrice: 1229,
        num: 3
      },
      {
        thumb:
          'http://img10.360buyimg.com/mobilecms/s234x234_jfs/t20752/225/2204842766/176681/331ef836/5b4b48c1Nc91949da.jpg',
        title: '薛兆丰经济学讲义：奇葩说导师薛兆丰的经济学堂',
        desc: '薛兆丰经济学讲义、薛兆丰',
        tag: '',
        // tags: ['满100减20'],
        price: 99,
        originPrice: 129,
        num: 4
      },
      {
        thumb:
          'http://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/90685/19/16126/119101/5e787988Eae065685/aa06fd0266a2d226.jpg',
        title: '两次全球大危机的比较研究',
        desc: '薛兆丰经济学讲义、薛兆丰',
        tag: '热销',
        tags: ['满15享受换购'],
        price: 1229,
        originPrice: 129,
        num: 1
      },
      {
        thumb:
          'http://img10.360buyimg.com/mobilecms/s234x234_jfs/t5938/66/8635132160/269079/7cc4a7fc/598aaf2aNf408a6c9.jpg',
        title: '钱穆先生著作系列（简体精装）：八十忆双亲 师友杂忆',
        desc: '钱穆先生著作系列',
        tag: '热销',
        tags: ['满15享受换购'],
        price: 329,
        originPrice: 129,
        num: 10
      },
      {
        thumb:
          'http://img10.360buyimg.com/mobilecms/s234x234_jfs/t5818/70/3871840350/217550/63b2558d/59437916Nac3e493d.jpg',
        title: ' 阿里铁军：阿里巴巴销售铁军的进化、裂变与复制',
        desc: '阿里铁军、Alibaba',
        tag: '',
        tags: ['满15享受换购'],
        price: 329,
        originPrice: 129,
        num: 1
      },
      {
        thumb:
          'http://img10.360buyimg.com/mobilecms/s234x234_jfs/t16597/24/2426282977/443680/f6d03304/5af441f4Nfed06413.jpg',
        title: ' 文学名家名著：长赢投资系列：滚雪球（套装上下册）',
        desc: '滚雪球',
        tag: '',
        tags: ['满1500享受换购'],
        price: 123,
        originPrice: 12129,
        num: 3
      },
      {
        thumb:
          'http://img10.360buyimg.com/mobilecms/s234x234_jfs/t3532/329/1902076372/173754/bf15a38b/5836a542Nd52043cc.jpg',
        title: ' 历代经济变革得失（典藏版）',
        desc: '滚雪球',
        tag: '',
        tags: ['满100享受换购'],
        price: 423,
        originPrice: 12129,
        num: 1
      },
      {
        thumb:
          'http://img10.360buyimg.com/mobilecms/s234x234_jfs/t12511/361/1212428361/495924/37e0ee78/5a1d1e26N5509ba25.jpg',
        title: '谁动了我的奶酪？',
        desc: '谁动了我的奶酪？',
        tag: '',
        tags: ['满100享受换购'],
        price: 423,
        originPrice: 12129,
        num: 2
      },
      {
        thumb:
          'http://img10.360buyimg.com/mobilecms/s234x234_jfs/t20371/214/1230280089/23026/929812ae/5b238a8aN5094fc97.jpg',
        title: '参与感：小米口碑营销内部手册（珍藏版）',
        desc: '谁动了我的奶酪？',
        tag: '',
        tags: ['满100享受换购'],
        price: 423,
        originPrice: 12129,
        num: 1
      },
      {
        thumb:
          'http://img10.360buyimg.com/mobilecms/s234x234_jfs/t14878/55/2308298400/178448/b9736927/5a93cf7bN26ce0ac1.jpg',
        title: '独裁者手册',
        desc: '独裁者手册',
        tag: '',
        tags: ['满10享受换购'],
        price: 423,
        originPrice: 12129,
        num: 1
      }
    ]
  }
})

module.exports = router
