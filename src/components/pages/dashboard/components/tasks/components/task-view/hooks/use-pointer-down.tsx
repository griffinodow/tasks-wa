import { PointerEvent } from "react";

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
