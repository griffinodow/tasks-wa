// Libraries
import { Box } from "@mui/material";

// Components
import { RegisterForm } from "./components/RegisterForm";

/**
 * The register component.
 * @returns - The register component.
 */
export const Register = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "100%", padding: "1rem" }}
    >
      <RegisterForm />
    </Box>
  );
};
