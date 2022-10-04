import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { loginRequest } from "../redux/action/creators";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  // const [data, setdata] = useState([]);

  const dispatch = useDispatch();
  const { token, isAuth } = useSelector((state) => state.loginReducer);
  const formik = useFormik({
    initialValues: {
      email: "shantanubombatkar13@gmail.com",
      password: "",
      keepMeLogin: true
    },
    onChange: (values) => {
      console.log(values);
    },
    onSubmit: (value) => {
      console.log(value);
      dispatch(loginRequest(value));
    }
  });
  console.log(isAuth, token);

  return (
    <>
      <h1>Login Form</h1>
      <h3>Using Redux and Thunk MiddleWare</h3>
      {isAuth && (
        <>
          <p>isAuth True</p>
          <h1>Token is</h1>
          <pre>
            <code>{token}</code>
          </pre>
        </>
      )}
      <form onSubmit={formik.handleSubmit}>
        <input
          id="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          id="password"
          value={formik.values.password}
          placeholder="password"
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
