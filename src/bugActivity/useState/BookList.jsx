import { useState } from "react";

function BookList() {
  const [books, setBooks] = useState(["1984", "Brave New World", "Dune"]);

  function deleteBook(index) {
    const newBooks = books.filter((book, i) => i !== index);
    setBooks(newBooks);
  }

  return (
    <div>
      <h2>Books</h2>
      {books.map((book, idx) => (
        <div key={book}>
          {book} <button className="btn btn-error" onClick={() => deleteBook(book)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;
