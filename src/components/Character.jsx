import React from "react";
import Button from "./Button";
export default function Character({ character, handleDelete }) {
  return (
    <>
      <div className="character">
        <div className="character-img">
          {character.image &&
          (character.image.startsWith("http://") ||
            character.image.startsWith("https://")) ? (
            <img src={character.image} alt="img" />
          ) : (
            <img src="path/to/default/image.jpg" alt="default" />
          )}
        </div>
        <div className="character-info">
          <h2 className="character-name">{character.name}</h2>
          <div className="character-description">
            <p>{character.race}</p>
            <h3>Base KI</h3>
            <p>{character.ki}</p>
          </div>
        </div>
      </div>
      <div className="delete-btn">
        <Button type="button" onClick={() => handleDelete(character.id)}>
          X
        </Button>
      </div>
    </>
  );
}
