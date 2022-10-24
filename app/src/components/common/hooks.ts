// Libraries
import { RefObject, useEffect, useState } from "react";
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";

// State
import type { RootState, AppDispatch } from "../../interfaces/store";
import { selectListsPendingState } from "../../state/lists/selectors";
import { ASYNC_STATES } from "../../utils/constants";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

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

/**
 * Determines if this is the initial request load of the data.
 * @param params - The input params object.
 * @param params.selector - The selector that determines if the call is pending.
 * @returns If the initial load has completed.
 */
export const useIsInitialLoad = ({ selector }: { selector: any }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasPended, setHasPended] = useState(false);
  const isListsPending = useSelector(selector);
  const state = useSelector(selectListsPendingState);

  useEffect(() => {
    if (hasLoaded) return;
    if (state === ASYNC_STATES.FULFILLED) setHasLoaded(true);
    if (!hasLoaded && !hasPended && isListsPending) setHasPended(true);
    if (!hasLoaded && hasPended && !isListsPending) setHasLoaded(true);
  }, [hasLoaded, hasPended, isListsPending, state]);

  return !hasLoaded;
};
