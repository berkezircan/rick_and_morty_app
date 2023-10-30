import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import { Grid } from "@mui/material";

import { Link } from "react-router-dom";

import { UserStatus } from "./UserStatus";

export const UserCard = ({ item }) => {
  return (
    <Grid item xs={4} marginBottom={"40px"}>
      <Card
        sx={{ maxWidth: 275 }}
        style={{
          background: "rgb(60, 62, 68)",
          color: "#fff",
          border: "1px solid #111",
        }}
      >
        <CardMedia
          sx={{ height: 180, objectFit: "contain" }}
          image={item.image}
          title={item.name}
        />
        <CardContent>
          <Typography variant="h5" color="text.white" gutterBottom>
            {item.name}
          </Typography>
          <Typography sx={{ fontSize: 16 }} component="div">
            <UserStatus status={item.status} />
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.white">
            {item.gender}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
            incidunt explicabo nobis voluptates modi dolore voluptas mollitia
            maiores deserunt quaerat?
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/character/${item.id}`}>
            <Button
              sx={{ width: 250 }}
              variant="contained"
              size="small"
              fullWidth
            >
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
