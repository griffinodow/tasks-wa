// Libraries
import { createEntityAdapter } from "@reduxjs/toolkit";

// Data
import { IList } from "../../interfaces/entities";

/**
 * The list adapter.
 */
export const listsAdapter = createEntityAdapter<IList>({
  selectId: (list) => list.uuid,
  sortComparer: (a, b) => a.order - b.order,
});
