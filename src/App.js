// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import CharacterCard from "./components/CharacterCard";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Obtener los personajes desde la API
    const fetchData = async () => {
      try {
        const response = await axios.get("https://narutodb.xyz/api/character");
        const characters = response.data.characters; // Aquí accedemos a los personajes dentro de 'characters'
        setCharacters(characters);
        setFilteredCharacters(characters); // También asignamos 'characters' aquí
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filtrar los personajes basados en el término de búsqueda
    if (searchTerm) {
      const filtered = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCharacters(filtered);
    } else {
      setFilteredCharacters(characters);
    }
  }, [searchTerm, characters]);

  return (
    <div className="app">
      <h1>Personajes de Naruto</h1>
      <SearchBar onSearch={setSearchTerm} />
      <div className="character-list">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default App;