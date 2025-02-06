import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [characters, setCharacters] = useState([]);

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
                    <img src={character.image} alt="img" />
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
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
