export const getUsernameById = (users, userId) => {
  const user = users.find((u) => u.id === userId);
  if (user) return user.username;
  return "Anonymous";
};

export const getCourseCodeById = (forums, forumId) => {
  const forum = forums.find((f) => f.id === forumId);
  if (forum) return forum.courseCode;
  return "";
};
