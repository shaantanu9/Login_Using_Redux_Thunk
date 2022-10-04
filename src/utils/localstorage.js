const getToken = () => {
  return window.localStorage.getItem("token");
};
const setToken = (token) => {
  return window.localStorage.setItem("token", token);
};
const removeToken = () => {
  return window.localStorage.removeItem("token");
};

export { getToken, setToken, removeToken };
