import { LOGIN } from "../action/types";

const intialState = {
  isAuth: false,
  token: null,
  isLoading: true
};

const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, isAuth: true, token: payload.token };
    default:
      return state;
  }
};

export default reducer;
