import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export const CharacterListContainer = ({
  onScroll,
  listInnerRef,
  userList,
}) => {
  return (
    <Box
      onScroll={onScroll}
      ref={listInnerRef}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <Grid container padding={"40px"} maxWidth={"1100px"} margin={"0 auto"}>
        {userList.map((item) => {
          console.log(item);

          return (
            <Grid item xs={4} spacing={2} marginBottom={"40px"}>
              <Card sx={{ maxWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="h5" component="div">
                    Title
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

// <div
//   key={index}
//   style={{
//     marginTop: "40px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//   }}
// >
//   <p>Name: {item.name}</p>
// </div>
