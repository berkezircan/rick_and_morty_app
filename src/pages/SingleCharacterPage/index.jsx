import { Box, Button, Typography } from "@mui/material";
import { UserStatus } from "components/UserCard/UserStatus";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useCharacterContext } from "context/CharacterContext";

function SingleCharacterPage() {
  const { id } = useParams();

  const { character, lastFiveEpisode, getCharacter } = useCharacterContext();

  useEffect(() => {
    getCharacter(id);
  }, [id, getCharacter]);

  return (
    <Box padding={"40px"}>
      <Box marginBottom={"40px"}>
        <Link to="/">
          <Button variant="contained" aria-label="delete" color="primary">
            Back To Homepage
          </Button>
        </Link>
      </Box>
      {character ? (
        <Box display={"flex"}>
          <Box marginRight={"20px"}>
            <img src={character.image} alt={character.name} />
          </Box>

          <Box>
            <Typography variant="h4">{character.name}</Typography>
            <UserStatus status={character.status} />
            <Typography variant="h5">
              <Typography color="primary" variant="p">
                Species:
              </Typography>{" "}
              {character.species}
            </Typography>
            <Typography variant="h5">
              <Typography color="primary" variant="p">
                Location:
              </Typography>{" "}
              {character.location.name}
            </Typography>
            <Typography variant="h5">
              <Typography color="primary" variant="p">
                Gender:
              </Typography>{" "}
              {character.gender}
            </Typography>
          </Box>

          <Box marginLeft={"40px"}>
            <Typography variant="h4">Last 5 Episodes</Typography>
            {lastFiveEpisode.map((episode, idx) => (
              <Typography
                key={idx}
                variant="p"
                sx={{ display: "block", fontStyle: "italic" }}
              >
                {episode}
              </Typography>
            ))}
          </Box>
        </Box>
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
}

export default SingleCharacterPage;
