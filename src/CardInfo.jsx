import styles from "./styles.module.scss";

function CardInfo(information) {
  const character = information.character;
  return (
    <div className={styles.cardInfo}>
      <h2 className={styles.characterName}>{character.name}</h2>
      <p className={styles.characterSpecies}>Species - {character.species}</p>
    </div>
  );
}

export default CardInfo;
