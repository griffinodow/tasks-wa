// Libraries
import { FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

// State
import {
  selectSelectedList,
  selectSelectedTasks,
} from "../../../../../../state/lists/selectors";
import { postTask } from "../../../../../../state/lists/thunks";

// Hooks
import { useDispatch, useSelector } from "../../../../../common/hooks";

/**
 * The create task hook.
 * @param data - Data parameters.
 * @param data.setValue - The function to set the task name.
 * @returns - The create task function.
 */
export const useCreateTask = ({ setValue }: { setValue: Function }) => {
  const dispatch = useDispatch(),
    activeList = useSelector(selectSelectedList),
    tasks = useSelector(selectSelectedTasks);

  return (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement,
      data = new FormData(form),
      name = data.get("name") as string;

    if (!name || !activeList) return;

    dispatch(
      postTask({
        task: {
          listUuid: activeList,
          uuid: uuidv4(),
          order: tasks.length,
          name: name,
          complete: false,
        },
      })
    );
    setValue("");
  };
};
