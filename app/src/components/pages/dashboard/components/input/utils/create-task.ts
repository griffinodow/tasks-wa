// Libraries
import { FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

// Data
import { ITask } from "../../../../../../interfaces/entities";

// State
import { postTask } from "../../../../../../state/lists/thunks";

/**
 * Returns a function to create a task.
 * @param dispatch - The redux dispatcher.
 * @param selectedList - The current active list.
 * @param tasks - The current tasks.
 * @param name - The name of the task.
 * @param setName - Sets the name of the task input.
 * @returns
 */
export const createTask =
  (
    dispatch: Function,
    selectedList: string | null,
    tasks: Array<ITask>,
    name: string,
    setName: Function
  ) =>
  (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (!name || !selectedList) return;

    dispatch(
      postTask({
        task: {
          listUuid: selectedList,
          uuid: uuidv4(),
          order: tasks.length,
          name,
          complete: false,
        },
      })
    );
    setName("");
  };
