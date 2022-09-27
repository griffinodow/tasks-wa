// Libraries
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
import { MouseEventHandler } from "react";
import { useSelector } from "react-redux";

// State
import {
  selectLists,
  selectSelectedList,
} from "../../../../state/lists/selectors";

export const AppBar = ({
  handleClose,
  handleMenu,
  toggleDrawer,
  anchorEl,
}: {
  handleClose: MouseEventHandler<HTMLLIElement>;
  handleMenu: MouseEventHandler<HTMLButtonElement>;
  toggleDrawer: MouseEventHandler<HTMLButtonElement>;
  anchorEl: HTMLElement | null;
}) => {
  const lists = useSelector(selectLists);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const selectedList = useSelector(selectSelectedList);

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
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};
