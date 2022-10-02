import { ITask } from "../../../../../../interfaces/interfaces";
import { useState } from "react";
import { TaskView } from "./task-view";

export const TaskEntry = ({ task }: { task: ITask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return isEditing ? (
    <></>
  ) : (
    <TaskView task={task} handleToggleEditList={handleToggleIsEditing} />
  );
};
