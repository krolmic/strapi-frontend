export const isAbsoluteUrl = str => str.slice(0, 4) === "http";

export const getImgUrl = (imgPath, apiUrl) =>
  isAbsoluteUrl(imgPath) ? imgPath : apiUrl + imgPath;
