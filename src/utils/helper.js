export const getUserNameScoreById = (users, userId) => {
  const user = users.find((u) => u.id === userId);

  if (user) {
    const { username, score } = user;
    return { username, score };
  }
  return { username: "", score: 0 };
};

export const getCourseCodeById = (forums, forumId) => {
  const forum = forums.find((f) => f.id === forumId);
  if (forum) return forum.courseCode;
  return "";
};

export const parseDate = (dateTime) => {
  const monthMap = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const datePattern = /\d{4}-\d{2}-\d{2}/;
  const timePattern = /\d{2}:\d{2}:\d{2}/;
  const date = dateTime.match(datePattern)[0];
  const time = dateTime.match(timePattern)[0];

  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");

  return `${day} ${monthMap[month]} ${year} • ${hour}:${minute}`;
};
