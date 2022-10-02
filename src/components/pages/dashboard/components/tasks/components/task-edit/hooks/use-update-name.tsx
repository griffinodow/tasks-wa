import { FormEvent } from "react";
import { useDispatch } from "../../../../../../../common/hooks";
import { putTask } from "../../../../../../../../state/lists/thunks";
import { ITask } from "../../../../../../../../interfaces/interfaces";

export const useUpdateName = ({
  setIsEditing,
  task,
}: {
  setIsEditing: Function;
  task: ITask;
}) => {
  const dispatch = useDispatch();

  return (event: FormEvent) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const name = data.get("name") as string;
    setIsEditing(false);
    dispatch(putTask({ task: { ...task, name } }));
  };
};
