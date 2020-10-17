import axios from "axios";

const baseUrl = process.env.API_URL;

const list = async (token) => {
  try {
    const res = await axios.get(`${baseUrl}/forums/list/`, {
      headers: { Authorization: token },
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

const join = async (forumId, token) => {
  try {
    const res = await axios.post(
      `${baseUrl}/forums/join/`,
      { forum: forumId },
      {
        headers: { Authorization: token },
      }
    );
    return res;
  } catch (e) {
    return e.response;
  }
};

const detail = async (forumId, token) => {
  try {
    const res = await axios.get(`${baseUrl}/forums/${forumId}/detail/`, {
      headers: { Authorization: token },
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

export default { list, join, detail };
