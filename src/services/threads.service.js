import axios from "axios";

const baseUrl = process.env.API_URL;

const list = async (accessToken) => {
  try {
    const res = await axios.get(`${baseUrl}/threads/list/`, {
      headers: { Authorization: accessToken },
    });
    console.log(res);
    return res;
  } catch (e) {
    return e.response;
  }
};

export default { list };
