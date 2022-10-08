// Data
import { IList } from "../../../../../../../../interfaces/entities";

// State
import { putList } from "../../../../../../../../state/lists/thunks";

/**
 * Creates the update name handler.
 * @param dispatch - The redux dispatcher.
 * @param setIsEditing - The function that updates if the list is being edited.
 * @param list - The list.
 * @returns The update name handler.
 */
export const update =
  (dispatch: Function, setIsEditing: Function, list: IList) =>
  (name: string) => {
    setIsEditing(false);
    dispatch(putList({ list: { ...list, name } }));
  };
