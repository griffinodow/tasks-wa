import { Tasks } from ".";
import { renderWithStore } from "../../../../../test/test-utils";
import { initialStateListWithTasks } from "../../../../../test/shims/initial-state-list-with-tasks";

describe("Tasks component", () => {
  test("Displays tasks", () => {
    const { getByText } = renderWithStore(<Tasks />, initialStateListWithTasks);

    expect(getByText("Vegetables")).toBeTruthy();
    expect(getByText("Redux")).toBeTruthy();
    expect(getByText("Nodejs")).toBeTruthy();
  });
});
