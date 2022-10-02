import { ITask } from "../../../../../../interfaces/interfaces";
import { useState } from "react";
import { TaskView } from "./task-view";
import { TaskEdit } from "./task-edit";

export const TaskEntry = ({ task }: { task: ITask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return isEditing ? (
    <TaskEdit
      task={task}
      handleToggleEditList={handleToggleIsEditing}
      setIsEditing={setIsEditing}
    />
  ) : (
    <TaskView
      task={task}
      handleToggleEditList={handleToggleIsEditing}
      setIsEditing={setIsEditing}
    />
  );
};
