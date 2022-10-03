// Libraries
import { MouseEventHandler, useRef, ChangeEvent, useState } from "react";
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
import { useClickOutside } from "../../../../../../common/hooks";
import { useUpdateName, useDelete } from "./hooks";

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
    [value, setValue] = useState(list.name),
    updateName = useUpdateName({ setIsEditing, list }),
    deleteList = useDelete({ setIsEditing, uuid: list.uuid });

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div ref={ref}>
      <ListItemButton href={""} selected={selected}>
        <form autoComplete="off" noValidate onSubmit={updateName}>
          <input
            id="email"
            type="text"
            name="name"
            aria-label="Change list name"
            required
            value={value}
            style={inputCssProperties}
            onChange={handleChange}
          />
        </form>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit" onClick={deleteList}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItemButton>
    </div>
  );
};
