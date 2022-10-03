// Libraries
import { v4 as uuidv4 } from "uuid";

// Hooks
import { useDispatch, useSelector } from "../../../../../common/hooks";

// State
import { selectLists } from "../../../../../../state/lists/selectors";
import { updateSelectedList } from "../../../../../../state/lists/actions";
import { postList } from "../../../../../../state/lists/thunks";

/**
 * The use create list hook.
 * @returns - Returns the function for creating a new list.
 */
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
};
