/**
 * Temporary timeout function for simulating async API requests.
 * @param ms - The delay in miliseconds.
 * @returns Void promise.
 */
export const timeOut = (ms: number) =>
  new Promise((res) => setTimeout(res, ms));

/**
 * Test data token for mock API.
 */
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYzQ2Mjc1NmYtYmU5My00ODIwLWFmZjgtOGM0MjFlNzQyNDU2IiwiaWF0IjoxNTE2MjM5MDIyfQ.NS3bCd1NY2pi0NSrqr8iKLHx5fJqC8c0lpXMORsG0O4";
