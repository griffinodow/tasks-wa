// Data
import { ITask } from "../../../../../../../../interfaces/entities";

// State
import { putTask } from "../../../../../../../../state/lists/thunks";

/**
 * The use update name hook.
 * @param dispatch - The redux dispatcher.
 * @param setIsEditing - The function to set if the task is being edited.
 * @param task - The task being updated.
 * @returns The function to update the task.
 */
export const updateName = (
  dispatch: Function,
  setIsEditing: Function,
  task: ITask
) => {
  return (name: string) => {
    setIsEditing(false);
    dispatch(putTask({ task: { ...task, name } }));
  };
};
