import { remove } from "./remove";
import { createStore } from "../../../../../../../../test/test-utils";
import { initialStateListWithTask } from "../../../../../../../../test/shims/initial-state-list-with-task";
import { selectSelectedTasks } from "../../../../../../../../state/lists/selectors";

describe("Remove task", () => {
  test("Remove a task", () => {
    const store = createStore(initialStateListWithTask);
    const currentState = store.getState();
    const tasks = selectSelectedTasks(currentState);
    const task = tasks[0];
    const handleRemove = remove(store.dispatch, tasks, () => {}, task);

    handleRemove();

    expect(
      store.getState().lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks.length
    ).toEqual(0);
  });
});
