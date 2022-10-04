import { LOGIN } from "../types";
import axios from "axios";
// import axios from "../../../api/baseAxios";
const login = (data) => {
  console.log(data, "deom login");
  return {
    type: LOGIN,
    payload: data
  };
};

const loginRequest = (data) => {
  console.log("from dispatch", data);
  return (dispatch) => {
    axios
      .post("https://camel-bedclothes.cyclic.app/users/login", data)
      .then((res) => {
        return dispatch(login(res.data));
      })
      .catch((err) => {
        console.log(err, "error from Login");
      });
  };
};

export { loginRequest, login };
