// Libraries
import { Action, ThunkAction } from "@reduxjs/toolkit";

// State
import { store } from "../state/store";

/**
 * The app dispatch state.
 */
export type AppDispatch = typeof store.dispatch;

/**
 * The root state.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * The app thunk.
 */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
