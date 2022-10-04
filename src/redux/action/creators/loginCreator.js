import { LOGIN, ERROR, LOADING } from "../types";
import axios from "axios";
// import axios from "../../../api/baseAxios";
const login = (data) => {
  console.log(data, "deom login");
  return {
    type: LOGIN,
    payload: data
  };
};

const error = () => {
  return {
    type: ERROR
  };
};

const loading = () => {
  return {
    type: LOADING
  };
};

const loginRequest = (data) => {
  // console.log("from dispatch", data);
  return (dispatch) => {
    dispatch(loading());
    axios
      .post("https://camel-bedclothes.cyclic.app/users/login", data)
      .then((res) => {
        return dispatch(login(res.data));
      })
      .catch((err) => {
        console.log(err, "error from Login");
        dispatch(error());
      });
  };
};

export { loginRequest, login, error, loading };
