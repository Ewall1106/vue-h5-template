module.exports = {
  local: {
    baseUrl: "/dev-api",
    mockUrl: "http://127.0.0.1:7001",
  },
  development: {
    baseUrl: "/dev-api",
    mockUrl: "https://api.xwhx.top",
  },
  production: {
    baseUrl: "https://api.xwhx.top",
    mockUrl: "https://api.xwhx.top",
  },
  publish: {
    baseUrl: "https://api.xwhx.top",
    mockUrl: "https://api.xwhx.top",
  },
};
