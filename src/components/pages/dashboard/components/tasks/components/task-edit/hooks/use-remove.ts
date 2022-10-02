import { ITask } from "../../../../../../../../interfaces/interfaces";
import { selectSelectedTasks } from "../../../../../../../../state/lists/selectors";
import {
  deleteTask,
  putTask,
} from "../../../../../../../../state/lists/thunks";
import { useDispatch, useSelector } from "../../../../../../../common/hooks";

export const useRemove = ({
  setIsEditing,
  task,
}: {
  setIsEditing: Function;
  task: ITask;
}) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectSelectedTasks);

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
