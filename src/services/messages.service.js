import axios from "axios";

const baseUrl = process.env.API_URL;

const list = async (threadId, accessToken) => {
  try {
    const res = await axios.get(`${baseUrl}/threads/${threadId}/detail/`, {
      headers: { Authorization: accessToken },
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export default { list };
