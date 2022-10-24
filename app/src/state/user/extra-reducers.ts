// Libraries
import { WritableDraft } from "immer/dist/internal";

// Data
import { IUser } from "../../interfaces/entities";

// Utils
import { ASYNC_STATES } from "../../utils/constants";

// State
import { State } from "./slice";

/**
 * The get token reducer.
 */
export const loginReducer = {
  "login/pending": (state: WritableDraft<State>) => {
    state.data = null;
    state.error = null;
    state.status = ASYNC_STATES.PENDING;
  },
  "login/fulfilled": (
    state: WritableDraft<State>,
    { payload }: { payload: IUser }
  ) => {
    state.data = payload;
    state.error = null;
    state.status = ASYNC_STATES.FULFILLED;
  },
  "login/rejected": (
    state: WritableDraft<State>,
    { payload }: { payload: any }
  ) => {
    state.status = ASYNC_STATES.REJECTED;
    state.error = payload;
    state.data = null;
  },
};
