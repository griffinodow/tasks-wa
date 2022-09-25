import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  AppBar,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
} from "@mui/material";
import {
  ReactNode,
  KeyboardEvent,
  MouseEvent,
  useState,
  useEffect,
} from "react";
import { Lists } from "./Lists";
import MenuIcon from "@mui/icons-material/Menu";
import {
  selectLists,
  selectSelectedList,
} from "../../../../state/lists/selectors";
import { useSelector } from "../../../common/hooks";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const selectedList = useSelector(selectSelectedList);
  const lists = useSelector(selectLists);
  const drawerWidth = drawerOpen ? "240px" : "0";

  useEffect(() => {
    if (isMobile) {
      setDrawerOpen(false);
    } else {
      setDrawerOpen(true);
    }
  }, [setDrawerOpen, isMobile]);

  const toggleDrawer = (event: KeyboardEvent | MouseEvent) => {
    if (
      event?.type === "keydown" &&
      ((event as KeyboardEvent).key === "Tab" ||
        (event as KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(!drawerOpen);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      <AppBar
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
                  padding: '0'
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
      </AppBar>
      <Box display="flex" height="100%">
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: isMobile ? "100%" : drawerWidth,
              boxSizing: "border-box",
            },
            zIndex: 1,
          }}
          variant={isMobile ? "temporary" : "persistent"}
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
          transitionDuration={isMobile ? 500 : 0}
        >
          <Box padding={4}></Box>
          <Lists toggleDrawer={toggleDrawer} />
        </Drawer>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          width="100%"
          height="100%"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
