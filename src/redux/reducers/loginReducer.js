import { LOGIN, ERROR, LOADING, LOGOUT } from "../action/types";

const initialState = {
  isAuth: false,
  token: null,
  isLoading: false,
  error: false
};

const reducer = (state = initialState, { type, payload }) => {
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
    default:
      return state;
  }
};

export default reducer;
