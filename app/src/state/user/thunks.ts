// API
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, postUser } from "../../api/user-service";
import { postToken } from "../../api/token-service";

/**
 * The token thunk.
 */
export const login = createAsyncThunk(
  "user/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue, fulfillWithValue, dispatch }
  ) => {
    try {
      const { token } = await postToken(email, password);
      const user = await getUser(token);
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("user", JSON.stringify(user));
      return fulfillWithValue({
        ...user,
        token,
      });
    } catch (error: any) {
      const situation = {
        status: error?.status ?? 400,
        message: error?.message ?? "An unknown error occured.",
      };
      return rejectWithValue(situation);
    }
  }
);

/**
 * The register thunk.
 */
export const register = createAsyncThunk(
  "user/register",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue, fulfillWithValue, dispatch }
  ) => {
    try {
      await postUser(email, password);
      const { token } = await postToken(email, password);
      const user = await getUser(token);
      return fulfillWithValue({
        ...user,
        token,
      });
    } catch (error: any) {
      const situation = {
        status: error?.status ?? 400,
        message: error?.message ?? "An unknown error occured.",
      };
      return rejectWithValue(situation);
    }
  }
);
