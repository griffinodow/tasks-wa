// Data
import { ITask } from "../../../../../../../../interfaces/entities";

// State
import { selectSelectedTasks } from "../../../../../../../../state/lists/selectors";
import {
  deleteTask,
  putTask,
} from "../../../../../../../../state/lists/thunks";

// Hooks
import { useDispatch, useSelector } from "../../../../../../../common/hooks";

/**
 * The use remove hook.
 * @param params - The params object.
 * @returns - The function that removes a task.
 */
export const useRemove = ({
  setIsEditing,
  task,
}: {
  setIsEditing: Function;
  task: ITask;
}) => {
  const dispatch = useDispatch(),
    tasks = useSelector(selectSelectedTasks);

  return () => {
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
};
