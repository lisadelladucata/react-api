export default function Form({ handleFormField, onSubmit, formData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <>
      <h3>Aggiungi una Card</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Nome del Personaggio</label>
          <input
            type="text"
            value={formData.name}
            required
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
            required
            value={formData.image}
            onChange={(e) => handleFormField(e.target.value, "image")}
          />
        </div>
        <div>
          <label htmlFor="race">Razza</label>
          <input
            id="race"
            type="text"
            required
            value={formData.race}
            onChange={(e) => handleFormField(e.target.value, "race")}
          />
        </div>
        <div>
          <label htmlFor="ki">KI</label>
          <input
            id="ki"
            type="number"
            required
            min={0}
            value={formData.ki}
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
    </>
  );
}
