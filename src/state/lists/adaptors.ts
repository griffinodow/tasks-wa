import { createEntityAdapter } from "@reduxjs/toolkit";
import { IList } from "../../interfaces/interfaces";

/**
 * The list adapter.
 */
export const listsAdapter = createEntityAdapter<IList>({
  selectId: (list) => list.uuid,
  sortComparer: (a, b) => a.order - b.order,
});
