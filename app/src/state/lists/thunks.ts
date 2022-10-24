// Libraries
import { createAsyncThunk } from "@reduxjs/toolkit";

// API
import {
  deleteListApi,
  deleteTaskApi,
  getListsApi,
  postListApi,
  postTaskApi,
  putListApi,
  putTaskApi,
} from "../../api/lists-service";

// Interfaces
import { IList, ITask } from "../../interfaces/entities";
import { RootState } from "../../interfaces/store";

/**
 * The get lists thunk.
 */
export const getLists = createAsyncThunk(
  "lists/getLists",
  async ({ token }: { token: string }) => {
    return getListsApi(token);
  }
);

/**
 * The post list thunk.
 */
export const postList = createAsyncThunk<
  IList | undefined,
  { list: IList },
  { state: RootState }
>("lists/postList", async ({ list }, thunkApi) => {
  const state = thunkApi.getState();
  if (!state.user.data?.token)
    return thunkApi.rejectWithValue("Invalid request parameters");
  const res = postListApi(state.user.data.token, list);
  if (!res) thunkApi.rejectWithValue("Invalid API response");
  return res;
});

/**
 * The put list thunk.
 */
export const putList = createAsyncThunk<
  IList | undefined,
  { list: IList },
  { state: RootState }
>("lists/putList", async ({ list }, thunkApi) => {
  const state = thunkApi.getState();
  if (!state.user.data?.token)
    return thunkApi.rejectWithValue("Invalid request parameters");
  const res = putListApi(state.user.data.token, list);
  if (!res) thunkApi.rejectWithValue("Invalid API response");
  return res;
});

/**
 * The delete list thunk.
 */
export const deleteList = createAsyncThunk<
  boolean | undefined,
  string,
  { state: RootState }
>("lists/deleteList", async (uuid, thunkApi) => {
  const state = thunkApi.getState();
  if (!state.user.data?.token)
    return thunkApi.rejectWithValue("Invalid request parameters");
  const res = deleteListApi(state.user.data.token, uuid);
  if (!res) return thunkApi.rejectWithValue("Invalid API response.");
  return res;
});

/**
 * The post task thunk.
 */
export const postTask = createAsyncThunk<
  ITask | undefined,
  { task: ITask },
  { state: RootState }
>("lists/postTask", async ({ task }, thunkApi) => {
  const state = thunkApi.getState();
  if (!state.lists.selected || !state.user.data?.token)
    return thunkApi.rejectWithValue("Invalid request parameters");
  const res = postTaskApi(state.user.data.token, state.lists.selected, task);
  if (!res) return thunkApi.rejectWithValue("Invalid task API response");
  return res;
});

/**
 * The put task thunk.
 */
export const putTask = createAsyncThunk<
  ITask | undefined,
  { task: ITask },
  { state: RootState }
>("lists/putTask", async ({ task }, thunkApi) => {
  const state = thunkApi.getState();
  if (!state.lists.selected || !state.user.data?.token)
    return thunkApi.rejectWithValue("Invalid request parameters");
  const res = putTaskApi(state.user.data.token, state.lists.selected, task);
  if (!res) return thunkApi.rejectWithValue("Invalid task API response");
  return res;
});

/**
 * The delete task thunk.
 */
export const deleteTask = createAsyncThunk<
  boolean,
  string,
  { state: RootState }
>("lists/deleteTask", async (uuid, thunkApi) => {
  const state = thunkApi.getState();
  if (!state.lists.selected || !state.user.data?.token)
    return thunkApi.rejectWithValue("Invalid request parameters");
  const res = deleteTaskApi(state.user.data.token, state.lists.selected, uuid);
  if (!res) return thunkApi.rejectWithValue("Unable to delete task");
  return res;
});

/**
 * The reorder tasks thunk.
 */
export const reorderTasks = createAsyncThunk<
  void,
  { uuidA: string; uuidB: string },
  { state: RootState }
>("lists/reorderTasks", async ({ uuidA, uuidB }, thunkApi) => {
  const state = thunkApi.getState();
  const selectedList = state.lists.selected;
  if (!selectedList) return;
  const checkTasks = state.lists.entities[selectedList]?.tasks;
  if (!checkTasks) return;
  const tempTasks = [...checkTasks];
  if (!tempTasks) return;
  tempTasks.sort((a: ITask, b: ITask) => a.order - b.order);
  const taskAPos = tempTasks.findIndex((task: ITask) => task.uuid === uuidA);
  const taskBPos = tempTasks.findIndex((task: ITask) => task.uuid === uuidB);
  const taskA = tempTasks[taskAPos];
  tempTasks.splice(taskAPos, 1);
  tempTasks.splice(taskBPos, 0, taskA);

  tempTasks.forEach((task: ITask, index: number) => {
    if (task.order === index) return;
    thunkApi.dispatch(
      putTask({
        task: {
          ...task,
          order: index,
        },
      })
    );
  });
});
