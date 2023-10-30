import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleCharacterPage({ match }) {
  const [character, setCharacter] = useState(null);

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
      })
      .catch((error) => {
        console.error("Error fetching character:", error);
      });
  }, [id]);

  return (
    <div>
      {character ? (
        <div>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleCharacterPage;
