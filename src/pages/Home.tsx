import { Grid } from "@mui/material";
import UserInput from "../components/UserInput";
import UserHistory from "../components/UserHistory";
import ActivityProvider from "../providers/Activity";
import QrView from "../components/QrView";

const Home = (): JSX.Element => {
  return (
    <ActivityProvider>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <QrView />
        </Grid>
        <Grid item xs={6}>
          <UserInput />
          <UserHistory />
        </Grid>
      </Grid>
    </ActivityProvider>
  );
};

export default Home;
