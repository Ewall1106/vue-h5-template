export const userApi = [
  {
    url: "/user/info",
    type: "get",
    response: () => {
      return {
        code: 200,
        status: true,
        message: "success",
        data: {
          name: "Vue-H5-Template",
        },
      };
    },
  },
];

export default userApi;
