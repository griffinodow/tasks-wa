// Libraries
import { useEffect } from "react";
import { Box, List, ListItem, Skeleton } from "@mui/material";

// State
import { updateSelectedList } from "../../../../../state/lists/actions";
import {
  selectIsListsPending,
  selectLists,
  selectSelectedList,
  selectSelectedTasks,
} from "../../../../../state/lists/selectors";
import { selectToken } from "../../../../../state/user/selectors";
import { getLists } from "../../../../../state/lists/thunks";

// Hooks
import {
  useDispatch,
  useIsInitialLoad,
  useSelector,
} from "../../../../common/hooks";

// Components
import { TaskEntry } from "./components/TaskEntry";

/**
 * The tasks component for showing tasks.
 * @returns The tasks component.
 */
export const Tasks = () => {
  const dispatch = useDispatch(),
    selectedList = useSelector(selectSelectedList),
    lists = useSelector(selectLists),
    tasks = useSelector(selectSelectedTasks),
    token = useSelector(selectToken),
    isInitialLoad = useIsInitialLoad({ selector: selectIsListsPending });

  useEffect(() => {
    if (!token) return;
    dispatch(getLists({ token }));
  }, [dispatch, token]);

  useEffect(() => {
    if (selectedList === null && lists.length > 0) {
      dispatch(updateSelectedList(lists[0].uuid));
    }
  }, [lists, dispatch, selectedList]);
  return (
    <Box
      style={{ padding: "0", overflowY: "scroll", flexGrow: 1 }}
      maxHeight="100%"
    >
      <List>
        {isInitialLoad ? (
          <>
            <ListItem>
              <Skeleton variant="rounded" width={"100%"} height={34} />
            </ListItem>
            <ListItem>
              <Skeleton variant="rounded" width={"100%"} height={34} />
            </ListItem>
            <ListItem>
              <Skeleton variant="rounded" width={"100%"} height={34} />
            </ListItem>
          </>
        ) : (
          tasks.map((task, index) => <TaskEntry key={index} task={task} />)
        )}
      </List>
    </Box>
  );
};
