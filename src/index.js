import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./context/books";

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);


root.render(
    <Provider>
      <App />
    </Provider>
  );

// root.render(
//   <BooksContext.Provider value={5}>
//     <App />
//   </BooksContext.Provider>
// );
//wrapping app so that app component and its children can access the value prop