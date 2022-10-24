// Libraries
import { useState } from "react";
import { Button, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// Utils
import { changeEmail, changePassword, changeName } from "./utils/handlers";

// Hooks
import { useRegister } from "./hooks/use-register";

/**
 * The register form component.
 * @returns The register form component.
 */
export const RegisterForm = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState(""),
    [name, setName] = useState(""),
    [isEmailError, setEmailError] = useState(false),
    [isPasswordError, setPasswordError] = useState(false),
    [isConfirmPasswordError, setConfirmPasswordError] = useState(false),
    [isNameError, setNameError] = useState(false),
    handleSubmit = useRegister({
      setEmailError,
      setPasswordError,
      setConfirmPasswordError,
      setNameError,
      email,
      password,
      confirmPassword,
      name,
    }),
    handleChangeEmail = changeEmail(isEmailError, setEmailError, setEmail),
    handleChangePassword = changePassword(
      isPasswordError,
      setPasswordError,
      setPassword
    ),
    handleChangeConfirmPassword = changePassword(
      isConfirmPasswordError,
      setConfirmPasswordError,
      setConfirmPassword
    ),
    handleChangeName = changeName(isNameError, setNameError, setName);

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        maxWidth: "500px",
        width: "100%",
      }}
    >
      <Typography variant="h2" component="h1">
        Tasks
      </Typography>
      <Typography variant="h5" component="h2">
        Start getting things done today
      </Typography>
      <TextField
        id="name"
        type="text"
        label="Name"
        variant="outlined"
        fullWidth
        required
        error={isNameError}
        onChange={handleChangeName}
      />
      <TextField
        id="email"
        type="email"
        label="Email address"
        variant="outlined"
        fullWidth
        required
        error={isEmailError}
        onChange={handleChangeEmail}
      />
      <TextField
        id="password"
        type="password"
        label="Password"
        variant="outlined"
        fullWidth
        required
        error={isPasswordError}
        onChange={handleChangePassword}
      />
      <TextField
        id="confirm-password"
        type="password"
        label="Confirm password"
        variant="outlined"
        fullWidth
        required
        error={isConfirmPasswordError}
        onChange={handleChangeConfirmPassword}
      />
      <Button type="submit" variant="contained" size="large" disableElevation>
        Register
      </Button>
      <Typography>
        Have an account?{" "}
        <Link component={RouterLink} to="/login">
          Login now
        </Link>
        .
      </Typography>
    </form>
  );
};
