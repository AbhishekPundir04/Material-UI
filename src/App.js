import Feed from "./components/Feed";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import { useState } from "react";
function App() {
  const [mode,setMode] = useState("light")
  const darkTheme = createTheme({
    palette:{
      mode:mode,
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>

    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar/>
      </Stack>
    </Box>
    </ThemeProvider>
  );
}

export default App;
