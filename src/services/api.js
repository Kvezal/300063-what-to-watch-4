import axios from "axios";


const Error = {
  UNAUTHORIZED: 401,
};

const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response} = error;
    if (response.state === Error.UNAUTHORIZED) {
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
