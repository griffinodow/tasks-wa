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
export const useCreateTask = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Function;
}) => {
  const dispatch = useDispatch(),
    activeList = useSelector(selectSelectedList),
    tasks = useSelector(selectSelectedTasks);

  return (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value || !activeList) return;

    dispatch(
      postTask({
        task: {
          listUuid: activeList,
          uuid: uuidv4(),
          order: tasks.length,
          name: value,
          complete: false,
        },
      })
    );
    setValue("");
  };
};
