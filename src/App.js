import React from "react";

import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Components & Pages
import { Navbar } from "./components/Navbar";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

function App() {
  const [light, setLight] = React.useState(true);
  return (
    <div className="App">
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <Box lg={{ width: "100%", maxWidth: 500 }}>
          <CssBaseline />

          <Navbar light={light} setLight={setLight} />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
