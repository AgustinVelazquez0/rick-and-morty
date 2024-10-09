function CardInfo(information) {
  const character = information.character;
  return (
    <div>
      <h3>{character.name}</h3>
      <span>
        {character.status} - {character.species}
      </span>
    </div>
  );
}

export default CardInfo;
