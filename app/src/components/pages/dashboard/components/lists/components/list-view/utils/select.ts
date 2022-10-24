// State
import { updateSelectedList } from "../../../../../../../../state/lists/actions";

/**
 * The create select handler function.
 * @param dispatch - The redux dispatcher.
 * @param isMobile - If mobile mode is enabled.
 * @param uuid - The uuid of the list to select.
 * @param toggleDrawer - Toggles the drawer.
 * @returns The select list handler function.
 */
export const select = (
  dispatch: Function,
  isMobile: boolean,
  uuid: string,
  toggleDrawer: Function
) => {
  return () => {
    dispatch(updateSelectedList(uuid));
    if (!isMobile) return;
    toggleDrawer();
  };
};
