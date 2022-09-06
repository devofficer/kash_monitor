import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfoApi } from "../services/api-auth";

export const fetchUserInfo = createAsyncThunk(
  "discord/fetchUserInfo",
  getUserInfoApi
);

const initialState = {
  authorized: false,
  access_token: "",
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
      state.user_info.username = "loading";
    },
    [fetchUserInfo.fulfilled](state, action) {
      console.log(action.payload);
      state.user_info = { ...action.payload };
      console.log(state.user_info);
    },
    [fetchUserInfo.rejected](state) {
      state.user_info.username = "no result";
    },
  },
});

export const { getUserInfo } = discordSlice.actions;
export default discordSlice.reducer;
