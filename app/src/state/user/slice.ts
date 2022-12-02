// Libraries
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Data
import { IUser, IError } from "../../interfaces/entities";

// State
import { loginReducer, registerReducer } from "./extra-reducers";

// Utils
import { ASYNC_STATES } from "../../utils/constants";

/**
 * The state of the user slice.
 */
export interface State {
  data: IUser | null;
  error: IError | null;
  status: ASYNC_STATES;
}

const initialState: State = {
  data: null,
  error: null,
  status: ASYNC_STATES.IDLE,
};

/**
 * The user slice.
 */
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ...loginReducer,
    ...registerReducer,
    logout: (state: State, _action: PayloadAction<undefined>) => {
      window.localStorage.clear();
      state.data = null;
      state.error = null;
      state.status = ASYNC_STATES.IDLE;
    },
    restore: (state: State, { payload }: { payload: IUser }) => {
      state.data = payload;
      state.error = null;
      state.status = ASYNC_STATES.IDLE;
    },
  },
  extraReducers: {},
});
