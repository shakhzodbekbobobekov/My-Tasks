import { createContext, useReducer } from "react";

export const TodosContext = createContext();

const changeColor = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(changeColor, {
    color: "#58249c",
    mode: "dark",
  });

  const changeNavColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  return (
    <TodosContext.Provider value={{ ...state, changeNavColor }}>
      {children}
    </TodosContext.Provider>
  );
}
