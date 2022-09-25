import { Box, LinearProgress } from "@mui/material";
import { useSelector } from "../../common/hooks";
import { selectIsPendingUser } from "../../../state/user/selectors";
import { LoginForm } from "./components/LoginForm";

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
