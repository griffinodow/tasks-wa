// Libraries
import { configureStore } from "@reduxjs/toolkit";

// State
import { userSlice } from "./user/slice";
import { listsSlice } from "./lists/slice";

/**
 * The redux store.
 */
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    lists: listsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
