export const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
export const BASE_URL = "https://api.todo.griffindow.com/";
export enum ASYNC_STATES {
  IDLE,
  PENDING,
  FULFILLED,
  REJECTED,
}

export const EMAIL_REGEX = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
