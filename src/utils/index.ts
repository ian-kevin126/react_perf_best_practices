export const randomStr = (length: number = 10) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const deepClone = (data: any): any => {
  if (typeof data !== "object") return data;

  return JSON.parse(JSON.stringify(data));
};

export const setLocalStorage = (key: string, value: any): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string): any => {
  let json = window.localStorage.getItem(key);

  return json ? JSON.parse(json) : null;
};

export const removeLocalStorage = (key: string): void => {
  window.localStorage.removeItem(key);
};

export const clearLocalStorage = (): void => {
  window.localStorage.clear();
};

export const setSessionStorage = (key: string, value: any): void => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = (key: string): any => {
  let json = window.sessionStorage.getItem(key);

  return json ? JSON.parse(json) : null;
};

export const removeSessionStorage = (key: string): void => {
  window.sessionStorage.removeItem(key);
};

export const clearSessionStorage = (): void => {
  window.sessionStorage.clear();
};

export const getParams = (key?: string): any => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);

  return key ? params.get(key) : Object.fromEntries(params.entries());
};

export const isPathNameActive = (path: string): boolean => {
  return path === window.location.pathname;
};
