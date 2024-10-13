import { useState, useEffect } from "react";
import CardInfo from "./CardInfo";
import "./styles.scss";

function Home() {
  const initialState = [];
  const [characters, setCharacters] = useState(initialState);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log("Error al traer los personajes", error);
      }
    }

    fetchCharacters();
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  console.log(characters);

  return (
    <div className="container">
      <h1>Rick and Morty API</h1>
      <button className="">Siguiente</button>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <div>
              <img src={character.image} alt={character.name} />
              <CardInfo character={character} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
