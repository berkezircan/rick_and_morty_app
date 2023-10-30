import React, { createContext, useContext, useState } from "react";

const CharacterContext = createContext();

export const useCharacterContext = () => useContext(CharacterContext);

export const CharacterProvider = ({ children }) => {
  const [character, setCharacter] = useState(null);
  const [lastFiveEpisode, setLastFiveEpisode] = useState([]);

  const getCharacter = (id) => {
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
  };

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
    <CharacterContext.Provider
      value={{ character, lastFiveEpisode, getCharacter }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
