import { TaskEntry } from "./TaskEntry";
import { initialStateListWithTask } from "../../../../../../test/shims/initial-state-list-with-task";
import { fireEvent, renderWithStore } from "../../../../../../test/test-utils";

describe("Task entry component", () => {
  test("Displays task name", () => {
    const task = {
      ...initialStateListWithTask.lists.entities[
        "c73b698a-2a8c-420a-9264-f3a0db79771f"
      ].tasks[0],
      listUuid: "c73b698a-2a8c-420a-9264-f3a0db79771f",
    };
    const { getByText } = renderWithStore(
      <TaskEntry task={task} />,
      initialStateListWithTask
    );

    expect(getByText("Vegetables")).toBeTruthy();
  });

  test("Toggles edit mode", () => {
    const task = {
      ...initialStateListWithTask.lists.entities[
        "c73b698a-2a8c-420a-9264-f3a0db79771f"
      ].tasks[0],
      listUuid: "c73b698a-2a8c-420a-9264-f3a0db79771f",
    };
    const { getByText, getByTestId } = renderWithStore(
      <TaskEntry task={task} />,
      initialStateListWithTask
    );

    fireEvent.click(getByTestId("Vegetables edit button"));

    expect(getByTestId("Vegetables input")).toBeTruthy();
  });
});
