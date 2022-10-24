// Libraries
import {
  createSlice,
  Dictionary,
  EntityId,
  PayloadAction,
} from "@reduxjs/toolkit";

import { extraReducers } from "../lists/reducers";

// Interfaces
import { IList } from "../../interfaces/entities";

// Actions
import { ASYNC_STATES } from "../../utils/constants";

import { listsAdapter } from "../lists/adaptors";

/**
 * The state of the lists slice.
 */
export interface State {
  selected: string | null;
  ids: EntityId[];
  entities: Dictionary<IList>;
  status: ASYNC_STATES;
}

/**
 * The state of the slice.
 */
const initialState: State = {
  selected: null,
  ...listsAdapter.getInitialState(),
  status: ASYNC_STATES.IDLE,
};

/**
 * The list slice.
 */
export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    updateSelectedList: (
      state: State,
      action: PayloadAction<string | null>
    ) => {
      state.selected = action.payload;
    },
  },
  extraReducers: {
    ...extraReducers,
  },
});
