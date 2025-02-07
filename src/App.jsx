import { useEffect, useState } from "react";
import axios from "axios";
import Character from "./components/Character";
import Header from "./components/Header";
import Form from "./components/Form";

const initialFormData = {
  name: "",
  race: "",
  ki: "",
  image: "",
  check: false,
};

export default function App() {
  const [links, setLinks] = useState({});
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

  const fetchPosts = (url = "https://dragonball-api.com/api/characters") => {
    axios.get(url).then((res) => {
      setCharacters(res.data.items);
      setLinks(res.data.links);
    });
  };

  useEffect(fetchPosts, []);

  return (
    <>
      <div className="container">
        <Header links={links} fetchPosts={fetchPosts} />

        <div className="card">
          {characters.map((character) => {
            return (
              <>
                <Character
                  key={character.id}
                  character={character}
                  handleDelete={handleDelete}
                />
              </>
            );
          })}
        </div>
        <div className="form">
          <Form
            handleFormField={handleFormField}
            onSubmit={handleSubmit}
            formData={formData}
          />
        </div>
      </div>
    </>
  );
}
