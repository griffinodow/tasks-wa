import { createTask } from "./create-task";
import { createStore } from "../../../../../../test/test-utils";
import {
  selectSelectedList,
  selectSelectedTasks,
} from "../../../../../../state/lists/selectors";
import { initialStateEmptyList } from "../../../../../../test/shims/initial-state-empty-list";

describe("Create Task", () => {
  test("Adds task to state", () => {
    const store = createStore(initialStateEmptyList);
    const currentState = store.getState();
    const selectedList = selectSelectedList(currentState);
    const tasks = selectSelectedTasks(currentState);
    const newTaskName = "New List Item";

    const create = createTask(
      store.dispatch,
      selectedList,
      tasks,
      newTaskName,
      () => {}
    );

    create();

    expect(
      store.getState().lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[0].name
    ).toEqual(newTaskName);
  });
});
