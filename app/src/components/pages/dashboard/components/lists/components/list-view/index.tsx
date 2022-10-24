// Libraries
import {
  IconButton,
  ListItemButton,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import { MouseEventHandler, MouseEvent } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { select } from "./utils/select";
import { IList } from "../../../../../../../interfaces/entities";
import { useDispatch } from "../../../../../../common/hooks";

export const ListRead = ({
  list,
  toggleDrawer,
  handleToggleEditList,
  selected,
}: {
  list: IList;
  toggleDrawer: Function;
  handleToggleEditList: MouseEventHandler<HTMLElement>;
  selected: boolean;
}) => {
  const dispatch = useDispatch(),
    theme = useTheme(),
    isMobile = useMediaQuery(theme.breakpoints.down("md")),
    selectList = select(dispatch, isMobile, list.uuid, toggleDrawer);

  const handleSelect = (_event: MouseEvent<HTMLAnchorElement>) => selectList();

  return (
    <ListItemButton href={""} onClick={handleSelect} selected={selected}>
      <ListItemText
        data-testid={`${list.name} list name`}
        primary={list.name}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="edit"
          onClick={handleToggleEditList}
          data-testid={`${list.name} edit button`}
        >
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItemButton>
  );
};
