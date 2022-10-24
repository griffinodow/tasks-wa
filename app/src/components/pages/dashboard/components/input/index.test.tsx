import { Input } from ".";
import { fireEvent, renderWithStore } from "../../../../../test/test-utils";
import { initialStateEmptyList } from "../../../../../test/shims/initial-state-empty-list";

describe("Input component", () => {
  test("Add task", () => {
    const newTaskName = "New Task 123";
    const { store, getByTestId } = renderWithStore(
      <Input />,
      initialStateEmptyList
    );

    fireEvent.change(getByTestId("task-input"), {
      target: { value: newTaskName },
    });

    fireEvent.submit(getByTestId("task-input"));

    expect(
      store.getState().lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[0]?.name
    ).toEqual(newTaskName);
  });
});
