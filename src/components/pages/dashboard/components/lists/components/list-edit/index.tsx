// Libraries
import {
  MouseEventHandler,
  useRef,
  ChangeEvent,
  useState,
  FormEvent,
} from "react";
import {
  IconButton,
  ListItemButton,
  ListItemSecondaryAction,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Data
import { IList } from "../../../../../../../interfaces/entities";

// Hooks
import { useClickOutside, useDispatch } from "../../../../../../common/hooks";
import { update, remove } from "./utils";

/**
 * The list edit component.
 * @param data - The input parameters object.
 * @param data.setIsEditing - The function that sets if the list is being edited.
 * @param data.handleToggleEditList - The function that toggles if the list is being edited.
 * @param data.selected - If the list is selected.
 * @param data.list - The list.
 * @returns - The list edit component.
 */
export const ListEdit = ({
  setIsEditing,
  handleToggleEditList,
  selected,
  list,
}: {
  setIsEditing: Function;
  handleToggleEditList: MouseEventHandler<HTMLElement>;
  selected: boolean;
  list: IList;
}) => {
  const ref = useRef<HTMLDivElement>(null),
    theme = useTheme(),
    dispatch = useDispatch(),
    [value, setValue] = useState(list.name),
    updateName = update(dispatch, setIsEditing, list),
    handleRemove = remove(dispatch, setIsEditing, list.uuid);

  useClickOutside(ref, handleToggleEditList);

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
  };

  const handleUpdateName = (event: FormEvent) => {
    event.preventDefault();
    updateName(value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div ref={ref}>
      <ListItemButton href={""} selected={selected}>
        <form autoComplete="off" noValidate onSubmit={handleUpdateName}>
          <input
            id="email"
            type="text"
            name="name"
            aria-label="Change list name"
            data-testid={`${list.name} input`}
            required
            value={value}
            style={inputCssProperties}
            onChange={handleChange}
          />
        </form>
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label={`${list.name} edit button`}
            onClick={handleRemove}
            data-testid={`${list.name} delete button`}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItemButton>
    </div>
  );
};
