// Libraries
import { PointerEvent } from "react";

// Data
import { ITask } from "../../../../../../../../interfaces/entities";

// State
import { selectSelectedTasks } from "../../../../../../../../state/lists/selectors";
import { reorderTasks } from "../../../../../../../../state/lists/thunks";

// Hooks
import { useDispatch, useSelector } from "../../../../../../../common/hooks";

/**
 * The pointer up hook.
 * @param params - The params object.
 * @param params.currentPos - The current position of the pointer.
 * @param params.order - The order of the task.
 * @param params.setOriginalPos - The function to set the original pos state.
 * @param params.setCurrentPos - The function to set the current pos state.
 * @param param.setIsDraggin - The function to set the dragging state.
 * @param param.setIsMoving - The function to set the moving state.
 * @param param.uuid - The uuid of the task.
 * @returns
 */
export const usePointerUp = ({
  currentPos,
  order,
  setOriginalPos,
  setCurrentPos,
  setIsDragging,
  setIsMoving,
  uuid,
}: {
  currentPos: number;
  order: number;
  setOriginalPos: Function;
  setCurrentPos: Function;
  setIsDragging: Function;
  setIsMoving: Function;
  uuid: string;
}) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectSelectedTasks);
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
