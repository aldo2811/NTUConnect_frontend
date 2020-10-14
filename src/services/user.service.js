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
    return e;
  }
};

export default { login };
