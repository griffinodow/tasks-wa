// Libraries
import { Box, TextField } from "@mui/material";
import { useCreateTask } from "./hooks/use-create-task";
import { useState } from "react";

/**
 * The input component.
 * @returns - The input component.
 */
export const Input = () => {
  const [value, setValue] = useState(""),
    create = useCreateTask({ value, setValue });

  return (
    <Box padding="1rem" width="100%">
      <form onSubmit={create}>
        <TextField
          id="task-input"
          name="name"
          variant="standard"
          fullWidth={true}
          placeholder="Add task"
          value={value}
          inputProps={{
            "data-testid": "task-input",
          }}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </form>
    </Box>
  );
};
