// Utils
import { ASYNC_STATES } from "../../utils/constants";

// State
import { RootState } from "../../interfaces/store";

/**
 * Select token.
 */
export const selectToken = (state: RootState) => state.user.data?.token;

/**
 * Select token.
 */
export const selectUser = (state: RootState) => state.user.data;

/**
 * The is pending selector.
 * @param state - The redux state.
 * @returns The pending state.
 */
export const selectIsPendingUser = (state: RootState) =>
  state.user.status === ASYNC_STATES.PENDING;

/**
 * The authorized selector.
 * @param state - The redux state.
 * @returns The authorized state.
 */
export const selectIsAuthorized = (state: RootState) =>
  state.user.data !== null;
