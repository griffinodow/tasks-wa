// Libraries
import { RefObject, useEffect } from "react";

/**
 * The click outside hook for detecting when someone clicks outside the component.
 * @param ref - The reference to the component.
 * @param handler - The function to trigger when clicking outside of the component.
 */
export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: Function
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target as HTMLInputElement)
      ) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
