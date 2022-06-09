import "./Navbar.css";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import { useTheme } from "../components/hooks/useTheme";

function Navbar() {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>RATATOUILLE</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Now create</Link>
      </nav>
    </div>
  );
}

export default Navbar;
