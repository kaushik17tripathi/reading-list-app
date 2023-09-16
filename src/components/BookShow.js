import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import BookEdit from "./BookEdit";

function BookShow({ book }) {

  const {deleteBookById}=useBooksContext()
  
  const[showEdit,setShowEdit]=useState(false)

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick=()=>{
    setShowEdit(!showEdit)
  }
  
  const handleSubmit=()=>{
    // editBookById(id,newTitle)
    //Now the bookedit component can directly access the editbookbyid so no need to pass it but we still need to pass submit in order to set the display of the edit form
    setShowEdit(false)
  }

  let content =<h3>{book.title}</h3>
  if(showEdit) return <BookEdit book={book}  onSubmit={handleSubmit}/>

 
  return (
    <div className="book-show">
      <img alt="book" src={`https://picsum.photos/seed/${book.id}picsum/200/300`}/>
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick} >Edit</button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
