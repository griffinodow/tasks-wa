import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "../../../common/hooks";
import {
  selectLists,
  selectSelectedList,
} from "../../../../state/lists/selectors";
import { updateSelectedList } from "../../../../state/lists/actions";
import EditIcon from "@mui/icons-material/Edit";

export const Lists = ({ toggleDrawer }: { toggleDrawer: Function }) => {
  const dispatch = useDispatch(),
    lists = useSelector(selectLists),
    selectedList = useSelector(selectSelectedList),
    theme = useTheme(),
    isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <List>
      {lists.map((list, index) => (
        <ListItem
          button
          key={index}
          secondaryAction={
            <IconButton edge="end" aria-label="edit">
              <EditIcon />
            </IconButton>
          }
          onClick={() => {
            dispatch(updateSelectedList(list.uuid));
            if (!isMobile) return;
            toggleDrawer();
          }}
          selected={list.uuid === selectedList}
        >
          <ListItemText primary={list.name} />
        </ListItem>
      ))}
    </List>
  );
};
