// Libraries
import { FormEvent } from "react";

// Data
import { IList } from "../../../../../../../../interfaces/entities";

// Hooks
import { useDispatch } from "../../../../../../../common/hooks";

// State
import { putList } from "../../../../../../../../state/lists/thunks";

/**
 * The use update name hook.
 * @param data - The input parameters object.
 * @param data.setIsEditing - The function that sets if the list is being edited.
 * @param data.list - The list to update.
 * @returns - The update name function.
 */
export const useUpdateName = ({
  setIsEditing,
  list,
}: {
  setIsEditing: Function;
  list: IList;
}) => {
  const dispatch = useDispatch();

  return (event: FormEvent) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement),
      name = data.get("name") as string;

    setIsEditing(false);
    dispatch(putList({ list: { ...list, name } }));
  };
};
