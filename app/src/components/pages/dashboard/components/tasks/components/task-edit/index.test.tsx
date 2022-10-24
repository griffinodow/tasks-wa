import {
  fireEvent,
  renderWithStore,
} from "../../../../../../../test/test-utils";
import { TaskEdit } from ".";
import { initialStateListWithTask } from "../../../../../../../test/shims/initial-state-list-with-task";

describe("Task edit component", () => {
  test("Change task name", () => {
    const task = {
      ...initialStateListWithTask.lists.entities[
        "c73b698a-2a8c-420a-9264-f3a0db79771f"
      ].tasks[0],
      listUuid: "c73b698a-2a8c-420a-9264-f3a0db79771f",
    };
    const { store, getByTestId } = renderWithStore(
      <TaskEdit
        task={task}
        handleToggleEditList={() => {}}
        setIsEditing={() => {}}
      />,
      initialStateListWithTask
    );

    const element = getByTestId("Vegetables input");

    fireEvent.change(element, {
      target: { value: "No longer vegetables" },
    });
    fireEvent.submit(element);

    const updatedState = store.getState();

    expect(
      updatedState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.tasks[0].name
    ).toBe("No longer vegetables");
  });
});
