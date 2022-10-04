import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { LOGIN } from "../redux/action/types";

import axios from "../api/baseAxios";

const Login = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    axios
      .get("/bookmarks")
      .then((res) => {
        console.log(res, "res.data");
        setdata(res.data.bookmarks);
      })
      .catch((err) => console.error(err));
  }, []);
  return <></>;
};

export default Login;
