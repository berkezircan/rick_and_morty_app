import { Box, Typography, Button } from "@mui/material";

import { Brightness4, Brightness7 } from "@mui/icons-material";

export const Navbar = ({ setLight }) => {
  return (
    <Box
      padding={"1rem"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        borderBottom: 1,
        boxShadow: 1,
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        style={{ cursor: "pointer" }}
      >
        Rick And Morty Characters
      </Typography>

      <Button
        data-testid="toggle-theme"
        onClick={() => setLight((prev) => !prev)}
      >
        {setLight ? <Brightness4 /> : <Brightness7 />}
      </Button>
    </Box>
  );
};
