import { listsAdapter } from "./adaptors";
import { RootState } from "../../interfaces/store";

/**
 * The lists selector.
 */
export const { selectAll: selectLists } = listsAdapter.getSelectors<RootState>(
  (state) => state.lists
);

/**
 * The selected list.
 */
export const selectSelectedList = (state: RootState) => state.lists.selected;

/**
 * The selected tasks selector.
 */
export const selectSelectedTasks = (state: RootState) => {
  if (!state.lists.selected) return [];
  return [...(state.lists.entities[state.lists.selected]?.tasks || [])];
};
