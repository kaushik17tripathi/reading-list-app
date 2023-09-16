import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const {books}=useBooksContext()

  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />//it is better to pass book as a prop to bookshow rather than using context to pass it 
  ));

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default BookList;

//As we click on the button increment function is called  and the value gets updated it resets the state therefore our top Provider component and its children has to be rerendered as it rerenders the updated count is passed through the value prop the booklist component rerenders and gets the new value and shows that value on screen


// const { count, incrementCount } = useContext(BooksContext);

// <div className="book-list">
// <button onClick={incrementCount}>Click</button>
// {count}
// {renderedBooks}
// </div>