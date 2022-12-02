// Libraries
import { FormEvent } from "react";

// State
import { register } from "../../../../../state/user/thunks";
import { useDispatch } from "../../../../common/hooks";

// Utils
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validators";

/**
 * The user register hook.
 * @param params - The input params object.
 * @param params.setEmailError - Sets the email error state.
 * @param params.setPasswordError - Sets the password error state.
 * @param params.setConfirmPasswordError - Sets the confirm password error state.
 * @param params.email - The email.
 * @param params.password - The password.
 * @param params.confirmPassword - The confirm password.
 * @param params.name - The name.
 * @param params.setNameError - Sets the name error state.
 * @returns
 */
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
  const dispatch = useDispatch();
  return (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmailValid = validateEmail(email),
      isPasswordValid = true, // validatePassword(password),
      isConfirmPasswordValid = true, // validatePassword(confirmPassword),
      isNameValid = validateName(name);

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
    } else {
      setPasswordError(false);
      setConfirmPasswordError(false);
    }

    if (
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      password === confirmPassword
    ) {
      dispatch(register({ email, password }));
    }
  };
};
