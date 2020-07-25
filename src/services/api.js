import axios from "axios";

import {API_URL, HTTPErrorCode, SERVER_TIMEOUT} from "@services/const";


const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: SERVER_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response} = error;
    if (response.status === HTTPErrorCode.UNAUTHORIZED) {
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
