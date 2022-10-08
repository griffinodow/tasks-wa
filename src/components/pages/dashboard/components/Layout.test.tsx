import { renderWithStore } from "../../../../test/test-utils";
import { Layout } from "./Layout";
import { initialStateListWithTasks } from "../../../../test/shims/initial-state-list-with-tasks";

describe("Layout component", () => {
  test("Should render list", () => {
    const { getByTestId } = renderWithStore(
      <Layout />,
      initialStateListWithTasks
    );

    expect(getByTestId("Groceries list name")).toBeTruthy();
  });

  test("Should render tasks", () => {
    const { getByText } = renderWithStore(
      <Layout />,
      initialStateListWithTasks
    );

    expect(getByText("Vegetables")).toBeTruthy();
    expect(getByText("Redux")).toBeTruthy();
    expect(getByText("Nodejs")).toBeTruthy();
  });
});
