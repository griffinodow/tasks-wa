// Libraries
import { createSlice } from "@reduxjs/toolkit";

import { IUser, IError } from "../../interfaces/interfaces";
import { loginReducer } from "./extra-reducers";

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
  },
  extraReducers: {},
});
