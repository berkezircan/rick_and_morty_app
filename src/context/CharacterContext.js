import React, { createContext, useContext, useState } from "react";

const CharacterContext = createContext();

export const useCharacterContext = () => useContext(CharacterContext);

export const CharacterProvider = ({ children }) => {
  const [character, setCharacter] = useState(null);
  const [lastFiveEpisode, setLastFiveEpisode] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${currPage}`
    );

    const { results, info } = await response.json();

    setPrevPage(currPage);

    if (currPage === info.pages) {
      return;
    }

    setUserList([...userList, ...results]);
  };

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
      value={{
        character,
        lastFiveEpisode,
        getCharacter,
        currPage,
        setCurrPage,
        prevPage,
        setPrevPage,
        userList,
        setUserList,
        fetchCharacters,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
