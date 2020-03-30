export default [
  {
    url: '/prod-api/user/info',
    type: 'get',
    response: config => {
      return {
        code: 200,
        entry: {
          name: '张三',
          avatar: '11111'
        }
      }
    }
  }
]
