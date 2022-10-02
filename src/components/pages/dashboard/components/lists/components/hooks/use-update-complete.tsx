import { ITask } from "../../../../../../../interfaces/interfaces";
import { selectSelectedTasks } from "../../../../../../../state/lists/selectors";
import { putTask, reorderTasks } from "../../../../../../../state/lists/thunks";
import { useDispatch, useSelector } from "../../../../../../common/hooks";

export const useUpdateComplete = ({ task }: { task: ITask }) => {
  const dispatch = useDispatch(),
    tasks = useSelector(selectSelectedTasks);

  console.log(tasks);

  return () => {
    dispatch(
      putTask({
        task: {
          ...task,
          complete: !task.complete,
        },
      })
    );
    if (task.complete) return;
    const swapUuid = tasks.reduce((accu: ITask, task: ITask) => {
      if (!accu) return task;
      if (task.order > accu.order) return task;
      return accu;
    })?.uuid;
    dispatch(reorderTasks({ uuidA: task.uuid, uuidB: swapUuid }));
  };
};
