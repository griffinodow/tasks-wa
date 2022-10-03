// Libraries
import { FormEvent } from "react";

// Hooks
import { useDispatch } from "../../../../common/hooks";

// State
import { login } from "../../../../../state/user/thunks";

// Utils
import { validateEmail } from "../utils/validators";

/**
 * The use login hook.
 * @param params - The input params object.
 * @param params.setEmailError - The set email error function.
 * @param params.setPasswordError - The set password error function.
 * @param params.email - The email.
 * @param params.password - The password.
 * @returns - The login function.
 */
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
    const isEmailValid = validateEmail(email),
      isPasswordValid = password !== "";

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
