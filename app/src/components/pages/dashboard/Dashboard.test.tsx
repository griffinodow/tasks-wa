import { renderWithStore } from "../../../test/test-utils";
import { Dashboard } from "./Dashboard";
import { initialStateListWithTasks } from "../../../test/shims/initial-state-list-with-tasks";

describe("Dashboard component", () => {
  test("Should render list", () => {
    const { getByTestId } = renderWithStore(
      <Dashboard />,
      initialStateListWithTasks
    );

    expect(getByTestId("Groceries list name")).toBeTruthy();
  });

  test("Should render tasks", () => {
    const { getByText } = renderWithStore(
      <Dashboard />,
      initialStateListWithTasks
    );

    expect(getByText("Vegetables")).toBeTruthy();
    expect(getByText("Redux")).toBeTruthy();
    expect(getByText("Nodejs")).toBeTruthy();
  });
});
