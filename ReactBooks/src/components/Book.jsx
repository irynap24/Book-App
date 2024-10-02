import React, { useState } from 'react';

const Book = ({ book }) => {
  const title = book.volumeInfo.title;
  const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
  const description = book.volumeInfo.description || 'No description available.';
  const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';

  const [isExpanded, setIsExpanded] = useState(false);

  const maxLength = 150; // Maximum length of description before truncation

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="book">
      <h2>{title}</h2>
      <p><strong>Author(s):</strong> {authors}</p>
      {thumbnail && <img src={thumbnail} alt={title} />}
      <div className="description-container">
        <p>
          <strong>Description:</strong> {isExpanded ? description : `${description.substring(0, maxLength)}...`}
        </p>
        {description.length > maxLength && (
          <button onClick={toggleDescription} className="toggle-button">
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Book;
