import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TodosProvider } from "./context/TodosContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <div>
    <TodosProvider>
      <App />
    </TodosProvider>
  </div>,
  document.getElementById("root")
);
