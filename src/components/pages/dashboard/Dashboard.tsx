import { Container, List, ListItem, ListItemText, IconButton, ListItemButton, Checkbox, ListItemIcon } from "@mui/material";
import { useEffect } from "react";
import { updateSelectedList } from "../../../state/lists/actions";
import {
  selectLists,
  selectSelectedList,
  selectSelectedTasks
} from "../../../state/lists/selectors";
import { selectToken } from "../../../state/user/selectors";
import { getLists } from "../../../state/lists/thunks";
import { useDispatch, useSelector } from "../../common/hooks";
import { Layout } from "./components/Layout";
import EditIcon from "@mui/icons-material/Edit";

export const Dashboard = () => {
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
    <Layout>
      <Container maxWidth={false} style={{ padding: '0' }}>
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index} secondaryAction={
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
               
            }disablePadding>
              <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={task.complete}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={task.name} />
            </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </Layout>
  );
};
