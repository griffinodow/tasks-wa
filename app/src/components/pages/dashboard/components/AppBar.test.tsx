import { fireEvent, renderWithStore } from "../../../../test/test-utils";
import { AppBar } from "./AppBar";
import { initialStateEmptyList } from "../../../../test/shims/initial-state-empty-list";

describe("App bar component", () => {
  test("Displays selected list name", () => {
    const { getByText } = renderWithStore(
      <AppBar
        handleClose={() => {}}
        handleMenu={() => {}}
        toggleDrawer={() => {}}
        anchorEl={null}
      />,
      initialStateEmptyList
    );

    expect(getByText("Groceries")).toBeTruthy();
  });

  test("Dispatch logout handler", () => {
    const mockHandleLogout = jest.fn();

    const { getByTestId, getByText } = renderWithStore(
      <AppBar
        handleClose={mockHandleLogout}
        handleMenu={() => {}}
        toggleDrawer={() => {}}
        anchorEl={null}
      />,
      initialStateEmptyList
    );

    fireEvent.click(getByTestId("toggle-user"));
    fireEvent.click(getByText("Logout"));
    expect(mockHandleLogout).toHaveBeenCalled();
  });
});
