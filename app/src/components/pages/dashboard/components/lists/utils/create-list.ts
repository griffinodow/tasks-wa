// Libraries
import { v4 as uuidv4 } from "uuid";

// State
import { updateSelectedList } from "../../../../../../state/lists/actions";
import { postList } from "../../../../../../state/lists/thunks";
import { IList } from "../../../../../../interfaces/entities";

/**
 * Creates the create list handler.
 * @param dispatch - The redux dispatcher.
 * @param lists - The current lists.
 * @returns The create list handler.
 */
export const createList = (dispatch: Function, lists: Array<IList>) => {
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
