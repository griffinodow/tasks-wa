import { FormEvent } from "react";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validators";
import { useDispatch } from "../../../../common/hooks";
import { login } from "../../../../../state/user/thunks";

export const useLogin = ({
  setEmailError,
  setPasswordError,
  email,
  password,
}: {
  setEmailError: Function;
  setPasswordError: Function;
  email: string;
  password: string;
}) => {
  const dispatch = useDispatch();

  return (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = password !== "";

    if (isEmailValid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    if (isPasswordValid) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }

    if (isEmailValid && isPasswordValid) {
      setEmailError(false);
      setPasswordError(false);
      dispatch(login({ email, password }));
    }
  };
};

export const useRegister = ({
  setEmailError,
  setPasswordError,
  setConfirmPasswordError,
  email,
  password,
  confirmPassword,
  name,
  setNameError,
}: {
  setEmailError: Function;
  setPasswordError: Function;
  setConfirmPasswordError: Function;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  setNameError: Function;
}) => {
  return (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validatePassword(confirmPassword);
    const isNameValid = validateName(name);

    if (isNameValid) {
      setNameError(false);
    } else {
      setNameError(true);
    }

    if (isEmailValid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    if (isPasswordValid) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }

    if (isConfirmPasswordValid) {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
    }

    if (password !== confirmPassword) {
      setPasswordError(true);
      setConfirmPasswordError(true);
    }

    if (
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      password === confirmPassword
    ) {
      console.log(email, password);
    }
  };
};
