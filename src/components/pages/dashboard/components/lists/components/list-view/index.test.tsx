import { ListRead } from ".";
import { renderWithStore } from "../../../../../../../test/test-utils";
import { initialStateEmptyList } from "../../../../../../../test/shims/initial-state-empty-list";

describe("List read component", () => {
  test("Should render list with name", () => {
    const list =
      initialStateEmptyList.lists.entities[
        "c73b698a-2a8c-420a-9264-f3a0db79771f"
      ];

    const { getByText } = renderWithStore(
      <ListRead
        list={list}
        toggleDrawer={() => {}}
        selected={true}
        handleToggleEditList={() => {}}
      />,
      initialStateEmptyList
    );

    expect(getByText("Groceries")).toBeTruthy();
  });
});
