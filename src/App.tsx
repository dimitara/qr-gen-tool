import React from "react";
import Credits from "./pages/Credits";
import Home from "./pages/Home";
import { Box } from "@mui/material";

//TODO: add router

function App() {
  return (
    <Box width={640}>
      <Home />
      <Credits />
    </Box>
  );
}

export default App;
