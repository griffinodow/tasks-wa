import { Box, List } from "@mui/material";
import { useEffect } from "react";
import { updateSelectedList } from "../../../../../state/lists/actions";
import {
  selectLists,
  selectSelectedList,
  selectSelectedTasks,
} from "../../../../../state/lists/selectors";
import { selectToken } from "../../../../../state/user/selectors";
import { getLists } from "../../../../../state/lists/thunks";
import { useDispatch, useSelector } from "../../../../common/hooks";
import { TaskEntry } from "./components/TaskEntry";

export const Tasks = () => {
  const dispatch = useDispatch();
  const selectedList = useSelector(selectSelectedList);
  const lists = useSelector(selectLists);
  const tasks = useSelector(selectSelectedTasks);
  const token = useSelector(selectToken);

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
        {tasks.map((task, index) => (
          <TaskEntry key={index} task={task} />
        ))}
      </List>
    </Box>
  );
};
