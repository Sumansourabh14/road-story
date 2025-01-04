import { login } from "@/services/globalApi";
import Cookies from "js-cookie";
import { setToken, setUser } from "../user";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const loginUser = createAsyncThunk(
  "userLogin",
  async (payload, { dispatch }) => {
    const res = await login(payload);

    const { token, user } = res.data;

    dispatch(setToken(token));
    dispatch(setUser(user));

    return res.data;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        Cookies.set("token", action.payload.token, { secure: true });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Email or password is invalid";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default loginSlice.reducer;
