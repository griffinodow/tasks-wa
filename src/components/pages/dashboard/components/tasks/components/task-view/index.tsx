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
import { MouseEventHandler, useRef, useState } from "react";
import { useUpdateComplete } from "../../../lists/components/hooks/use-update-complete";
import { usePointerDown } from "./hooks/use-pointer-down";
import { usePointerMove } from "./hooks/use-pointer-move";
import { usePointerUp } from "./hooks/use-pointer-up";

export const TaskView = ({
  task,
  handleToggleEditList,
}: {
  task: ITask;
  handleToggleEditList: MouseEventHandler<HTMLElement>;
}) => {
  const updateComplete = useUpdateComplete({ task }),
    ref = useRef<HTMLDivElement>(null),
    [isDragging, setIsDragging] = useState(false),
    [isMoving, setIsMoving] = useState(false),
    [originalPos, setOriginalPos] = useState(0),
    [currentPos, setCurrentPos] = useState(0),
    handlePointerDown = usePointerDown({ setIsDragging, setOriginalPos }),
    handlePointerMove = usePointerMove({
      setIsMoving,
      setCurrentPos,
      originalPos,
      ref,
      isDragging,
    }),
    handlePointerUp = usePointerUp({
      currentPos,
      order: task.order,
      setOriginalPos,
      setCurrentPos,
      setIsDragging,
      setIsMoving,
      uuid: task.uuid,
    });

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="edit" onClick={handleToggleEditList}>
          <EditIcon />
        </IconButton>
      }
      disablePadding
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        transform: `translateY(${currentPos}px)`,
        zIndex: isDragging ? 4 : 1,
        opacity: isMoving ? 0.5 : 1.0,
      }}
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
