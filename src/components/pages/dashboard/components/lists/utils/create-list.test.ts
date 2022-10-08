import { createList } from "./create-list";
import { createStore } from "../../../../../../test/test-utils";
import { initialStateEmptyList } from "../../../../../../test/shims/initial-state-empty-list";
import { selectLists } from "../../../../../../state/lists/selectors";

describe("The create list handler function", () => {
  test("Should create a new list", () => {
    const store = createStore(initialStateEmptyList);
    const lists = selectLists(store.getState());
    const handleCreateList = createList(store.dispatch, lists);
    handleCreateList();

    const updatedState = store.getState();
    const uuid = updatedState.lists.ids[1];
    expect(updatedState.lists.ids.length).toBe(2);
    expect(updatedState.lists.entities[uuid]?.name).toBe("New List");
  });
});
