import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);
  //DONT DO THIS:
  // DO NOT CALL the fetchBooks function directly like this:
  // fetchBooks();
  // This will cause the app component to rerender and call the function again and repeat the cycle
  // we end up in an infinite loop

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
