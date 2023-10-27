import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

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
          <Box
            padding={"1rem"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Typography variant="h5" gutterBottom align="center">
              Rick And Morty Characters
            </Typography>

            <Button onClick={() => setLight((prev) => !prev)}>
              Toggle Theme
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
