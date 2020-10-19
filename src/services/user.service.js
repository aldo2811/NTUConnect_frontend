import axios from "axios";

const baseUrl = process.env.AUTH_URL;
const apiUrl = process.env.API_URL;

const login = async (username, password) => {
  try {
    return await axios.post(`${baseUrl}/login/`, {
      username,
      password,
    });
  } catch (e) {
    return e;
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
    return e;
  }
};

const verify = async (accessToken) => {
  try {
    const res = await axios.post(`${baseUrl}/token/verify/`, {
      token: accessToken,
    });
    return res;
  } catch (e) {
    return e;
  }
};

const list = async (accessToken) => {
  try {
    const res = await axios.get(`${apiUrl}/users/`, {
      headers: { Authorization: accessToken },
    });
    return res;
  } catch (e) {
    return e;
  }
};

export default { login, register, verify, list };
