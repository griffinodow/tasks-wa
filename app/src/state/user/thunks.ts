// API
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postToken, getUser, postUser } from "../../api/auth-service";

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
      console.log(token);
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
      console.log("RUNNIN");
      const user = await postUser(email, password);
      console.log("DATA RECEIVED", user);
      return fulfillWithValue({
        user,
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
