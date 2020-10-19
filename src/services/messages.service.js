import axios from "axios";

const baseUrl = process.env.API_URL;

const list = async (threadId, accessToken) => {
  try {
    const res = await axios.get(`${baseUrl}/threads/${threadId}/detail/`, {
      headers: { Authorization: accessToken },
    });
    return res;
  } catch (e) {
    return e;
  }
};

const create = async (content, threadId, accessToken) => {
  try {
    const res = await axios.post(
      `${baseUrl}/messages/create/`,
      { content, thread: threadId },
      { headers: { Authorization: accessToken } }
    );
    return res;
  } catch (e) {
    return e;
  }
};

const upvote = async (action, messageId, accessToken) => {
  try {
    const res = await axios.put(
      `${baseUrl}/messages/${messageId}/upvote`,
      { action },
      { headers: { Authorization: accessToken } }
    );
    return res;
  } catch (e) {
    return e;
  }
};

export default { list, create, upvote };
