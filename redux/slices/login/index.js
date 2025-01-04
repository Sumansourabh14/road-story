import { login } from "@/services/globalApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const loginUser = createAsyncThunk("userLogin", async (payload) => {
  const res = await login(payload);
  return res.data;
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    data: null,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.user = null;
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Email or password is invalid";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default loginSlice.reducer;
