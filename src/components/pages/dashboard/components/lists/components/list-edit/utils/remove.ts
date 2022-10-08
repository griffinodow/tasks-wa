// State
import { deleteList } from "../../../../../../../../state/lists/thunks";
import { updateSelectedList } from "../../../../../../../../state/lists/actions";

/**
 * Creates the remove list handler.
 * @param dispatch - The redux dispatcher.
 * @param setIsEditing - Sets if the list is being edited.
 * @param uuid - The uuid of the list.
 * @returns The remove list function.
 */
export const remove = (
  dispatch: Function,
  setIsEditing: Function,
  uuid: string
) => () => {
  setIsEditing(false);
  dispatch(deleteList(uuid));
  dispatch(updateSelectedList(null));
};
