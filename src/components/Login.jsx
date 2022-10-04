import { useFormik } from "formik";
import { setTokenState, loginRequest, logout } from "../redux/action/creators";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getToken } from "../utils";

const Login = () => {
  // const [data, setdata] = useState([]);

  useEffect(() => {
    const token = getToken();
    if (token) {
      console.warn(token, "token from useEffect");
      dispatch(setTokenState(token));
    }
  }, []);

  const dispatch = useDispatch();
  const logoutFunc = () => {
    dispatch(logout());
  };
  const { token, isAuth, isLoading, error } = useSelector(
    (state) => state.loginReducer
  );
  const formik = useFormik({
    initialValues: {
      email: "demo1@gmail.com",
      password: "asf232!2221A",
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
      {isLoading && <p>loading...</p>}
      {error && <p>Not a Valid Credential Please Try Again</p>}
      {isAuth && (
        <>
          <p>isAuth True</p>
          <h1>Token is</h1>
          <pre>
            <code>{token}</code>
          </pre>
        </>
      )}
      {!isAuth && (
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
          <input type="submit" value="Login" disabled={isAuth} />
        </form>
      )}
      {isAuth && <button onClick={() => logoutFunc()}>Logout</button>}
    </>
  );
};

export default Login;
