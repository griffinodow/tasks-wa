import { TaskView } from ".";
import { renderWithStore } from "../../../../../../../test/test-utils";
import { initialStateListWithTask } from "../../../../../../../test/shims/initial-state-list-with-task";

describe("Task view component", () => {
  test("Displays task data", () => {
    const task = {
      ...initialStateListWithTask.lists.entities[
        "c73b698a-2a8c-420a-9264-f3a0db79771f"
      ].tasks[0],
      listUuid: "c73b698a-2a8c-420a-9264-f3a0db79771f",
    };
    const { getByText } = renderWithStore(
      <TaskView
        task={task}
        handleToggleEditList={() => {}}
        setIsEditing={() => {}}
      />,
      initialStateListWithTask
    );

    expect(getByText("Vegetables")).toBeTruthy();
  });
});
