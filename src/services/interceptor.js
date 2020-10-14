import axios from "axios";
import {
  parseObjectToCamelCase,
  parseObjectToSnakeCase,
} from "../utils/transformer";

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
