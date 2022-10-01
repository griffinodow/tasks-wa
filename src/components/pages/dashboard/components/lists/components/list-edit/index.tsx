// Libraries
import {
  IconButton,
  ListItemButton,
  ListItemSecondaryAction,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useClickOutside } from "../../../../../../common/hooks/use-click-outside";
import {
  MouseEventHandler,
  useRef,
  ChangeEvent,
  useState,
} from "react";
import { IList } from "../../../../../../../interfaces/interfaces";
import { useUpdateName } from "./hooks/use-update-name";
import { useDelete } from "./hooks/use-delete";

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
            style={{
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
            }}
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
