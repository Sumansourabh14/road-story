import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/login";

export const makeStore = () => {
  return configureStore({
    reducer: { login: loginReducer },
  });
};
