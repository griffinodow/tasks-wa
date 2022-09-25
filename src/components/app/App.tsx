import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Login } from "../pages/login-register/Login";
import { Register } from "../pages/login-register/Register";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "../common/hooks";
import { selectIsAuthorized } from "../../state/user/selectors";

export const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const isAuthorized = useSelector(selectIsAuthorized);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route
            path="/"
            element={isAuthorized ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!isAuthorized ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!isAuthorized ? <Register /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
