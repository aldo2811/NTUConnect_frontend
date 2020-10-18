import axios from "axios";
import {
  parseObjectToCamelCase,
  parseObjectToSnakeCase,
} from "../utils/transformer";
import * as storage from "../actions/storage";
import userService from "./user.service";

const axiosApiInstance = axios.create();

axios.interceptors.response.use(
  (response) => {
    response.data = parseObjectToCamelCase(response.data);
    return response;
  },
  (error) => {
    // eslint-disable-next-line no-param-reassign
    error.response = parseObjectToCamelCase(error.response);
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.data = parseObjectToSnakeCase(config.data);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const refreshToken = storage.get("refresh_token");
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest.retry) {
      originalRequest.retry = true;
      const { access } = await userService.refresh(refreshToken);
      axios.defaults.headers.common.Authorization = `Bearer ${access}`;
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);
