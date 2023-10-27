import { Box, Typography, Button } from "@mui/material";

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

      <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>
    </Box>
  );
};
