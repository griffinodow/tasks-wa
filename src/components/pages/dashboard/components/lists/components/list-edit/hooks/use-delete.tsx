import { useDispatch } from "../../../../../../../common/hooks";
import { deleteList } from "../../../../../../../../state/lists/thunks";
import { updateSelectedList } from "../../../../../../../../state/lists/actions";

export const useDelete = ({
  setIsEditing,
  uuid,
}: {
  setIsEditing: Function;
  uuid: string;
}) => {
  const dispatch = useDispatch();
  return () => {
    setIsEditing(false);
    dispatch(deleteList(uuid));
    dispatch(updateSelectedList(null));
  };
};
