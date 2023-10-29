import React, { useState, useEffect } from "react";
import axios from "axios";

function RickAndMortyCharacters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        const newCharacters = response.data.results;
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...newCharacters,
        ]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((character) => (
          <li style={{ padding: "20px" }} key={character.id}>
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RickAndMortyCharacters;
