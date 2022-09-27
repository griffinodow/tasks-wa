import { useEffect } from "react";
import { updateSelectedList } from "../../../state/lists/actions";
import {
  selectLists,
  selectSelectedList,
} from "../../../state/lists/selectors";
import { selectToken } from "../../../state/user/selectors";
import { getLists } from "../../../state/lists/thunks";
import { useDispatch, useSelector } from "../../common/hooks";
import { Layout } from "./components/Layout";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const selectedList = useSelector(selectSelectedList);
  const lists = useSelector(selectLists);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) return;
    dispatch(getLists({ token }));
  }, [dispatch, token]);

  useEffect(() => {
    if (selectedList === null && lists.length > 0) {
      dispatch(updateSelectedList(lists[0].uuid));
    }
  }, [lists, dispatch, selectedList]);

  return <Layout />;
};
