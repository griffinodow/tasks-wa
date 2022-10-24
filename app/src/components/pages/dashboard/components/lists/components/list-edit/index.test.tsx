import { ListEdit } from ".";
import {
  fireEvent,
  renderWithStore,
} from "../../../../../../../test/test-utils";
import { initialStateEmptyList } from "../../../../../../../test/shims/initial-state-empty-list";

describe("List edit component", () => {
  test("Change list name", () => {
    const list =
      initialStateEmptyList.lists.entities[
        "c73b698a-2a8c-420a-9264-f3a0db79771f"
      ];
    const { store, getByTestId } = renderWithStore(
      <ListEdit
        list={list}
        selected={true}
        handleToggleEditList={() => {}}
        setIsEditing={() => {}}
      />,
      initialStateEmptyList
    );

    const element = getByTestId("Groceries input");

    fireEvent.change(element, {
      target: { value: "No longer groceries" },
    });
    fireEvent.submit(element);

    const updatedState = store.getState();

    expect(
      updatedState.lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]?.name
    ).toBe("No longer groceries");
  });
});
