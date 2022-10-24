import { updateComplete } from "./update-complete";
import { initialStateListWithTask } from "../../../../../../test/shims/initial-state-list-with-task";
import { initialStateListWithTasks } from "../../../../../../test/shims/initial-state-list-with-tasks";
import { createStore } from "../../../../../../test/test-utils";
import { selectSelectedTasks } from "../../../../../../state/lists/selectors";

describe("Update task complete", () => {
  test("Complete a task", () => {
    const store = createStore(initialStateListWithTask);
    const currentState = store.getState();
    const tasks = selectSelectedTasks(currentState);
    const task = tasks[0];
    const update = updateComplete(store.dispatch, task, tasks, () => {});

    expect(
      currentState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[0].complete
    ).toBe(false);

    update();

    const updatedState = store.getState();

    expect(
      updatedState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[0].complete
    ).toBe(true);
  });

  test("Complete a task and reorder", () => {
    const store = createStore(initialStateListWithTasks);
    const currentState = store.getState();
    const tasks = selectSelectedTasks(currentState);
    const task = tasks[0];
    const update = updateComplete(store.dispatch, task, tasks, () => {});

    expect(
      currentState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[0].uuid
    ).toBe(task.uuid);
    expect(
      currentState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[0].complete
    ).toBe(false);
    expect(
      currentState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[0].order
    ).toBe(0);

    update();

    const updatedState = store.getState();

    expect(
      updatedState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[2].uuid
    ).toBe(task.uuid);
    expect(
      updatedState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[2].complete
    ).toBe(true);
    expect(
      updatedState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[2].order
    ).toBe(2);
  });

  test("Complete a task and no reorder", () => {
    const store = createStore(initialStateListWithTasks);
    const currentState = store.getState();
    const tasks = selectSelectedTasks(currentState);
    const task = tasks[2];
    const update = updateComplete(store.dispatch, task, tasks, () => {});

    expect(
      currentState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[2].uuid
    ).toBe(task.uuid);
    expect(
      currentState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[2].complete
    ).toBe(false);
    expect(
      currentState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[2].order
    ).toBe(2);

    update();

    const updatedState = store.getState();

    expect(
      updatedState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[2].uuid
    ).toBe(task.uuid);
    expect(
      updatedState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[2].complete
    ).toBe(true);
    expect(
      updatedState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[2].order
    ).toBe(2);
  });
});
