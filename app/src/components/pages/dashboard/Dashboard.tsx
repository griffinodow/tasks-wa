// Libraries
import { useEffect } from "react";

// State
import { updateSelectedList } from "../../../state/lists/actions";
import {
  selectLists,
  selectSelectedList,
} from "../../../state/lists/selectors";
import { selectToken } from "../../../state/user/selectors";
import { getLists, putList } from "../../../state/lists/thunks";

// Hooks
import { useDispatch, useSelector } from "../../common/hooks";

// Components
import { Layout } from "./components/Layout";

/**
 * The dashboard component.
 * @returns The dashboard component.
 */
export const Dashboard = () => {
  const dispatch = useDispatch(),
    selectedList = useSelector(selectSelectedList),
    lists = useSelector(selectLists),
    token = useSelector(selectToken);

  useEffect(() => {
    if (!token) return;
    dispatch(getLists({ token }));
  }, [dispatch, token]);

  useEffect(() => {
    if (selectedList === null && lists.length > 0) {
      dispatch(updateSelectedList(lists[0].uuid));
    }
  }, [lists, dispatch, selectedList]);

  useEffect(() => {
    lists.forEach((list, index) => {
      if (list.order !== index)
        dispatch(putList({ list: { ...list, order: index } }));
    });
  }, [dispatch, lists]);

  return <Layout />;
};
