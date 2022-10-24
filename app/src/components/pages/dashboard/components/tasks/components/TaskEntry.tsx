// Libraries
import { useState } from "react";

// Data
import { ITask } from "../../../../../../interfaces/entities";

// Components
import { TaskView } from "./task-view";
import { TaskEdit } from "./task-edit";

/**
 * The task entry component.
 * @param params - The input params object.
 * @param params.task - The task.
 * @returns The task entry component.
 */
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
