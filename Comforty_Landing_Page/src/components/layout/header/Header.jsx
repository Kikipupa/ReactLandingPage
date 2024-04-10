import "./Header.css";
import Topline from "./topline/Topline";
import NavBar from "./navigation/NavBar";

function Header() {
  return (
    <div className="header">
      <Topline />
      <NavBar />
    </div>
  );
}

export default Header;
