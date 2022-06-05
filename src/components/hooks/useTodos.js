import { TodosContext } from "../../context/TodosContext";
import { useContext } from "react";

export const useTodos = () => {
  const context = useContext(TodosContext);

  return context;
};
