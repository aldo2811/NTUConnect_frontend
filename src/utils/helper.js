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
