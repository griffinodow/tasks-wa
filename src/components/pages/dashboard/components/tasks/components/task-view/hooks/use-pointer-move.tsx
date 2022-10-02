import { PointerEvent, Ref } from "react";

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
