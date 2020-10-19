import axios from "axios";

const baseUrl = process.env.API_URL;

const list = async (accessToken) => {
  try {
    const res = await axios.get(`${baseUrl}/threads/list/`, {
      headers: { Authorization: accessToken },
    });
    return res;
  } catch (e) {
    return e;
  }
};

const create = async (title, description, forumId, accessToken) => {
  try {
    const res = await axios.post(
      `${baseUrl}/threads/create/`,
      {
        title,
        description,
        forum: forumId,
      },
      { headers: { Authorization: accessToken } }
    );
    return res;
  } catch (e) {
    return e;
  }
};

export default { list, create };
