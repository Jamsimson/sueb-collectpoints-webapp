import { api } from "src/boot/axios";
import { LocalStorage } from "quasar";

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
  getPoint: async () => {
    const response = await api.get(`read/${LocalStorage.getItem("eiei")}`);
    if (response.data !== null) {
      return response.data.point;
    }
  },
};
