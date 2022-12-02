// Libraries
import { useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

// Components
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Login } from "../pages/login-register/Login";
import { Register } from "../pages/login-register/Register";

// State
import { selectIsAuthorized } from "../../state/user/selectors";

// Hooks
import { useDispatch, useSelector } from "../common/hooks";
import { restore } from "../../state/user/actions";

/**
 * The app.
 * @returns The app.
 */
export const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)"),
    isAuthorized = useSelector(selectIsAuthorized),
    theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode: prefersDarkMode ? "dark" : "light",
          },
        }),
      [prefersDarkMode]
    ),
    token = window.localStorage.getItem("token"),
    user = window.localStorage.getItem("user"),
    dispatch = useDispatch();

  useEffect(() => {
    if (token && user) {
      dispatch(
        restore({
          ...JSON.parse(user),
          token,
        })
      );
    }
  }, [token, user, dispatch]);

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
