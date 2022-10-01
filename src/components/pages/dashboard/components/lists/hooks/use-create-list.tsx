import { useDispatch } from "../../../../../common/hooks";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "../../../../../common/hooks";
import { selectLists } from "../../../../../../state/lists/selectors";
import { updateSelectedList } from "../../../../../../state/lists/actions";
import { postList } from "../../../../../../state/lists/thunks";

export const useCreateList = () => {
  const dispatch = useDispatch(),
    lists = useSelector(selectLists);
  return () => {
    const uuid = uuidv4();
    dispatch(
      postList({
        list: {
          uuid,
          name: "New List",
          order: lists.length,
          tasks: [],
        },
      })
    );
    dispatch(updateSelectedList(uuid));
  };
}