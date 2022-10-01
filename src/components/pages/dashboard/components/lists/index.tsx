import { List, useMediaQuery, useTheme, Box, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "../../../../common/hooks";
import {
  selectLists,
  selectSelectedList,
} from "../../../../../state/lists/selectors";
import { ListEntry } from "./components/ListEntry";
import {
  putList,
  deleteList,
} from "../../../../../state/lists/thunks";
import { updateSelectedList } from "../../../../../state/lists/actions";
import { IList } from "../../../../../interfaces/interfaces";
import { MouseEvent } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useCreateList } from "./hooks/use-create-list";

export const Lists = ({ toggleDrawer }: { toggleDrawer: Function }) => {
  const dispatch = useDispatch(),
    lists = useSelector(selectLists),
    selectedList = useSelector(selectSelectedList),
    theme = useTheme(),
    isMobile = useMediaQuery(theme.breakpoints.down("md")),
    createList = useCreateList();

  const handleSelect =
    (uuid: string) => (_event: MouseEvent<HTMLAnchorElement>) => {
      dispatch(updateSelectedList(uuid));
      if (!isMobile) return;
      toggleDrawer();
    };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      <Box>
        <List>
          {lists.map((list, index) => (
            <ListEntry
              key={index}
              list={list}
              toggleDrawer={toggleDrawer}
              selected={list.uuid === selectedList}
              select={handleSelect(list.uuid)}
              update={(list: IList) => {
                dispatch(putList({ list }));
              }}
              remove={(id: string) => {
                dispatch(deleteList(id));
                dispatch(updateSelectedList(null));
              }}
            />
          ))}
        </List>
      </Box>
      <Box padding="1rem">
        <IconButton aria-label="delete" onClick={createList}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
