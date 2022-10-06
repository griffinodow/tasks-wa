// Libraries
import {
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Data
import { ITask } from "../../../../../../../interfaces/entities";

// Hooks
import {
  useClickOutside,
  useDispatch,
  useSelector,
} from "../../../../../../common/hooks";
import { updateName, remove } from "./utils";
import { selectSelectedTasks } from "../../../../../../../state/lists/selectors";
import { updateComplete } from "../../utils/update-complete";

export const TaskEdit = ({
  task,
  handleToggleEditList,
  setIsEditing,
}: {
  task: ITask;
  handleToggleEditList: MouseEventHandler<HTMLElement>;
  setIsEditing: Function;
}) => {
  const ref = useRef<HTMLLIElement>(null),
    theme = useTheme(),
    dispatch = useDispatch(),
    tasks = useSelector(selectSelectedTasks),
    [value, setValue] = useState(task.name),
    handleUpdateName = updateName(dispatch, setIsEditing, task),
    handleRemove = remove(dispatch, tasks, setIsEditing, task),
    handleUpdateComplete = updateComplete(dispatch, task, tasks, setIsEditing);

  useClickOutside(ref, handleToggleEditList);

  const handleNameSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleUpdateName(value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const inputCssProperties = {
    font: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "1rem",
    fontWeight: 400,
    background: "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: `1px solid ${theme.palette.text}`,
    outline: "none",
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
    padding: "4px 0 2px 0",
    width: "100%",
  };

  return (
    <ListItem
      ref={ref}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="edit"
          onClick={handleRemove}
          data-testid={`${task.name} delete button`}
        >
          <DeleteIcon />
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
            onClick={handleUpdateComplete}
          />
        </ListItemIcon>
        <form
          autoComplete="off"
          noValidate
          onSubmit={handleNameSubmit}
          style={{ width: "100%" }}
        >
          <input
            id="email"
            type="text"
            name="name"
            aria-label="Change task name"
            data-testid={`${task.name} input`}
            required
            value={value}
            style={inputCssProperties}
            onChange={handleChange}
          />
        </form>
      </ListItemButton>
    </ListItem>
  );
};
