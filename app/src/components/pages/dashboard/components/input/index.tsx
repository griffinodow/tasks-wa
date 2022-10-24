// Libraries
import { Box, TextField } from "@mui/material";
import { useState } from "react";
import {
  selectSelectedList,
  selectSelectedTasks,
} from "../../../../../state/lists/selectors";
import { useDispatch, useSelector } from "../../../../common/hooks";

// Utils
import { createTask } from "./utils/create-task";

/**
 * The input component.
 * @returns - The input component.
 */
export const Input = () => {
  const [name, setName] = useState(""),
    dispatch = useDispatch(),
    selectedList = useSelector(selectSelectedList),
    tasks = useSelector(selectSelectedTasks),
    create = createTask(dispatch, selectedList, tasks, name, setName);

  return (
    <Box padding="1rem" width="100%">
      <form onSubmit={create}>
        <TextField
          id="task-input"
          name="name"
          variant="standard"
          fullWidth={true}
          placeholder="Add task"
          value={name}
          inputProps={{
            "data-testid": "task-input",
          }}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </form>
    </Box>
  );
};
