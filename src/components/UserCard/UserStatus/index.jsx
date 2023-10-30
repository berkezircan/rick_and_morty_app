import { Box, Paper } from "@mui/material";

const styles = {
  circle: {
    marginLeft: "10px",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
  },
  greenCircle: {
    backgroundColor: "green",
  },
  redCircle: {
    backgroundColor: "red",
  },
  grayCircle: {
    backgroundColor: "gray",
  },
};

export const UserStatus = ({ status }) => {
  const handleUserStatus = () => {
    switch (status) {
      case "Alive":
        return (
          <>
            <span>Alive</span>
            <Paper style={{ ...styles.circle, ...styles.greenCircle }} />
          </>
        );
      case "Dead":
        return (
          <>
            <span>Dead</span>
            <Paper style={{ ...styles.circle, ...styles.redCircle }} />
          </>
        );
      default:
        return (
          <>
            <span>Unknown</span>
            <Paper style={{ ...styles.circle, ...styles.grayCircle }} />
          </>
        );
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {handleUserStatus()}
    </Box>
  );
};
