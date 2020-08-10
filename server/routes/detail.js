const router = require('@koa/router')()

router.prefix('/goods')

router.post('/detail', async(ctx, next) => {
  const { goodsId: id } = ctx.request.body
  if (!id) {
    ctx.status = 403
    ctx.body = {
      code: 403,
      message: '请输入正确的商品id'
    }
  } else {
    ctx.status = 200
    ctx.body = {
      code: 200,
      entry: {
        banner: [
          'http://img3m4.ddimg.cn/32/35/23579654-1_e_3.jpg',
          'http://img3m4.ddimg.cn/32/35/23579654-2_e_5.jpg',
          'http://img3m4.ddimg.cn/32/35/23579654-3_e_3.jpg'
        ],
        overview: {
          title: '中国科幻基石丛书：三体（套装1-3册）',
          desc:
            '《三体》获第73届世界科幻大会颁发的雨果奖*佳长篇小说奖，银河奖特别奖，刘慈欣被授予2018年度克拉克想象力服务社会奖，亚洲首位雨果奖得主十届银河奖得主。',
          price: '1234',
          discount: '999'
        },
        comment: {
          rate: '99%',
          num: '10万+',
          tags: [
            '品质一流(4657)',
            '图文清晰(1156)',
            '印刷上乘(1086)',
            '质地上乘(702)',
            '优美详细(376)'
          ],
          list: [
            {
              avatar:
                'http://storage.360buyimg.com/i.imageUpload/6a645f3437323632613465313233613831353834393333353237363232_sma.jpg',
              time: 1585537881825,
              score: 5,
              name: 'Ewall&熊猫',
              desc:
                '收到货就赶紧打开看起来了，之前看过电子版的看完之后感到意犹未尽，前两天突然想再看一遍于是决定买实体书认真读一遍。',
              imgs: [
                'http://img30.360buyimg.com/shaidan/s128x96_jfs/t1/91400/14/15534/116833/5e723705E6e97e5a3/012d7444f8ccbcea.jpg',
                'http://img30.360buyimg.com/shaidan/s128x96_jfs/t1/91314/13/15486/245367/5e723706E663c43aa/abb31350cdadf56d.jpg',
                'http://img30.360buyimg.com/shaidan/s128x96_jfs/t1/103902/15/15108/267864/5e703d09E6603898f/4d91ad6fab4f76e0.jpg'
              ]
            },
            {
              avatar:
                'http://img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png',
              time: 1585537881825,
              score: 2,
              name: '张三',
              desc:
                '很好很好很好！久仰大名，如雷贯耳的刘慈欣的大作，终于在京东上买到了，用了3000京豆后，才39元到手，高兴😃。包装很好很好很好很好！纸张很好，印刷清晰，岁数大了看着也不累，很好。一直都在京东买东西，十几年了，京东的服务一直很好！快递更是给力，小哥很棒！',
              imgs: [
                'http://img30.360buyimg.com/shaidan/s128x96_jfs/t1/110454/9/7862/139882/5e61d739E6a4360d2/a2dc1ac0d8f680a9.jpg',
                'http://img30.360buyimg.com/shaidan/s128x96_jfs/t1/98014/37/12422/125922/5e478009E5acab40d/dbf006d20d040c8b.jpg',
                'http://img30.360buyimg.com/shaidan/s128x96_jfs/t1/93964/32/13999/287674/5e61d73bE7e2430bd/de2bcdb6ab83f037.jpg'
              ]
            }
          ]
        },
        description: 'http://img57.ddimg.cn/99999990003277237.jpg',
        sku: {
          // 定义类别
          tree: [
            {
              k: '系列',
              v: [
                {
                  id: '1001',
                  name: '三体1：地球往事',
                  imgUrl: 'http://img3m4.ddimg.cn/32/35/23579654-1_e_3.jpg',
                  previewImgUrl:
                    'http://img3m4.ddimg.cn/32/35/23579654-1_e_3.jpg'
                },
                {
                  id: '1002',
                  name: '三体艺术插画集',
                  imgUrl:
                    'http://m.360buyimg.com/mobilecms/s843x843_jfs/t1/61801/33/670/234001/5cee2008Ea77b2f13/c193d2370dab7ff2.jpg',
                  previewImgUrl:
                    'http://m.360buyimg.com/mobilecms/s843x843_jfs/t1/61801/33/670/234001/5cee2008Ea77b2f13/c193d2370dab7ff2.jpg'
                },
                {
                  id: '1003',
                  name: '三体2：黑暗森林',
                  imgUrl:
                    'http://m.360buyimg.com/mobilecms/s843x843_jfs/t5953/39/822101194/248686/1d0b6b5e/592bf161N3c12cc3a.jpg',
                  previewImgUrl:
                    'http://m.360buyimg.com/mobilecms/s843x843_jfs/t5953/39/822101194/248686/1d0b6b5e/592bf161N3c12cc3a.jpg'
                },
                {
                  id: '1004',
                  name: '三体（纪念版）（套装共3册）',
                  imgUrl:
                    'http://m.360buyimg.com/mobilecms/s843x843_jfs/t7084/309/1723776720/329560/b5511e85/598d1fe1N95cad7bc.jpg',
                  previewImgUrl:
                    'http://m.360buyimg.com/mobilecms/s843x843_jfs/t7084/309/1723776720/329560/b5511e85/598d1fe1N95cad7bc.jpg'
                },
                {
                  id: '1005',
                  name: '三体2.黑暗森林（典藏版）',
                  imgUrl:
                    'http://m.360buyimg.com/mobilecms/s843x843_jfs/t4288/65/1458919872/394831/25fb907b/58c213a5N4bf8e476.jpg',
                  previewImgUrl:
                    'http://m.360buyimg.com/mobilecms/s843x843_jfs/t4288/65/1458919872/394831/25fb907b/58c213a5N4bf8e476.jpg'
                }
              ],
              k_s: 's1'
            }
          ],

          // 定义sku
          list: [
            {
              id: 1,
              s1: '1001',
              price: 999,
              stock_num: 100
            },
            {
              id: 2,
              s1: '1002',
              price: 1999,
              stock_num: 123
            },
            {
              id: 3,
              s1: '1003',
              price: 1239,
              stock_num: 2
            },
            {
              id: 4,
              s1: '1004',
              price: 342,
              stock_num: 1
            },
            {
              id: 5,
              s1: '1005',
              price: 999,
              stock_num: 12
            }
          ],

          price: '9.90',
          stock_num: 227,
          collection_id: 2261,
          none_sku: false,
          messages: [],
          hide_stock: false
        },
        goods: {
          // 默认商品 sku 缩略图
          picture: 'http://img3m4.ddimg.cn/32/35/23579654-1_e_3.jpg'
        }
      }
    }
  }
})

module.exports = router
