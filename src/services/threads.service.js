import axios from "axios";

const baseUrl = process.env.API_URL;

const list = async (token) => {
  try {
    const res = await axios.get(`${baseUrl}/threads/list/`, {
      headers: { Authorization: token },
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export default { list };
