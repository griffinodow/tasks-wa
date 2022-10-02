import { PointerEvent } from "react";
import { ITask } from "../../../../../../../../interfaces/interfaces";
import { selectSelectedTasks } from "../../../../../../../../state/lists/selectors";
import { reorderTasks } from "../../../../../../../../state/lists/thunks";
import { useDispatch, useSelector } from "../../../../../../../common/hooks";

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
