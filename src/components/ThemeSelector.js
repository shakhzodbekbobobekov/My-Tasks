import "./ThemeSelector.css";
import { useTodos } from "../components/hooks/useTodos";
const navColors = ["#3BACB6", "#00FFAB", "#4B8673", "#FF8C8C"];

function ThemeSelector() {
  const { changeNavColor } = useTodos();
  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {navColors.map((color) => {
          return (
            <div
              onClick={() => {
                changeNavColor(color);
              }}
              style={{ background: color }}
              key={color}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ThemeSelector;
