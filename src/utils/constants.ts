/**
 * API request headers.
 */
export const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

/**
 * API URL.
 */
export const BASE_URL = "https://api.todo.griffindow.com/";

/**
 * Async states.
 */
export enum ASYNC_STATES {
  IDLE,
  PENDING,
  FULFILLED,
  REJECTED,
}
