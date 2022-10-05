// Libraries
import { MouseEventHandler, useRef, useState } from "react";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

// Data
import { ITask } from "../../../../../../../interfaces/entities";

import { pointerDown, pointerMove, pointerUp } from "./utils";

// Utils
import { updateComplete } from "../../utils/update-complete";
import { useDispatch, useSelector } from "../../../../../../common/hooks";
import { selectSelectedTasks } from "../../../../../../../state/lists/selectors";

/**
 * The task view component.
 * @param params - The input params object.
 * @param params.task - The task.
 * @param params.handleToggleEditList - The function to toggle editing the list.
 * @param params.setIsEditing - The function to set the editing state.
 * @returns - The task view component.
 */
export const TaskView = ({
  task,
  handleToggleEditList,
  setIsEditing,
}: {
  task: ITask;
  handleToggleEditList: MouseEventHandler<HTMLElement>;
  setIsEditing: Function;
}) => {
  const ref = useRef<HTMLDivElement>(null),
    dispatch = useDispatch(),
    tasks = useSelector(selectSelectedTasks),
    [isDragging, setIsDragging] = useState(false),
    [isMoving, setIsMoving] = useState(false),
    [originalPos, setOriginalPos] = useState(0),
    [currentPos, setCurrentPos] = useState(0),
    handlePointerDown = pointerDown(setIsDragging, setOriginalPos),
    handlePointerMove = pointerMove(
      setIsMoving,
      setCurrentPos,
      isDragging,
      ref,
      originalPos
    ),
    handlePointerUp = pointerUp(
      dispatch,
      tasks,
      currentPos,
      task.order,
      setOriginalPos,
      setCurrentPos,
      setIsDragging,
      setIsMoving,
      task.uuid
    ),
    handleUpdateComplete = updateComplete(dispatch, task, tasks, setIsEditing);

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="edit"
          onClick={handleToggleEditList}
          data-testid={`${task.name} edit button`}
        >
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
            onClick={handleUpdateComplete}
          />
        </ListItemIcon>
        <ListItemText
          primary={task.name}
          style={{
            textDecoration: task.complete ? "line-through" : "none",
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};
