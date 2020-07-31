import axios, {AxiosInstance} from "axios";
import {UNAUTHORIZED} from "http-status-codes";

import {API_URL, SERVER_TIMEOUT} from "@services/const";


const createAPI = (onUnauthorized): AxiosInstance => {
  const api: AxiosInstance = axios.create({
    baseURL: API_URL,
    timeout: SERVER_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response} = error;
    if (response.status === UNAUTHORIZED) {
      onUnauthorized();
      // throw an error because it's important to interrupt the Promise chane after an authorization request
      // authorization request is a special case and we have to understand a request was failed
      throw error;
    }
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};

export default createAPI;
