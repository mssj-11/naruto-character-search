// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Busca un personaje..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;