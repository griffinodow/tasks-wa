// Libraries
import {
  IconButton,
  ListItemButton,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import { MouseEventHandler } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useSelect } from "./hooks/use-select";
import { IList } from "../../../../../../../interfaces/entities";

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
  const handleSelect = useSelect({ uuid: list.uuid, toggleDrawer });

  return (
    <ListItemButton href={""} onClick={handleSelect} selected={selected}>
      <ListItemText primary={list.name} />
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
