// Libraries
import { Box, LinearProgress } from "@mui/material";

// Hooks
import { useSelector } from "../../common/hooks";

// State
import { selectIsPendingUser } from "../../../state/user/selectors";

// Components
import { LoginForm } from "./components/LoginForm";

/**
 * The login component.
 * @returns The login component.
 */
export const Login = () => {
  const isPendingLogin = useSelector(selectIsPendingUser);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "100%" }}
    >
      {isPendingLogin ? (
        <Box sx={{ width: "100%", maxWidth: "500px", padding: "1rem" }}>
          <LinearProgress />
        </Box>
      ) : (
        <LoginForm />
      )}
    </Box>
  );
};
