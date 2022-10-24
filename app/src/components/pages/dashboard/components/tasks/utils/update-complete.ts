import { ITask } from "../../../../../../interfaces/entities";
import { putTask, reorderTasks } from "../../../../../../state/lists/thunks";

export const updateComplete =
  (
    dispatch: Function,
    task: ITask,
    tasks: Array<ITask>,
    setIsEditing: Function
  ) =>
  () => {
    setIsEditing(false);
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
