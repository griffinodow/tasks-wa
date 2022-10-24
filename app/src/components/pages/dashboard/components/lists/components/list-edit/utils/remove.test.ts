import { initialStateListWithTask } from "../../../../../../../../test/shims/initial-state-list-with-task";
import { createStore } from "../../../../../../../../test/test-utils";
import { remove } from "./remove";

describe("Create remove handler function", () => {
  test("Should remove list", () => {
    const store = createStore(initialStateListWithTask);
    const handleRemove = remove(
      store.dispatch,
      () => {},
      "c73b698a-2a8c-420a-9264-f3a0db79771f"
    );

    handleRemove();

    expect(store.getState().lists.ids.length).toEqual(0);
  });
});
