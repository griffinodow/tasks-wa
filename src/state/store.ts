import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/slice";
import { listsSlice } from "./lists/slice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    lists: listsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
