import { useContext } from "react";
import { ThemeContext } from "../../context/TodosContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};
