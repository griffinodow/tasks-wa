import { ListEntry } from "./ListEntry";
import { initialStateEmptyList } from "../../../../../../test/shims/initial-state-empty-list";
import { fireEvent, renderWithStore } from "../../../../../../test/test-utils";

describe("List entry component", () => {
  test("Should display task name", () => {
    const list =
      initialStateEmptyList.lists.entities[
        "c73b698a-2a8c-420a-9264-f3a0db79771f"
      ];
    const { getByText } = renderWithStore(
      <ListEntry list={list} selected={true} toggleDrawer={() => {}} />,
      initialStateEmptyList
    );

    expect(getByText("Groceries")).toBeTruthy();
  });

  test("Toggles edit mode", () => {
    const list =
      initialStateEmptyList.lists.entities[
        "c73b698a-2a8c-420a-9264-f3a0db79771f"
      ];
    const { getByTestId } = renderWithStore(
      <ListEntry list={list} selected={true} toggleDrawer={() => {}} />,
      initialStateEmptyList
    );

    fireEvent.click(getByTestId("Groceries edit button"));

    expect(getByTestId("Groceries input")).toBeTruthy();
  });
});
