import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  const [title, setTitle] = useState("");
  const {handleBookCreate}=useBooksContext()

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleBookCreate(title);
    setTitle("");
  };

  const handleChange = (e) => {
    //this component gets updated after every state change that is value entered
    setTitle(e.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add aBook</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        {/*controlled input componet */}
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;

//now instead of getting onCreate reference the Bookcreate component is going to get the direct function through context