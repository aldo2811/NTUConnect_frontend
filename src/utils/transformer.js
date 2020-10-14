const camelToSnake = (str) =>
  str
    .replace(/\W+/g, "-")
    .replace(/([a-z\d])([A-Z])/g, "$1_$2")
    .toLowerCase();

const snakeToCamel = (s) => s.replace(/(_\w)/g, (m) => m[1].toUpperCase());

const transformObject = (obj, fn) => {
  if (obj === null || obj === undefined) return obj;

  if (
    typeof obj === "string" ||
    typeof obj === "number" ||
    typeof obj === "boolean"
  )
    return obj;

  if (Array.isArray(obj)) return obj.map((el) => transformObject(el, fn));

  const result = {};
  Object.entries(obj).forEach(([key, val]) => {
    result[fn(key)] = transformObject(val, fn);
  });

  return result;
};

const parseObjectToCamelCase = (obj) => {
  return transformObject(obj, snakeToCamel);
};

const parseObjectToSnakeCase = (obj) => {
  return transformObject(obj, camelToSnake);
};

export { parseObjectToCamelCase, parseObjectToSnakeCase };
