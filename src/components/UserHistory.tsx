import { useCallback, useContext } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ActivityStore } from "../providers/Activity";
import QrCode2 from "@mui/icons-material/QrCode2";

const UserHistoryItem = ({ value, onSelect }: any): JSX.Element => {
  const onItemClick = useCallback(() => {
    onSelect(value);
  }, [value, onSelect]);

  return (
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} mb={1}>
      <Typography>{value}</Typography>
      <Button onClick={onItemClick}>
        <QrCode2 />
      </Button>
    </Box>
  );
};

const UserHistory = (): JSX.Element => {
  const {
    state: { userHistory },
    generateCode,
  } = useContext(ActivityStore);

  const onGenerate = useCallback(
    (value: string) => {
      generateCode(value);
    },
    [generateCode]
  );

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box textAlign={"left"}>
          <h3>History</h3>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>{userHistory.length === 0 && <Typography>Nothing here</Typography>}</Box>
      </Grid>
      <Grid item xs={12}>
        <Box textAlign={"left"}>
          {userHistory.map((uh: string) => (
            <UserHistoryItem key={uh} value={uh} onSelect={onGenerate} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserHistory;
