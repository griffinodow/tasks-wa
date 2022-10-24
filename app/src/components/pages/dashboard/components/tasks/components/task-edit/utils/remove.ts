// Data
import { ITask } from "../../../../../../../../interfaces/entities";

import {
  deleteTask,
  putTask,
} from "../../../../../../../../state/lists/thunks";

/**
 * The remove task function.
 * @param dispatch - The redux dispatcher.
 * @param tasks - The tasks array.
 * @param setIsEditing - Sets if the task is being edited.
 * @param task - The task.
 * @returns - The function that removes a task.
 */
export const remove =
  (
    dispatch: Function,
    tasks: Array<ITask>,
    setIsEditing: Function,
    task: ITask
  ) =>
  () => {
    setIsEditing(false);
    const removeFromOrder = task.order;
    dispatch(deleteTask(task.uuid));

    tasks.forEach((task) => {
      if (task.order <= removeFromOrder) return;
      dispatch(
        putTask({
          task: {
            ...task,
            order: task.order - 1,
          },
        })
      );
    });
  };
