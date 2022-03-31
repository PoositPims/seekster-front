import axios from "axios";
import { API_URL } from "./env";
import { getToken, removeToken } from ".././services/locaStorage";

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = "Bearer " + getToken();
    // config.headers.Test = "Test interceptor";
    // config.params = {tessssst:{'abcdrgf'}}
    return config; // ส่ง config ไปหา server
  },
  (err) => Promise.reject(err)
);

// axios.defaults.headers.common["Authorization"] = "Bearer " + getToken;

// interceptor ฝั่ง response
axios.interceptors.response.use(
  (response) => {
    return response;
    // กรณีที่มัน success pattern ของ axios ([บรรทัด 19 20 ])
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      removeToken();
      window.location.reload();
      return; // return เพื่อให้มันจบ function
    }
    return Promise.reject(err);
  }
);

export default axios;
