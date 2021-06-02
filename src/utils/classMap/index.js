export const classMap = (obj) =>
  Object.keys(obj)
    .filter((className) => Boolean(obj[className]))
    .join(" ")
    .trim();
