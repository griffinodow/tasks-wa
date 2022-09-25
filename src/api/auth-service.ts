import { timeOut, TOKEN } from "../utils/temp";

export const postToken = async (email: string, password: string) => {
  await timeOut(1000);
  if (email !== "test@griffindow.com" || password !== "thisisthepassword")
    throw new Error("Authentication failed");
  return TOKEN;
};

export const getUser = async (token: string) => {
  await timeOut(1000);
  if (token !== TOKEN) throw new Error("Authentication failed");

  return {
    uuid: "c462756f-be93-4820-aff8-8c421e742456",
    name: "Griffin",
    email: "griffin@griffindow.com",
  };
};
