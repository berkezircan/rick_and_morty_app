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
            <Paper
              data-testid="green-circle"
              style={{ ...styles.circle, ...styles.greenCircle }}
            />
          </>
        );
      case "Dead":
        return (
          <>
            <span>Dead</span>
            <Paper
              data-testid="red-circle"
              style={{ ...styles.circle, ...styles.redCircle }}
            />
          </>
        );
      default:
        return (
          <>
            <span>Unknown</span>
            <Paper
              data-testid="gray-circle"
              style={{ ...styles.circle, ...styles.grayCircle }}
            />
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
