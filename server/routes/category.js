const router = require('@koa/router')()

router.prefix('/category')

router.get('/items', async(ctx, next) => {
  ctx.status = 200
  ctx.body = {
    code: 200,
    entry: [
      { text: '热门推荐' },
      { text: '童书' },
      { text: '文学小说' },
      { text: '教育考试' },
      { text: '人文社科' },
      { text: '艺术' },
      { text: '生活' }
    ]
  }
})

router.post('/content', async(ctx, next) => {
  ctx.status = 200
  const list = [
    {
      banner:
        'http://img63.ddimg.cn/upload_img/00803/1/886x315_0319-1584685987.jpg',
      listItem: [
        {
          title: '热门推荐',
          content: [
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
              name: '艺术'
            }
          ]
        }
      ]
    },
    {
      banner:
        'http://img11.360buyimg.com/uba/jfs/t1/34018/11/1897/61648/5caac06cE19c3c7e9/e17ee22760977176.jpg',
      listItem: [
        {
          title: '童书',
          content: [
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t19729/274/1819711003/14952/ecbcd8c4/5ad82777N312c5766.jpg',
              name: '文学'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t19729/274/1819711003/14952/ecbcd8c4/5ad82777N312c5766.jpg',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            }
          ]
        },
        {
          title: '0-10岁',
          content: [
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t19729/274/1819711003/14952/ecbcd8c4/5ad82777N312c5766.jpg',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            }
          ]
        },
        {
          title: '20-100岁',
          content: [
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t19729/274/1819711003/14952/ecbcd8c4/5ad82777N312c5766.jpg',
              name: '文学'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t19729/274/1819711003/14952/ecbcd8c4/5ad82777N312c5766.jpg',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            }
          ]
        }
      ]
    },
    {
      banner:
        'http://img30.360buyimg.com/uba/jfs/t1/25978/14/14796/75442/5caac076Ebef0897f/1f1a364728228b67.jpg',
      listItem: [
        {
          title: '文学小说',
          content: [
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
              name: '艺术'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            }
          ]
        }
      ]
    },
    {
      banner: 'http://img61.ddimg.cn/upload_img/00803/1/886x315-1585620617.jpg',
      listItem: [
        {
          title: '教育考试',
          content: [
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },

            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            }
          ]
        }
      ]
    },
    {
      banner:
        'http://img11.360buyimg.com/uba/jfs/t1/34018/11/1897/61648/5caac06cE19c3c7e9/e17ee22760977176.jpg',
      listItem: [
        {
          title: '人文社科',
          content: [
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t19729/274/1819711003/14952/ecbcd8c4/5ad82777N312c5766.jpg',
              name: '文学'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t19729/274/1819711003/14952/ecbcd8c4/5ad82777N312c5766.jpg',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            }
          ]
        },
        {
          title: '0-10岁',
          content: [
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t19729/274/1819711003/14952/ecbcd8c4/5ad82777N312c5766.jpg',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            }
          ]
        },
        {
          title: '20-100岁',
          content: [
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t19729/274/1819711003/14952/ecbcd8c4/5ad82777N312c5766.jpg',
              name: '文学'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t19729/274/1819711003/14952/ecbcd8c4/5ad82777N312c5766.jpg',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            }
          ]
        }
      ]
    },
    {
      banner: 'http://img61.ddimg.cn/upload_img/00803/1/886x315-1585620617.jpg',
      listItem: [
        {
          title: '艺术',
          content: [
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },

            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            }
          ]
        }
      ]
    },
    {
      banner: 'http://img61.ddimg.cn/upload_img/00803/1/886x315-1585620617.jpg',
      listItem: [
        {
          title: '生活',
          content: [
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t17599/245/1834577586/17629/f5050ae7/5ad82741N33a7d3c9.jpg',
              name: '人文社科'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t18004/321/1801504285/36146/4c486eed/5ad82758N53cf0dc6.png',
              name: '艺术'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg',
              name: '文学'
            },
            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            },
            {
              img:
                'http://img13.360buyimg.com/focus/s140x140_jfs/t17050/274/1799803385/10631/fc5794e2/5ad82735N3559f4ac.jpg',
              name: '教材教辅'
            },

            {
              img:
                'http://img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg',
              name: '童书'
            }
          ]
        }
      ]
    }
  ]

  const { index } = ctx.request.body
  console.log('ctx.response.body', ctx.request.body.index)

  ctx.status = 200
  ctx.body = {
    code: 200,
    entry: list[index]
  }
})

module.exports = router
