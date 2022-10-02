import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { KeyboardEvent, MouseEvent, useState, useEffect } from "react";
import { Lists } from "./lists";
import { AppBar } from "./AppBar";
import { Tasks } from "./tasks";

export const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
        handleClose={handleClose}
        handleMenu={handleMenu}
        toggleDrawer={toggleDrawer}
        anchorEl={anchorEl}
      />
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
          <Tasks />
        </Box>
      </Box>
    </Box>
  );
};
