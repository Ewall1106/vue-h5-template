export default [
  {
    url: '/prod-api/address/list',
    type: 'get',
    response: config => {
      return {
        code: 200,
        entry: [
          {
            name: '张三',
            tel: '13122803333',
            country: '',
            province: '北京市',
            city: '北京市',
            county: '朝阳区',
            areaCode: '110105',
            postalCode: '110000',
            addressDetail: '某街道某巷口',
            isDefault: true,
            id: '1',
            address: '浙江省杭州市拱墅区莫干山路 50 号'
          },
          {
            id: '2',
            name: '李四',
            tel: '1310000000',
            country: '',
            province: '浙江省',
            city: '杭州市',
            county: '江干区',
            areaCode: '330104',
            postalCode: '123123',
            addressDetail: '某某某街道某村',
            isDefault: false,
            id: '2',
            address: '浙江省杭州市某某某街道某村'
          }
        ]
      }
    }
  }
]
