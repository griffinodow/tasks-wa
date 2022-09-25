import { ChangeEvent } from "react";
import { validateEmail, validatePassword, validateName } from "./validators";

export const changeName =
  (isNameError: boolean, setNameError: Function, setName: Function) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    if (isNameError && validateName(event.target.value)) {
      setNameError(false);
    }
    setName(event.target.value);
  };

export const changeEmail =
  (isEmailError: boolean, setEmailError: Function, setEmail: Function) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    if (isEmailError && validateEmail(event.target.value)) {
      setEmailError(false);
    }
    setEmail(event.target.value);
  };

export const changePassword =
  (
    isPasswordError: boolean,
    setPasswordError: Function,
    setPassword: Function
  ) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    if (isPasswordError && validatePassword(event.target.value)) {
      setPasswordError(false);
    }
    setPassword(event.target.value);
  };

export const changePasswordNotEmpty =
  (
    isPasswordError: boolean,
    setPasswordError: Function,
    setPassword: Function
  ) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    if (isPasswordError && event.target.value !== "") {
      setPasswordError(false);
    }
    setPassword(event.target.value);
  };
