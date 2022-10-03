// Libraries
import { MouseEvent, MouseEventHandler } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  AppBar as MuiAppBar,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// State
import { logout } from "../../../../state/user/actions";
import {
  selectLists,
  selectSelectedList,
} from "../../../../state/lists/selectors";

// Hooks
import { useDispatch } from "../../../common/hooks";

/**
 * The app bar component.
 * @param params - The input params object.
 * @param params.handleClose - Handles closing the menu.
 * @param params.handleMenu - Handles the menu.
 * @param params.toggleDrawer - Handles toggling the drawer.
 * @param params.anchorEl - The anchor element.
 * @returns - The app bar component.
 */
export const AppBar = ({
  handleClose,
  handleMenu,
  toggleDrawer,
  anchorEl,
}: {
  handleClose: Function;
  handleMenu: MouseEventHandler<HTMLButtonElement>;
  toggleDrawer: MouseEventHandler<HTMLButtonElement>;
  anchorEl: HTMLElement | null;
}) => {
  const lists = useSelector(selectLists),
    theme = useTheme(),
    isMobile = useMediaQuery(theme.breakpoints.down("md")),
    selectedList = useSelector(selectSelectedList),
    dispatch = useDispatch();

  const handleLogout = (event: MouseEvent) => {
    console.log("logout");
    dispatch(logout());
    handleClose();
  };

  return (
    <MuiAppBar
      position="relative"
      style={{ zIndex: 2 }}
      elevation={1}
      color="inherit"
    >
      <Toolbar>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
            disabled={isMobile ? false : true}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            position="fixed"
            variant="h6"
            align="center"
            margin="0 auto"
            textAlign="center"
            width="100vw"
            left={0}
            right={0}
            sx={{ pointerEvents: "none" }}
          >
            {lists.find((list) => list.uuid === selectedList)?.name ??
              "Dashboard"}
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{
                padding: "0",
              }}
            >
              <Avatar>GD</Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose as MouseEventHandler}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};
