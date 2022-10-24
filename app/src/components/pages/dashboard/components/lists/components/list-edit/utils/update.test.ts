import { initialStateEmptyList } from "../../../../../../../../test/shims/initial-state-empty-list";
import { createStore } from "../../../../../../../../test/test-utils";
import { update } from "./update";

describe("Create update handler function", () => {
  test("Should update list", () => {
    const store = createStore(initialStateEmptyList);
    const list =
      initialStateEmptyList.lists.entities[
        "c73b698a-2a8c-420a-9264-f3a0db79771f"
      ];

    const handleUpdate = update(store.dispatch, () => {}, list);

    handleUpdate("The new list name");

    expect(
      store.getState().lists.entities["c73b698a-2a8c-420a-9264-f3a0db79771f"]
        ?.name
    ).toEqual("The new list name");
  });
});
