// Libraries
import { List, Box, IconButton, Skeleton, ListItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Hooks
import { useSelector } from "../../../../common/hooks";
import { useCreateList } from "./hooks/use-create-list";

// State
import {
  selectLists,
  selectSelectedList,
  selectIsListsPending,
} from "../../../../../state/lists/selectors";

// Components
import { ListEntry } from "./components/ListEntry";

/**
 * The lists component.
 * @param params - The params object.
 * @param params.toggleDrawer - The toggle drawer function.
 * @returns - The lists component.
 */
export const Lists = ({ toggleDrawer }: { toggleDrawer: Function }) => {
  const lists = useSelector(selectLists),
    selectedList = useSelector(selectSelectedList),
    createList = useCreateList(),
    isListsPending = useSelector(selectIsListsPending);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      <Box>
        <List>
          {isListsPending ? (
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
            lists.map((list, index) => (
              <ListEntry
                key={index}
                list={list}
                toggleDrawer={toggleDrawer}
                selected={list.uuid === selectedList}
              />
            ))
          )}
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
