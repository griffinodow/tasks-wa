// Libraries
import { combineReducers, configureStore } from "@reduxjs/toolkit";

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

/**
 * The combined reducers of the store.
 */
export const reducers = combineReducers({
  user: userSlice.reducer,
  lists: listsSlice.reducer,
});
