import { api } from "src/boot/axios";

export const service = {
  getVersionApi: async () => {
    const response = await api
      .get("read")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
};
