import { initialStateEmptyList } from "../../../../../../../../test/shims/initial-state-empty-list";
import { createStore } from "../../../../../../../../test/test-utils";
import { select } from "./select";

describe("The create select handler function", () => {
  test("Selects the list in desktop mode", () => {
    const store = createStore(initialStateEmptyList);
    const handleSelect = select(
      store.dispatch,
      false,
      "c73b698a-2a8c-420a-9264-f3a0db79771f",
      () => {}
    );

    handleSelect();

    expect(store.getState().lists.selected).toEqual(
      "c73b698a-2a8c-420a-9264-f3a0db79771f"
    );
  });

  test("Selects the list in mobile mode", () => {
    const store = createStore(initialStateEmptyList);
    const handleSelect = select(
      store.dispatch,
      true,
      "c73b698a-2a8c-420a-9264-f3a0db79771f",
      () => {}
    );

    handleSelect();

    expect(store.getState().lists.selected).toEqual(
      "c73b698a-2a8c-420a-9264-f3a0db79771f"
    );
  });
});
