import axios from "axios";

const baseUrl = process.env.API_URL;

const list = async (accessToken) => {
  try {
    const res = await axios.get(`${baseUrl}/forums/list/`, {
      headers: { Authorization: accessToken },
    });
    return res;
  } catch (e) {
    return e;
  }
};

const join = async (forumId, accessToken) => {
  try {
    const res = await axios.post(
      `${baseUrl}/forums/join/`,
      { forum: forumId },
      {
        headers: { Authorization: accessToken },
      }
    );
    return res;
  } catch (e) {
    return e;
  }
};

const detail = async (forumId, accessToken) => {
  try {
    const res = await axios.get(`${baseUrl}/forums/${forumId}/detail/`, {
      headers: { Authorization: accessToken },
    });
    return res;
  } catch (e) {
    return e;
  }
};

export default { list, join, detail };
