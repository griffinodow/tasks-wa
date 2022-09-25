import { useState } from "react";
import { Button, Link, TextField, Typography } from "@mui/material";
import { changeEmail, changePasswordNotEmpty } from "./utils/handlers";
import { useLogin } from "./hooks/hooks";
import { Link as RouterLink } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [isEmailError, setEmailError] = useState(false),
    [isPasswordError, setPasswordError] = useState(false),
    handleSubmit = useLogin({
      setEmailError,
      setPasswordError,
      email,
      password,
    }),
    handleChangeEmail = changeEmail(isEmailError, setEmailError, setEmail),
    handleChangePassword = changePasswordNotEmpty(
      isPasswordError,
      setPasswordError,
      setPassword
    );

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
        Welcome back
      </Typography>
      <TextField
        id="email"
        type="email"
        label="Email address"
        variant="outlined"
        fullWidth
        required
        value={email}
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
        value={password}
        error={isPasswordError}
        onChange={handleChangePassword}
      />
      <Button type="submit" variant="contained" size="large" disableElevation>
        Login
      </Button>
      <Typography>
        Dont' have an account?{" "}
        <Link component={RouterLink} to="/register">
          Register now
        </Link>
        .
      </Typography>
    </form>
  );
};
