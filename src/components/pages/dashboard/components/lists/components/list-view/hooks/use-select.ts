// Libraries
import { MouseEvent } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

// Hooks
import { useDispatch } from "../../../../../../../common/hooks";

// State
import { updateSelectedList } from "../../../../../../../../state/lists/actions";

export const useSelect = ({
  uuid,
  toggleDrawer,
}: {
  uuid: string;
  toggleDrawer: Function;
}) => {
  const dispatch = useDispatch(),
    theme = useTheme(),
    isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (_event: MouseEvent<HTMLAnchorElement>) => {
    dispatch(updateSelectedList(uuid));
    if (!isMobile) return;
    toggleDrawer();
  };
};
