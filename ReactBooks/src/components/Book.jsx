import React from 'react';

const Book = ({ book }) => {
  const title = book.volumeInfo.title;
  const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
  const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';

  return (
    <div className="book">
      <h4>{title}</h4>
      <p>Author(s): {authors}</p>
      {thumbnail && <img src={thumbnail} alt={title} />}
    </div>
  );
};

export default Book;
