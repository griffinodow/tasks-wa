import { ListRead } from "./list-view";
import { useState, MouseEventHandler } from "react";
import { ListEdit } from "./list-edit";
import { IList } from "../../../../../../interfaces/interfaces";

export const ListEntry = ({
  list,
  toggleDrawer,
  selected,
}: {
  list: IList;
  toggleDrawer: Function;
  selected: boolean;
  select: MouseEventHandler<HTMLAnchorElement>;
  update: Function;
  remove: Function;
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return isEditing ? (
    <ListEdit
      setIsEditing={setIsEditing}
      handleToggleEditList={handleToggleIsEditing}
      selected={selected}
      list={list}
    />
  ) : (
    <ListRead
      toggleDrawer={toggleDrawer}
      handleToggleEditList={handleToggleIsEditing}
      selected={selected}
      list={list}
    />
  );
};
