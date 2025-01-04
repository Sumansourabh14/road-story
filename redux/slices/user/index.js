const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import { getSelf } from "@/services/globalApi";
import Cookies from "js-cookie";

export const getUserData = createAsyncThunk("userData", async (payload) => {
  const res = await getSelf(payload);
  return res.data;
});

const initialState = {
  token: Cookies.get("token") || null, // Initialize from cookies
  user: null,
  loading: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      Cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // Store user data
        state.error = null;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Handle error
        state.user = null;
      });
  },
});

export const { setToken, clearToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
