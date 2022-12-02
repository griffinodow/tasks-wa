// Libraries
import { WritableDraft } from "immer/dist/internal";

// Data
import { ASYNC_STATES } from "../../utils/constants";

// State
import { State } from "./slice";
import { listsAdapter } from "./adaptors";

/**
 * Gets lists and puts them in the state.
 */
const getListsReducer = {
  "lists/getLists/pending": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.PENDING;
  },
  "lists/getLists/fulfilled": (
    state: WritableDraft<State>,
    { payload }: { payload: any }
  ) => {
    if (payload) listsAdapter.setMany(state, payload);
    state.status = ASYNC_STATES.FULFILLED;
  },
  "lists/getLists/rejected": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.REJECTED;
  },
};

/**
 * Posts new list to state.
 */
const postListReducer = {
  // Post list
  "lists/postList/pending": (state: WritableDraft<State>, action: any) => {
    state.status = ASYNC_STATES.PENDING;
    listsAdapter.addOne(state, action.meta.arg.list);
  },
  "lists/postList/fulfilled": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.FULFILLED;
  },
  "lists/postList/rejected": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.REJECTED;
  },
};

/**
 * Puts list to state.
 */
const putListReducer = {
  "lists/putList/pending": (state: WritableDraft<State>, action: any) => {
    state.status = ASYNC_STATES.PENDING;
    listsAdapter.updateOne(state, {
      id: action.meta.arg.list.uuid,
      changes: action.meta.arg.list,
    });
  },
  "lists/putList/fulfilled": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.FULFILLED;
  },
  "lists/putList/rejected": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.REJECTED;
  },
};

/**
 * Deletes list from state.
 */
const deleteListReducer = {
  "lists/deleteList/pending": (state: WritableDraft<State>, action: any) => {
    state.status = ASYNC_STATES.PENDING;
    listsAdapter.removeOne(state, action.meta.arg);
  },
  "lists/deleteList/fulfilled": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.FULFILLED;
  },
  "lists/deleteList/rejected": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.REJECTED;
  },
};

/**
 * Posts task to state.
 */
const postTaskReducer = {
  "lists/postTask/pending": (state: WritableDraft<State>, action: any) => {
    if (!state.selected) return;
    state.status = ASYNC_STATES.PENDING;
    state.entities[state.selected]!.tasks.push(action.meta.arg.task);
  },
  "lists/postTask/fulfilled": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.FULFILLED;
  },
  "lists/postTask/rejected": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.REJECTED;
  },
};

/**
 * Puts task in state.
 */
const putTaskReducer = {
  "lists/putTask/pending": (state: WritableDraft<State>, action: any) => {
    state.status = ASYNC_STATES.PENDING;
    if (!state.selected) return;
    state.entities[state.selected]!.tasks[action.meta.arg.task.order] =
      action.meta.arg.task;
  },
  "lists/putTask/fulfilled": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.FULFILLED;
  },
  "lists/putTask/rejected": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.REJECTED;
  },
};

/**
 * Deletes task in state.
 */
const deleteTaskReducer = {
  "lists/deleteTask/pending": (state: WritableDraft<State>, action: any) => {
    if (!state.selected) return;
    state.status = ASYNC_STATES.PENDING;
    const order = state.entities[state.selected]!.tasks.find(
      (task) => task.uuid === action.meta.arg
    )?.order;

    if (order === undefined) return;
    state.entities[state.selected]!.tasks.splice(order, 1);
  },
  "lists/deleteTask/fulfilled": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.FULFILLED;
  },
  "lists/deleteTask/rejected": (state: WritableDraft<State>) => {
    state.status = ASYNC_STATES.REJECTED;
  },
};

/**
 * The lists reducers.
 */
const listsReducer = {
  ...getListsReducer,
  ...postListReducer,
  ...putListReducer,
  ...deleteListReducer,
};

/**
 * The tasks reducers.
 */
const tasksReducer = {
  ...postTaskReducer,
  ...putTaskReducer,
  ...deleteTaskReducer,
};

/**
 * The extra reducers.
 */
export const extraReducers = {
  ...listsReducer,
  ...tasksReducer,
};
