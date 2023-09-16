import {useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book,onSubmit}) {
  const [title, setTitle] = useState(book.title);
  const {editBookById}=useBooksContext()

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit()
    editBookById(book.id,title)
  };

  return (
    <form className="book-edit" onSubmit={handleFormSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary" >Save</button>
    </form>
  );
}

export default BookEdit;

//whenever we have input element in react we have to keep track of the value with the help of state
