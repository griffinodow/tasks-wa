// Libraries
import { PointerEvent } from "react";

/**
 * The pointer down hook.
 * @param params - The params object.
 * @param params.setIsDragging - The function that sets the dragging state.
 * @param params.setOriginalPos - The function that sets the position.
 * @returns - The pointer down handler function.
 */
export const usePointerDown =
  ({
    setIsDragging,
    setOriginalPos,
  }: {
    setIsDragging: Function;
    setOriginalPos: Function;
  }) =>
  (event: PointerEvent) => {
    event.stopPropagation();
    setIsDragging(true);
    setOriginalPos(event.clientY);
  };
