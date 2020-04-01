export default [
  {
    url: '/prod-api/user/info',
    type: 'get',
    response: config => {
      return {
        code: 200,
        entry: {
          name: 'Ewall&熊猫',
          avatar:
            'https://raw.githubusercontent.com/Ewall1106/panda-vue-template/master/src/assets/logo.png',
          id: '00001'
        }
      }
    }
  },

  {
    url: '/prod-api/user/login',
    type: 'post',
    response: config => {
      return {
        code: 200,
        entry: {
          token: 'mall-token123456'
        }
      }
    }
  }
]
