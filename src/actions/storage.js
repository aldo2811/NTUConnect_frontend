export const save = (key, obj) => {
  try {
    localStorage.setItem(key, JSON.stringify(obj));
    return true;
  } catch (e) {
    // Catch error
  }
  return false;
};

export const get = (key) => {
  try {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  } catch (e) {
    // Catch error
  }
  return null;
};
