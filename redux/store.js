import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/login";
import authReducer from "./slices/user";

export const makeStore = () => {
  return configureStore({
    reducer: { login: loginReducer, auth: authReducer },
  });
};
