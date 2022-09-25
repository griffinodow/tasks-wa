import { ASYNC_STATES } from "../../utils/constants";
import { RootState } from "../../interfaces/store";

/**
 * Select token.
 */
export const selectToken = (state: RootState) => state.user.data?.token;

/**
 * Select token.
 */
export const selectUser = (state: RootState) => state.user.data;

export const selectIsPendingUser = (state: RootState) =>
  state.user.status === ASYNC_STATES.PENDING;

export const selectIsAuthorized = (state: RootState) =>
  state.user.data !== null;
