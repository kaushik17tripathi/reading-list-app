import { useState, createContext } from "react";
import axios from "axios";

const BooksContext = createContext();
//Custom Provider
function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) return { ...book, ...response.data };
      else return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  };

  const handleBookCreate = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    console.log(response);
    const updatedBooks = [...books, response.data];

    setBooks(updatedBooks);
  };

  const valueToShare={
    books,
    fetchBooks,
    handleBookCreate,
    deleteBookById,
    editBookById
  }

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;

// const [count, setCount] = useState(5);

// const valueToShare = {
//   count,
//   incrementCount: () => setCount(count + 1),
// };
// return (
//   <BooksContext.Provider value={valueToShare}>
//     {children}
//   </BooksContext.Provider>
// );
