// Libraries
import { ChangeEvent } from "react";

// Utils
import { validateEmail, validatePassword, validateName } from "./validators";

/**
 * The change name handler.
 * @param isNameError - If the name has an error.
 * @param setNameError - Sets the name error state.
 * @param setName - Sets the name.
 * @returns The change name handler creator function.
 */
export const changeName =
  (isNameError: boolean, setNameError: Function, setName: Function) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    if (isNameError && validateName(event.target.value)) {
      setNameError(false);
    }
    setName(event.target.value);
  };

/**
 * The change email handler.
 * @param isEmailError - If the email has an error.
 * @param setEmailError - The set email error state.
 * @param setEmail - Sets the email.
 * @returns The change email handler creator function.
 */
export const changeEmail =
  (isEmailError: boolean, setEmailError: Function, setEmail: Function) =>
  (event: ChangeEvent<HTMLInputElement>) => {
    if (isEmailError && validateEmail(event.target.value)) {
      setEmailError(false);
    }
    setEmail(event.target.value);
  };

/**
 * The change password handler.
 * @param isPasswordError - If the password has an error.
 * @param setPasswordError - The set email error state.
 * @param setPassword - The set password function.
 * @returns The change password handler creator function.
 */
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

/**
 * The change password not empty handler.
 * @param isPasswordError - If the password has an error.
 * @param setPasswordError - The set password error function.
 * @param setPassword - The set password function.
 * @returns The change password not empty handler creator function.
 */
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
