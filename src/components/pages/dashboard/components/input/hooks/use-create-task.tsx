import { FormEvent } from "react";
import {
  selectSelectedList,
  selectSelectedTasks,
} from "../../../../../../state/lists/selectors";
import { postTask } from "../../../../../../state/lists/thunks";
import { useDispatch, useSelector } from "../../../../../common/hooks";
import { v4 as uuidv4 } from "uuid";

export const useCreateTask = ({ setValue }: { setValue: Function }) => {
  const dispatch = useDispatch(),
    activeList = useSelector(selectSelectedList),
    tasks = useSelector(selectSelectedTasks);

  return (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name") as string;
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
