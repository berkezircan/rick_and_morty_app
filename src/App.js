import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Components & Pages
import ListingPageComponent from "pages/ListingPage";
import SingleCharacterPage from "pages/SingleCharacterPage";
import { Navbar } from "./components/Navbar";

const themeLight = createTheme({
  palette: {
    background: {
      default: "rgb(39, 43, 51)",
    },
    text: {
      primary: "#ffffff",
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
      <Router>
        <ThemeProvider theme={light ? themeLight : themeDark}>
          <Box lg={{ width: "100%", maxWidth: 500 }}>
            <CssBaseline />

            <Navbar light={light} setLight={setLight} />
          </Box>
        </ThemeProvider>

        <Routes>
          <Route path="/" element={<ListingPageComponent />} />
          <Route path="/character/:id" element={<SingleCharacterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
