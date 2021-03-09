module.exports = {
  mock: {
    baseURL: '/dev-api',
    mockURL: 'https://mock.xwhx.top'
  },
  local: {
    baseURL: '/dev-api',
    mockURL: 'http://127.0.0.1:7001'
  },
  development: {
    baseURL: '/dev-api',
    mockURL: 'https://api.xwhx.top'
  },
  production: {
    baseURL: 'https://api.xwhx.top',
    mockURL: 'https://api.xwhx.top'
  }
}
