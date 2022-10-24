// State
import { listsAdapter } from "./adaptors";
import { RootState } from "../../interfaces/store";

// Utils
import { ASYNC_STATES } from "../../utils/constants";

/**
 * The lists selector.
 */
export const { selectAll: selectLists } = listsAdapter.getSelectors<RootState>(
  (state) => state.lists
);

/**
 * The selected list.
 * @param state - The root state.
 * @returns The selected list.
 */
export const selectSelectedList = (state: RootState) => state.lists.selected;

/**
 * The pending state for list call.
 * @param state - The root state.
 * @returns If the list is pending
 */
export const selectIsListsPending = (state: RootState) =>
  state.lists.status === ASYNC_STATES.PENDING;

/**
 * The pending state for the lists call.
 * @param state - The root state.
 * @returns The pending state.
 */
export const selectListsPendingState = (state: RootState) => state.lists.status;

/**
 * The selected tasks.
 * @param state - The root state.
 * @returns An array of tasks.
 */
export const selectSelectedTasks = (state: RootState) => {
  if (!state.lists.selected) return [];
  return [...(state.lists.entities[state.lists.selected]?.tasks ?? [])];
};
