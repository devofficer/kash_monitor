import { configureStore } from "@reduxjs/toolkit";
import discordSlice from "./slices/discordSlice";

export const store = configureStore({
  reducer: {
    discord: discordSlice,
  },
});
