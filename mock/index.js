import Mock from "mockjs";

import user from "./user";

const config = require("../src/utils/config");
const baseURL = config[process.env.NODE_ENV].baseUrl;

const mocks = [...user];

// https://github.com/nuysoft/Mock/wiki
export function mockXHR() {
  for (const item of mocks) {
    Mock.mock(`${baseURL}${item.url}`, item.type, (config) => {
      const response = item.response(config);
      console.info(`mock ${item.url}:`, response);
      return response;
    });

    Mock.setup({
      timeout: 600,
    });
  }
}
