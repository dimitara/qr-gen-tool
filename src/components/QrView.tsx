import { Box } from "@mui/material";
import { useContext } from "react";
import QRCode from "react-qr-code";
import { ActivityStore } from "../providers/Activity";

const QrView = (): JSX.Element => {
  const {
    state: { currentValue },
  } = useContext(ActivityStore);
  return <Box>{!!currentValue && <QRCode size={256} value={currentValue} />}</Box>;
};

export default QrView;
