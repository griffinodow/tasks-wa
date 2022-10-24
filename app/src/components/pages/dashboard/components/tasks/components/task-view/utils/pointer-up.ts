// Libraries
import { PointerEvent } from "react";

// Data
import { ITask } from "../../../../../../../../interfaces/entities";

// State
import { reorderTasks } from "../../../../../../../../state/lists/thunks";

/**
 * The pointer up function
 * @param dispatch - The redux dispatcher.
 * @param tasks - The array of tasks.
 * @param currentPos - The current position of the pointer.
 * @param order - The order of the task.
 * @param setOriginalPos - The function to set the original pos state.
 * @param setCurrentPos - The function to set the current pos state.
 * @param setIsDraggin - The function to set the dragging state.
 * @param setIsMoving - The function to set the moving state.
 * @param uuid - The uuid of the task.
 * @returns
 */
export const pointerUp = (
  dispatch: Function,
  tasks: Array<ITask>,
  currentPos: number,
  order: number,
  setOriginalPos: Function,
  setCurrentPos: Function,
  setIsDragging: Function,
  setIsMoving: Function,
  uuid: string
) => {
  return (event: PointerEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const units = 50;
    const offset = Math.trunc(currentPos / units);

    let swapOrder = order + offset;
    if (swapOrder < 0) swapOrder = 0;
    if (swapOrder >= tasks.length) swapOrder = tasks.length - 1;

    const swapUuid = tasks.find(
      (task: ITask) => task.order === swapOrder
    )?.uuid;
    setOriginalPos(0);
    setCurrentPos(0);
    setIsDragging(false);
    setIsMoving(false);

    if (!swapUuid || uuid === swapUuid) return;
    dispatch(reorderTasks({ uuidA: uuid, uuidB: swapUuid }));
  };
};
