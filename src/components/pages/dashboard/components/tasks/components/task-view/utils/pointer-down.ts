// Libraries
import { PointerEvent } from "react";

/**
 * The pointer down function.
 * @param setIsDragging - The function that sets the dragging state.
 * @param setOriginalPos - The function that sets the position.
 * @returns - The pointer down handler function.
 */
export const pointerDown =
  (setIsDragging: Function, setOriginalPos: Function) =>
  (event: PointerEvent) => {
    event.stopPropagation();
    setIsDragging(true);
    setOriginalPos(event.clientY);
  };
