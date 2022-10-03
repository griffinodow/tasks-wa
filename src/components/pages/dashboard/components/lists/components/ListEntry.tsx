// Libraries
import { useState } from "react";

// State
import { ListRead } from "./list-view";
import { ListEdit } from "./list-edit";

// Data
import { IList } from "../../../../../../interfaces/entities";

/**
 * The list entry component.
 * @param params - The input params object.
 * @returns The list entry component.
 */
export const ListEntry = ({
  list,
  toggleDrawer,
  selected,
}: {
  list: IList;
  toggleDrawer: Function;
  selected: boolean;
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
