import { useState } from 'react';
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

  return (
    <div>
      <h1>Book Search App</h1>
      <Search fetchBooks={fetchBooks} />
      <BookList books={books} />
    </div>
  );
};

export default App;
