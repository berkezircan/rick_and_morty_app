import { Box, Button, Typography } from "@mui/material";
import { UserStatus } from "components/UserCard/UserStatus";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleCharacterPage() {
  const [character, setCharacter] = useState(null);
  const [lastFiveEpisode, setLastFiveEpisode] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCharacter(data);

        getEpisode(data.episode.slice(-5));
      })
      .catch((error) => {
        console.error("Error fetching character:", error);
      });
  }, [id]);

  const getEpisode = async (urls) => {
    try {
      const episodeNames = await Promise.all(
        urls.map(async (currentUrl) => {
          const response = await fetch(currentUrl);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const { name } = await response.json();
          return name;
        })
      );
      setLastFiveEpisode(episodeNames);
    } catch (error) {
      console.error("Error fetching episodes:", error);
    }
  };

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
            {lastFiveEpisode.map((episode) => (
              <Typography variant="h5">{episode}</Typography>
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
