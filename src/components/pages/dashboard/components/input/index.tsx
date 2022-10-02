import { Box, TextField } from "@mui/material";
import { useCreateTask } from "./hooks/use-create-task";
import { useState } from "react";

export const Input = () => {
  const [value, setValue] = useState("");
  const create = useCreateTask({ setValue });

  return (
    <Box padding="1rem" width="100%">
      <form onSubmit={create}>
        <TextField
          id="standard-basic"
          name="name"
          variant="standard"
          fullWidth={true}
          placeholder="Add task"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </form>
    </Box>
  );
};
