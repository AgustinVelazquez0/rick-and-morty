import { useState, useEffect } from "react";
import CardInfo from "./CardInfo";
import "./styles.scss";
import styles from "./styles.module.scss";

function Home() {
  const initialState = [];
  const initialPageState = 1;
  const [characters, setCharacters] = useState(initialState);
  const [page, setPage] = useState(initialPageState);

  function handleNextButtonClick() {
    setPage(page + 1);
    if (page === 42) {
      setPage(initialPageState);
    }
  }

  function handleBackButtonClick() {
    setPage(page - 1);
    if (page === 1) {
      setPage(initialPageState);
    }
  }

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log("Error al traer los personajes", error);
      }
    }

    fetchCharacters();
  }, [page]); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <div className={styles.container}>
      <h1>Rick and Morty API</h1>
      <button className={styles.button} onClick={handleNextButtonClick}>
        Siguiente
      </button>
      <button className={styles.button} onClick={handleBackButtonClick}>
        Anterior
      </button>
      <ul className={styles.list}>
        {characters.map((character) => (
          <li className={styles.character} key={character.id}>
            <img src={character.image} alt={character.name} />
            <CardInfo character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
