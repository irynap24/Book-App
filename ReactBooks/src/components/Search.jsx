import React, { useState } from 'react';

const Search = ({ fetchBooks }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for books"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
