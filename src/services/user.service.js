import axios from "axios";

const baseUrl = process.env.AUTH_URL;

const login = async (username, email, password) => {
  try {
    return await axios.post(`${baseUrl}/login/`, {
      username,
      email,
      password,
    });
  } catch (e) {
    return e.response;
  }
};

const register = async (username, email, password1, password2) => {
  try {
    return await axios.post(`${baseUrl}/registration/`, {
      username,
      email,
      password1,
      password2,
    });
  } catch (e) {
    return e.response;
  }
};

const verify = async (accessToken) => {
  try {
    const res = await axios.post(`${baseUrl}/token/verify/`, {
      token: accessToken,
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

const refresh = async (refreshToken) => {
  try {
    const res = await axios.post(`${baseUrl}/token/refresh/`, {
      refresh: refreshToken,
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export default { login, register, verify, refresh };
