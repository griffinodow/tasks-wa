// Libraries
import { PointerEvent, Ref } from "react";

/**
 * The pointer move hook.
 * @param params - The pointer move hook.
 * @param params.setIsMoving - The function that sets if the pointer is moving.
 * @param params.setCurrentPos - The function that sets the current position of the pointer.
 * @param params.isDragging - The function that sets the dragging state.
 * @param params.ref - The reference element being dragged.
 * @param params.originalPos - The original position of the dragged element.
 * @returns
 */
export const usePointerMove =
  ({
    setIsMoving,
    setCurrentPos,
    isDragging,
    ref,
    originalPos,
  }: {
    setIsMoving: Function;
    setCurrentPos: Function;
    isDragging: boolean;
    ref: Ref<HTMLDivElement>;
    originalPos: number;
  }) =>
  (event: PointerEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isDragging || !ref) return;
    setIsMoving(true);
    setCurrentPos(event.clientY - originalPos);
  };
