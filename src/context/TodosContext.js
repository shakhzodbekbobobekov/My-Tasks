import { createContext, useReducer } from "react";

export const TodosContext = createContext();

export const inintalTodos = [
  { text: "lorem ipsum bla bla 1", complate: false, id: 1 },
  { text: "lorem ipsum bla bla 2", complate: false, id: 2 },
  { text: "lorem ipsum bla bla 3", complate: false, id: 3 },
];

const useTodosContext = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(useTodosContext, inintalTodos);
  return (
    <TodosContext.Provider value={{ ...state }}>
      {children}
    </TodosContext.Provider>
  );
}
