// Hooks
import { useDispatch } from "../../../../../../../common/hooks";

// State
import { deleteList } from "../../../../../../../../state/lists/thunks";
import { updateSelectedList } from "../../../../../../../../state/lists/actions";

/**
 * The use delete hook.
 * @param data - The input parameter object.
 * @param data.setIsEditing - The function that sets if the list is being edited.
 * @param data.uuid - The uuid of the list.
 * @returns - The delete function.
 */
export const useDelete = ({
  setIsEditing,
  uuid,
}: {
  setIsEditing: Function;
  uuid: string;
}) => {
  const dispatch = useDispatch();
  return () => {
    setIsEditing(false);
    dispatch(deleteList(uuid));
    dispatch(updateSelectedList(null));
  };
};
