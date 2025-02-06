import { useEffect, useState } from "react";
import axios from "axios";

const initialFormData = {
  name: "",
  race: "",
  ki: "",
  image: "",
  check: false,
};

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  const handleFormField = (value, fieldName) => {
    setFormData((currentState) => ({
      ...currentState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCharacter = {
      id: characters[characters.length - 1].id + 1,
      name: formData.name,
      race: formData.race,
      ki: formData.ki,
      image: formData.image,
      check: formData.check,
    };
    setCharacters((currentState) => [...currentState, newCharacter]);
    setFormData(initialFormData);
  };

  const handleDelete = (characterId) => {
    setCharacters((currentState) =>
      currentState.filter((character) => character.id !== characterId)
    );
  };

  const fetchPosts = () => {
    axios.get("https://dragonball-api.com/api/characters").then((res) => {
      setCharacters(res.data.items);
    });
  };

  const resetPosts = () => {
    setCharacters([]);
  };

  useEffect(fetchPosts, []);

  return (
    <>
      <div className="container">
        <div className="header">
          <img
            src="https://logos-world.net/wp-content/uploads/2021/02/Dragon-Ball-Logo-1996-present.png"
            alt="logo"
          />
          <div className="btn">
            <button onClick={fetchPosts} className="upload">
              Carica Personaggi
            </button>
            <button onClick={resetPosts} className="reset">
              Resetta
            </button>
          </div>
        </div>

        <div className="card">
          {characters.map((character) => {
            return (
              <>
                <div key={character.id} className="character">
                  <div className="character-img">
                    {character.image ? (
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
                  <button
                    type="button"
                    onClick={() => handleDelete(character.id)}>
                    X
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <div className="form">
          <h3>Aggiungi una Card</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Nome del Personaggio</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  handleFormField(e.target.value, "name");
                }}
              />
            </div>
            <div>
              <label htmlFor="img">Url immagine</label>
              <input
                id="img-form"
                type="text"
                value={formData.image}
                onChange={(e) => handleFormField(e.target.value, "img")}
              />
            </div>
            <div>
              <label htmlFor="race">Razza</label>
              <input
                id="race"
                type="text"
                value={formData.content}
                onChange={(e) => handleFormField(e.target.value, "race")}
              />
            </div>
            <div>
              <label htmlFor="ki">KI</label>
              <input
                id="ki"
                type="number"
                value={formData.content}
                onChange={(e) => handleFormField(e.target.value, "ki")}
              />
            </div>
            <div>
              <label htmlFor="checkbox">Pubblica</label>
              <input
                type="checkbox"
                checked={formData.check}
                onChange={(e) => handleFormField(e.target.checked, "check")}
              />
            </div>
            <button type="submit">Invia</button>
          </form>
        </div>
      </div>
    </>
  );
}
