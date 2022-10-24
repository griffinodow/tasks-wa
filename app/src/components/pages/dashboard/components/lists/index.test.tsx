import { Lists } from ".";
import { fireEvent, renderWithStore } from "../../../../../test/test-utils";
import { initialStateEmptyList } from "../../../../../test/shims/initial-state-empty-list";

describe("Lists component", () => {
  test("Should display lists", () => {
    const { getByText } = renderWithStore(
      <Lists toggleDrawer={() => {}} />,
      initialStateEmptyList
    );

    expect(getByText("Groceries")).toBeTruthy();
  });

  test("Should display added lists", () => {
    const { getByText, getByTestId } = renderWithStore(
      <Lists toggleDrawer={() => {}} />,
      initialStateEmptyList
    );

    fireEvent.click(getByTestId("add-new-list"));

    expect(getByText("Groceries")).toBeTruthy();
    expect(getByText("New List")).toBeTruthy();
  });
});
