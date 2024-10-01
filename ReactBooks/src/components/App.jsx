import React, { useState, useEffect } from 'react';
import Search from './Search';
import BookList from './BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (searchQuery) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchRandomBooks = async () => {
    const randomQueries = ["fiction", "science", "fantasy", "mystery"];
    const randomQuery = randomQueries[Math.floor(Math.random() * randomQueries.length)];
    await fetchBooks(randomQuery);
  };

  useEffect(() => {
    fetchRandomBooks();
  }, []);

  return (
    <div>
      <h1>Book Search App</h1>
      <Search fetchBooks={fetchBooks} />
      <BookList books={books} />
    </div>
  );
};

export default App;
