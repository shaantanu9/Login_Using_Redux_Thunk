import { LOGIN, ERROR, LOADING, LOGOUT, SET_TOKEN } from "../action/types";

const initialState = {
  isAuth: false,
  token: null,
  isLoading: false,
  error: false
};

const reducer = (state = initialState, { type, payload }) => {
  console.log(payload, "payload");
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        token: payload.token,
        isLoading: false,
        error: false
      };
    case ERROR:
      return { ...state, isAuth: false, isLoading: false, error: true };
    case LOADING:
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        token: null,
        error: false
      };
    case LOGOUT:
      return { ...initialState };
    case SET_TOKEN:
      return {
        ...state,
        isAuth: true,
        token: payload
      };
    default:
      return state;
  }
};

export default reducer;
