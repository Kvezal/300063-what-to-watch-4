import axios, {AxiosInstance} from "axios";

import {API_URL, SERVER_TIMEOUT} from "@common/consts";


const createAPI = (): AxiosInstance => {
  const api: AxiosInstance = axios.create({
    baseURL: API_URL,
    timeout: SERVER_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};

export default createAPI;
