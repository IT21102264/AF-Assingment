import { ADD_TOKEN, DELETE_TOKEN } from "./authtypes";

let initialState = {
  token: null,
  auth: false,
  username: null,
  roel: null,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TOKEN: {
      return {
        ...state,
        token: payload.token,
        auth: true,
        username: payload.username,
        role: payload.role,
      };
    }
    case DELETE_TOKEN: {
      return {
        ...state,
        token: null,
        auth: false,
        username: null,
        role: null,
      };
    }
    default: {
      return state;
    }
  }
};
