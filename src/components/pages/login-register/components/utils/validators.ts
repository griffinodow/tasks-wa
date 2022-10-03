/**
 * Email regex.
 */
const EMAIL_REGEX = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

/**
 * Password regex.
 */
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

/**
 * Email validator function.
 * @param email - The email.
 * @returns If the email is valid.
 */
export const validateEmail = (email: string) => EMAIL_REGEX.test(email);

/**
 * Password validator function.
 * @param password - The password.
 * @returns If the password is valid.
 */
export const validatePassword = (password: string) =>
  PASSWORD_REGEX.test(password);

/**
 * Name validator function.
 * @param name - The name.
 * @returns If the name is valid.
 */
export const validateName = (name: string) => name.length > 0;
