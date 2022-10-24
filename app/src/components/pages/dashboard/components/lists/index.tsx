// Libraries
import { List, Box, IconButton, Skeleton, ListItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Hooks
import {
  useDispatch,
  useIsInitialLoad,
  useSelector,
} from "../../../../common/hooks";
import { createList } from "./utils/create-list";

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
    dispatch = useDispatch(),
    selectedList = useSelector(selectSelectedList),
    handleCreateList = createList(dispatch, lists),
    isInitialLoad = useIsInitialLoad({ selector: selectIsListsPending });

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      data-testid="lists-panel"
    >
      <Box>
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
        <IconButton
          aria-label="delete"
          onClick={handleCreateList}
          data-testid="add-new-list"
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
