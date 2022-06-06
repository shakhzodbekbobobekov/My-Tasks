import { createContext, useReducer } from "react";

export const TodosContext = createContext();

export function TodosProvider({ children }) {
  return (
    <TodosContext.Provider value={{ color: "green" }}>
      {children}
    </TodosContext.Provider>
  );
}
