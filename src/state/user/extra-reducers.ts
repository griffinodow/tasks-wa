import { WritableDraft } from "immer/dist/internal";
import { State } from "./slice";
import { ASYNC_STATES } from "../../utils/constants";
import { IUser } from "../../interfaces/interfaces";

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
