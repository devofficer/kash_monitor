import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfoApi } from "../services/api-auth";

export const fetchUserInfo = createAsyncThunk(
  "discord/fetchUserInfo",
  getUserInfoApi
);

const initialState = {
  authorized: false,
  access_token: "",
  status: "Not Authorized",
  user_info: {
    username: "",
  },
};

export const discordSlice = createSlice({
  name: "discord",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserInfo.pending](state) {
      state.status = "Loading";
    },
    [fetchUserInfo.fulfilled](state, action) {
      state.status = "Loaded";
      state.user_info = { ...action.payload };
      state.authorized = true;
    },
    [fetchUserInfo.rejected](state) {
      state.status = "Failed";
    },
  },
});

export const { getUserInfo } = discordSlice.actions;
export default discordSlice.reducer;
