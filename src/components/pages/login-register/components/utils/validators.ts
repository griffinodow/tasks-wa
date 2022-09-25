const EMAIL_REGEX = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export const validateEmail = (email: string) => EMAIL_REGEX.test(email);

export const validatePassword = (password: string) =>
  PASSWORD_REGEX.test(password);

export const validateName = (name: string) => name.length > 0;
