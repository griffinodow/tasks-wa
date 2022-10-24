import { updateName } from "./update-name";
import { createStore } from "../../../../../../../../test/test-utils";
import { initialStateListWithTask } from "../../../../../../../../test/shims/initial-state-list-with-task";
import { selectSelectedTasks } from "../../../../../../../../state/lists/selectors";
import { FormEvent } from "react";

describe("Update task name function", () => {
  test("Updates the task anme", () => {
    const store = createStore(initialStateListWithTask);
    const currentState = store.getState();
    const tasks = selectSelectedTasks(currentState);
    const task = tasks[0];
    const update = updateName(store.dispatch, () => {}, task);

    update("The new name");

    expect(
      store.getState().lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[0].name
    ).toEqual("The new name");
  });
});
