import { FormEvent } from "react";
import { useDispatch } from "../../../../../../../common/hooks";
import { putList } from "../../../../../../../../state/lists/thunks";
import { IList } from "../../../../../../../../interfaces/interfaces";

export const useUpdateName = ({
  setIsEditing,
  list,
}: {
  setIsEditing: Function;
  list: IList;
}) => {
  const dispatch = useDispatch();

  return (event: FormEvent) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const name = data.get("name") as string;
    setIsEditing(false);
    dispatch(putList({ list: { ...list, name } }));
  };
};
