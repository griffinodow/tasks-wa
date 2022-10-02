import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { ITask } from "../../../../../../../interfaces/interfaces";
import { MouseEventHandler } from "react";
import { useUpdateComplete } from "../../../lists/components/hooks/use-update-complete";

export const TaskEdit = ({
  task,
  handleToggleEditList,
}: {
  task: ITask;
  handleToggleEditList: MouseEventHandler<HTMLElement>;
}) => {
  const updateComplete = useUpdateComplete({ task });

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="edit" onClick={handleToggleEditList}>
          <EditIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={task.complete}
            tabIndex={-1}
            disableRipple
            onClick={updateComplete}
          />
        </ListItemIcon>
        <ListItemText primary={task.name} />
      </ListItemButton>
    </ListItem>
  );
};
