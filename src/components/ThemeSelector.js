import "./ThemeSelector.css";
import { useTheme } from "./hooks/useTheme";

const navColors = ["#3BACB6", "#00FFAB", "#4B8673", "#FF8C8C"];

function ThemeSelector() {
  const { mode, changeMode, changeNavColor } = useTheme();

  const changeDarkNote = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img onClick={changeDarkNote} src="./assets/moon.svg" alt="" />
      </div>
      <div className="theme-buttons">
        {navColors.map((color) => {
          return (
            <div
              onClick={() => {
                changeNavColor(color);
              }}
              key={color}
              style={{ background: color }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ThemeSelector;
