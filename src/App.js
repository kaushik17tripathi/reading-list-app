import { useEffect} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";

function App() {
  const {fetchBooks}=useBooksContext()
  
  //fetchBooks()

  useEffect(() => {
    fetchBooks();
  }, []);

 
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList  />
      <BookCreate />
    </div>
  );
}

export default App;

//when key and value have same name we can use title instead of title:title

//the book we clicked to delete only its id will match therefore all others book satisfy the condition except the book to be deleted therefore it will no more be in updated books array

//now we got new array therefore the state will get rerendered

// const editedBook = books.find((book) => book.id === id);

// editedBook.title=title

//   const updatedBooks = [
//     ...books,
//     { id: Math.round(Math.random() * 9999), title },
//   ];
//   setBooks(updatedBooks);

//spread the array [],then added the response.data that is an object containing title and id and enclosed again in an array

//fetchBooks()-calling this function here will cause an infinite cycle of getting response because as we enter app and this function is called the component App is rerendered everytime

//useEffect is use to run a code when component is initially rendered and when it is rerendered()

// const updatedBooks = books.map((book) => {
//   if (book.id === id) return { ...book, title: newTitle };
//   else return book;
// });
//here we should not use {...book,title:newTitle} because suppose there was "pages" key and two user are accessing the app at the same time then if first user update page and then second user updates title then the second user will update only the title in his local storage not the pages therefore we put the ...response.data so data whole object is passed and any no of value changes by different user can be reflected