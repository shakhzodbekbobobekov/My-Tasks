import "./App.css";

import Home from "./home/Home";
import Create from "./create/Create";
import Recipe from "./recipe/Recipe";
import Navbar from "./components/Navbar";
import Search from "./search/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./components/hooks/useTheme";

function App() {
  const { mode } = useTheme();
  console.log(mode);
  return (
    <div className={`App ${mode}`}>
      <Router>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
