// Libraries
import { KeyboardEvent, MouseEvent, useState, useEffect } from "react";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";

// Components
import { Lists } from "./lists";
import { AppBar } from "./AppBar";
import { Tasks } from "./tasks";
import { Input } from "./input";

export const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(true),
    theme = useTheme(),
    isMobile = useMediaQuery(theme.breakpoints.down("md")),
    drawerWidth = drawerOpen ? "240px" : "0",
    [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
      <Box display="flex" height="100%" maxHeight="100%" overflow="hidden">
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
          maxHeight="100%"
        >
          <Tasks />
          <Input />
        </Box>
      </Box>
    </Box>
  );
};
