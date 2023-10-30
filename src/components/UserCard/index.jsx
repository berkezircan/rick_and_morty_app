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
      <Card sx={{ maxWidth: 275 }}>
        <CardMedia
          sx={{ height: 180, objectFit: "contain" }}
          image={item.image}
          title="green iguana"
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="h5" component="div">
            <UserStatus status={item.status} />
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
          <Link to={`/character/${item.id}`}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
