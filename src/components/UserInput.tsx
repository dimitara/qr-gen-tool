import { ChangeEvent, ClipboardEvent, useContext } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useCallback } from "react";
import { ActivityStore } from "../providers/Activity";
import SaveAlt from "@mui/icons-material/SaveAlt";

//TODO: add input debounce

const UserInput = (): JSX.Element => {
  const {
    state: { currentValue },
    generateCode,
    saveToHistory,
  } = useContext(ActivityStore);

  const onPaste = useCallback(
    (e: ClipboardEvent<HTMLInputElement>) => {
      generateCode(e.clipboardData.getData("Text"));
    },
    [generateCode]
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      generateCode(e.target.value);
    },
    [generateCode]
  );

  const onSave = useCallback(() => {
    if (!!currentValue) saveToHistory(currentValue);
  }, [currentValue, saveToHistory]);

  return (
    <Grid container>
      <Grid item xs={10}>
        <Box textAlign={"left"}>
          <TextField fullWidth label={"Paste your value here"} value={currentValue || ""} onChange={onChange} onPaste={onPaste} variant={"outlined"} />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={onSave}>
          <SaveAlt />
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserInput;
