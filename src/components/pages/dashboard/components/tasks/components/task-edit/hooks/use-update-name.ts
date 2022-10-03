// Libraries
import { FormEvent } from "react";

// Data
import { ITask } from "../../../../../../../../interfaces/entities";

// Hooks
import { useDispatch } from "../../../../../../../common/hooks";

// State
import { putTask } from "../../../../../../../../state/lists/thunks";

/**
 * The use update name hook.
 * @param params - The params object.
 * @param params.setIsEditing - The function to set if the task is being edited.
 * @param params.task - The task being updated.
 * @returns - The function to update the task.
 */
export const useUpdateName = ({
  setIsEditing,
  task,
}: {
  setIsEditing: Function;
  task: ITask;
}) => {
  const dispatch = useDispatch();

  return (event: FormEvent) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const name = data.get("name") as string;
    setIsEditing(false);
    dispatch(putTask({ task: { ...task, name } }));
  };
};
