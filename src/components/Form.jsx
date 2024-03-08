import { useState } from "react";

export default function Form({ getMovie }) {
  const [formData, setFormData] = useState({ searchTerm: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    getMovie(formData.searchTerm);
  }

  return (
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="searchTerm"
          onChange={handleChange}
          placeholder="Movie title..."
        />
        <input type="submit" value="submit" />
      </form>
  );
}
