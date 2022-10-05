// Libraries
import { PointerEvent, Ref } from "react";

/**
 * The pointer move hook.
 * @param setIsMoving - The function that sets if the pointer is moving.
 * @param setCurrentPos - The function that sets the current position of the pointer.
 * @param isDragging - The function that sets the dragging state.
 * @param ref - The reference element being dragged.
 * @param originalPos - The original position of the dragged element.
 * @returns
 */
export const pointerMove =
  (
    setIsMoving: Function,
    setCurrentPos: Function,
    isDragging: boolean,
    ref: Ref<HTMLDivElement>,
    originalPos: number
  ) =>
  (event: PointerEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isDragging || !ref) return;
    setIsMoving(true);
    setCurrentPos(event.clientY - originalPos);
  };
